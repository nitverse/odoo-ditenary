import { auth } from "@clerk/nextjs/server";
import { prisma } from "./db";

export const currentProfile = async () => {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const profile = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return profile;
};
