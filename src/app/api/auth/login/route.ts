import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    const validUser = process.env.ADMIN_USER;
    const validPass = process.env.ADMIN_PASS;

    if (!validUser || !validPass) {
      return NextResponse.json(
        { message: "Admin credentials are not configured" },
        { status: 500 },
      );
    }

    if (username === validUser && password === validPass) {
      const token = Buffer.from(`${username}:${password}`).toString("base64");
      const cookieStore = await cookies();
      cookieStore.set("admin_auth", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { message: "Invalid username or password" },
      { status: 401 },
    );
  } catch {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
