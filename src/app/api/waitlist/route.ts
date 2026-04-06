import { google } from "googleapis";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * Append waitlist signups to a Google Sheet using a service account.
 *
 * Setup:
 * 1. Google Cloud Console: create project → enable "Google Sheets API".
 * 2. IAM → Service Accounts → create key (JSON). Note client_email + private_key.
 * 3. Open your Sheet → Share → add the service account email as Editor.
 * 4. Sheet ID is in the URL: docs.google.com/spreadsheets/d/SHEET_ID/edit
 * 5. Add row 1 headers manually, e.g. "Timestamp" | "Email" (optional but recommended).
 *
 * Env:
 * - GOOGLE_SHEETS_SPREADSHEET_ID
 * - GOOGLE_SERVICE_ACCOUNT_EMAIL
 * - GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY (paste key with \n for line breaks inside quotes)
 * - WAITLIST_SHEET_RANGE (optional, default Sheet1!A:B)
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getClient() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
  const privateKey = rawKey?.replace(/\\n/g, "\n");

  if (!spreadsheetId || !clientEmail || !privateKey) {
    return null;
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return {
    sheets: google.sheets({ version: "v4", auth }),
    spreadsheetId,
  };
}

export async function POST(request: Request) {
  const configured = getClient();
  if (!configured) {
    return NextResponse.json(
      {
        error:
          "Waitlist isn’t connected yet. Add GOOGLE_SHEETS_SPREADSHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, and GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.",
      },
      { status: 503 },
    );
  }

  const { sheets, spreadsheetId } = configured;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const emailRaw =
    typeof body === "object" && body !== null && "email" in body
      ? String((body as { email: unknown }).email)
      : "";
  const email = emailRaw.trim().toLowerCase();

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const range = process.env.WAITLIST_SHEET_RANGE ?? "Sheet1!A:B";

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[new Date().toISOString(), email]],
      },
    });
  } catch (err) {
    console.error("[waitlist] Google Sheets error:", err);
    return NextResponse.json(
      { error: "Couldn’t save your email. Try again in a moment." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
