import { currentProfile } from "@/utils/currentProfile";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const profile = await currentProfile();
    console.log(profile);
    console.log("inside post req");

    const {
      name,
      gender,
      age,
      dietaryPreferences,
      allergies,
      healthGoals,
      weight,
      height,
    } = await req.json();

    const updatedUser = await prisma.user.update({
      where: { id: profile.id },
      data: {
        name,
        gender,
        age,
        dietaryPreferences,
        allergies,
        healthGoals,
        weight,
        height,
      },
    });

    console.log("updated user");

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
