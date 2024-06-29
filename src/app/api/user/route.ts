import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";
import { currentProfile } from "@/utils/currentProfile";

export async function GET(req: Request) {
  try {
    const profile = await currentProfile();
    return NextResponse.json(profile);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
