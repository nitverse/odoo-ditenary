import { prisma } from "@/utils/db";
export async function handleUserCreated(userData: any) {
  // const { id, email: email_addresses[0].email_address , role, profile } = userData;
  const id = userData.id;
  const email = userData.email_addresses[0].email_address;
  const role = "USER";
  const profile = userData.profile;

  console.log(profile);

  try {
    const user = await prisma.user.create({
      data: {
        id,
        email,
        role,
        name: profile.first_name + profile.last_name,
        profile: {
          create: {
            id,
            ...profile, // Assuming profile contains age, gender, weight, height
          },
        },
      },
      include: {
        profile: true,
      },
    });
    console.log("User created successfully:", user);
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

export async function handleUserUpdated(userData: any) {
  // Update user and associated Profile in Prisma database
  const { id, email, role, profile } = userData;
  try {
    const user = await prisma.user.update({
      where: { id },
      data: {
        email,
        role,
        profile: {
          update: profile, // Update profile fields as needed
        },
      },
      include: {
        profile: true,
      },
    });
    console.log("User updated successfully:", user);
  } catch (error) {
    console.error("Error updating user:", error);
  }
}

export async function handleUserDeleted(userData: any) {
  // Delete user and associated Profile from Prisma database
  const { id } = userData;
  try {
    const user = await prisma.user.delete({
      where: { id },
      include: {
        profile: true,
      },
    });
    console.log("User deleted successfully:", user);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}
