import { NextResponse } from "next/server";
import { addPasswordServer } from "@/actions/actions";

export async function POST(req: Request) {
  try {
    const { userId, website, username, password } = await req.json();
    await addPasswordServer(website, username, password, userId);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add password" },
      { status: 500 }
    );
  }
}
