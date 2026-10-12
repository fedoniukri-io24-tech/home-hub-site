import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/adminAuth";
import {
  deleteInquiry,
  getInquiry,
  updateInquiryStatus,
} from "@/lib/admin/queries";

type Ctx = { params: Promise<{ id: string }> };

export async function GET(request: NextRequest, { params }: Ctx) {
  const denied = requireAdmin(request);
  if (denied) return denied;
  const { id } = await params;
  const inquiry = getInquiry(Number(id));
  if (!inquiry) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(inquiry);
}

export async function PATCH(request: NextRequest, { params }: Ctx) {
  const denied = requireAdmin(request);
  if (denied) return denied;
  const { id } = await params;
  if (!getInquiry(Number(id))) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  const body = await request.json();
  const status = String(body.status || "");
  if (!["new", "in_progress", "done", "archived"].includes(status)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }
  updateInquiryStatus(Number(id), status);
  return NextResponse.json({ success: true });
}

export async function DELETE(request: NextRequest, { params }: Ctx) {
  const denied = requireAdmin(request);
  if (denied) return denied;
  const { id } = await params;
  deleteInquiry(Number(id));
  return NextResponse.json({ success: true });
}
