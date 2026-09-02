import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { google } from "googleapis";

type Payload = {
  stepId: string;
  title?: string;
  rating?: number | string;
  comment?: string;
  submittedAt?: string;
};

async function appendToSheet(payload: Payload) {
  const sheetId = process.env.SHEET_ID || process.env.GOOGLE_SHEET_ID;
  // Support either raw JSON in GOOGLE_SERVICE_ACCOUNT_KEY or base64 in GOOGLE_SERVICE_ACCOUNT_KEY_B64
  const keyJsonRaw = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  const keyJsonB64 = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_B64;
  const keyJson = keyJsonRaw || (keyJsonB64 ? Buffer.from(keyJsonB64, "base64").toString("utf8") : undefined);

  if (!sheetId || !keyJson) {
    throw new Error("Google Sheets not configured (SHEET_ID or GOOGLE_SERVICE_ACCOUNT_KEY missing)");
  }

  const key = JSON.parse(keyJson);
  const scopes = ["https://www.googleapis.com/auth/spreadsheets"];
  const auth = new google.auth.JWT(key.client_email, undefined, key.private_key, scopes);
  const sheets = google.sheets({ version: "v4", auth });

  const values = [[payload.submittedAt || new Date().toISOString(), payload.stepId, payload.title || "", String(payload.rating || ""), payload.comment || ""]];

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "Sheet1!A:E",
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const payload: Payload = {
      ...body,
      submittedAt: new Date().toISOString(),
    };
    // Try Google Sheets first if configured
    let savedTo: "sheet" | "local" | "none" = "none";
    let sheetError: string | undefined;
    try {
      await appendToSheet(payload);
      savedTo = "sheet";
    } catch (sheetErr: any) {
      console.error("Sheets append failed:", sheetErr);
      sheetError = String(sheetErr?.message || sheetErr);
      // Fallback to local JSON storage
      const root = process.cwd();
      const dataDir = path.join(root, "feedbacks");
      const file = path.join(dataDir, "feedbacks.json");

      if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

      let arr: Payload[] = [];
      if (fs.existsSync(file)) {
        try {
          const raw = fs.readFileSync(file, "utf8");
          arr = JSON.parse(raw) as Payload[];
        } catch (e) {
          arr = [];
        }
      }

      arr.push(payload);
      fs.writeFileSync(file, JSON.stringify(arr, null, 2));
      savedTo = "local";
    }

    return NextResponse.json({ ok: true, payload, savedTo, sheetError });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
