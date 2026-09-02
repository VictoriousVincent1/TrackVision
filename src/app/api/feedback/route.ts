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
  const keyJson = process.env.GOOGLE_SERVICE_ACCOUNT_KEY; // JSON string

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
    try {
      await appendToSheet(payload);
    } catch (sheetErr) {
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
    }

    return NextResponse.json({ ok: true, payload });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
