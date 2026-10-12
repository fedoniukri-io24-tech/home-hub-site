import { NextRequest, NextResponse } from "next/server";
import { isAdminDbEnabled } from "@/lib/adminDbEnabled";
import { createInquiry } from "@/lib/admin/queries";

export async function POST(request: NextRequest) {
  if (!isAdminDbEnabled()) {
    return NextResponse.json(
      { error: "Inquiry storage is temporarily unavailable" },
      { status: 503 },
    );
  }
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    const id = createInquiry({
      name,
      phone: String(body.phone || ""),
      email: String(body.email || ""),
      model: String(body.model || ""),
      message: String(body.message || ""),
    });
    return NextResponse.json({ id }, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Failed to save inquiry" },
      { status: 500 },
    );
  }
}
