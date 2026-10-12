import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/adminAuth";
import { createProduct, listProducts } from "@/lib/admin/queries";
import { parseProductBody } from "@/lib/admin/parseProductBody";

export async function GET(request: NextRequest) {
  const denied = requireAdmin(request);
  if (denied) return denied;
  return NextResponse.json(listProducts({ includeDrafts: true }));
}

export async function POST(request: NextRequest) {
  const denied = requireAdmin(request);
  if (denied) return denied;
  try {
    const body = await request.json();
    const data = parseProductBody(body);
    if (!data.slug || !data.name || !data.category_id) {
      return NextResponse.json(
        { error: "slug, name and category_id are required" },
        { status: 400 },
      );
    }
    const id = createProduct(data);
    return NextResponse.json({ id }, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Failed to create product" },
      { status: 500 },
    );
  }
}
