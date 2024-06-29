import * as z from "zod";

export const UserDetailsformSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  gender: z.string().min(1, {
    message: "Gender is required",
  }),
  age: z.string().min(1, {
    message: "Age must be a positive number",
  }),
  weight: z.string().min(1, {
    message: "Weight must be a positive number",
  }),
  height: z.number().min(1, {
    message: "Height must be a positive number",
  }),
  dietaryPreferences: z.string(z.string()).nonempty({
    message: "At least one dietary preference is required",
  }),
  allergies: z.string().optional(),
  healthGoals: z.string().min(1, {
    message: "At least one health goal is required",
  }),
});
