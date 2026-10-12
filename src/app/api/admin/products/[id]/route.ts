import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/adminAuth";
import {
  deleteProduct,
  getProduct,
  patchProductFlags,
  updateProduct,
} from "@/lib/admin/queries";
import { parseProductBody } from "@/lib/admin/parseProductBody";

type Ctx = { params: Promise<{ id: string }> };

export async function GET(request: NextRequest, { params }: Ctx) {
  const denied = requireAdmin(request);
  if (denied) return denied;
  const { id } = await params;
  const product = getProduct(Number(id));
  if (!product) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(product);
}

export async function PUT(request: NextRequest, { params }: Ctx) {
  const denied = requireAdmin(request);
  if (denied) return denied;
  const { id } = await params;
  const existing = getProduct(Number(id));
  if (!existing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  try {
    const body = await request.json();
    const data = parseProductBody(body);
    if (!("detail_bullets_json" in body) && !("detail_bullets" in body)) {
      data.detail_bullets_json = existing.detail_bullets_json;
    }
    if (!("specs_json" in body) && !("specs" in body)) {
      data.specs_json = existing.specs_json;
    }
    updateProduct(Number(id), data);
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Failed to update" },
      { status: 500 },
    );
  }
}

export async function PATCH(request: NextRequest, { params }: Ctx) {
  const denied = requireAdmin(request);
  if (denied) return denied;
  const { id } = await params;
  const existing = getProduct(Number(id));
  if (!existing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  try {
    const body = (await request.json()) as {
      published?: boolean | number;
      featured?: boolean | number;
      priority?: number;
    };
    const patch: {
      published?: number;
      featured?: number;
      priority?: number;
    } = {};
    if (body.published !== undefined) {
      patch.published =
        body.published === false || body.published === 0 ? 0 : 1;
    }
    if (body.featured !== undefined) {
      patch.featured = body.featured ? 1 : 0;
    }
    if (body.priority !== undefined) {
      patch.priority = Number(body.priority) || 0;
    }
    if (Object.keys(patch).length === 0) {
      return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
    }
    patchProductFlags(Number(id), patch);
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Failed to update" },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest, { params }: Ctx) {
  const denied = requireAdmin(request);
  if (denied) return denied;
  const { id } = await params;
  deleteProduct(Number(id));
  return NextResponse.json({ success: true });
}
