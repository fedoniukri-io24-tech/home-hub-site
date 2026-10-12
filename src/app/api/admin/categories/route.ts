import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/adminAuth";
import {
  createCategory,
  listCategories,
} from "@/lib/admin/queries";

export async function GET(request: NextRequest) {
  const denied = requireAdmin(request);
  if (denied) return denied;
  return NextResponse.json(listCategories());
}

export async function POST(request: NextRequest) {
  const denied = requireAdmin(request);
  if (denied) return denied;
  try {
    const body = await request.json();
    const slug = String(body.slug || "").trim();
    const name_sv = String(body.name_sv || "").trim();
    const name_en = String(body.name_en || "").trim();
    if (!slug || !name_sv || !name_en) {
      return NextResponse.json(
        { error: "slug, name_sv and name_en are required" },
        { status: 400 },
      );
    }
    const id = createCategory({
      slug,
      name_sv,
      name_en,
      priority: Number(body.priority) || 0,
    });
    return NextResponse.json({ id }, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Failed to create" },
      { status: 500 },
    );
  }
}
