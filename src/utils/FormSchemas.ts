import * as z from "zod";

export const UserDetailsformSchema = z.object({
  name: z.string().min(1, "Name is required"),
  gender: z.enum(["MALE", "FEMALE", "OTHER"]),
  age: z.string().min(1, "Age is required"),
  weight: z.string().min(1, "Weight is required"),
  height: z.string().min(1, "Height is required"),
  dietaryPreferences: z.string().optional(),
  allergies: z.string().optional(),
  healthGoals: z.string().optional(),
});
