import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

type Payload = {
  stepId: string;
  title?: string;
  rating?: number | string;
  comment?: string;
  submittedAt?: string;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const payload: Payload = {
      ...body,
      submittedAt: new Date().toISOString(),
    };

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

    return NextResponse.json({ ok: true, payload });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
