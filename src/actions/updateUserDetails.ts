import { prisma } from "../utils/db";
export async function updateUserDetails(userId: string, formData: any) {
  try {
    const updated = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...formData,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
