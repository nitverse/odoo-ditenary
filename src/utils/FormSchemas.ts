import * as z from 'zod';

export const UserDetailsformSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  gender: z.string().min(1, {
    message: "Gender is required",
  }),
  age: z.number().int().min(1, {
    message: "Age must be a positive number",
  }),
  weight: z.number().min(1, {
    message: "Weight must be a positive number",
  }),
  height: z.number().min(1, {
    message: "Height must be a positive number",
  }),
  dietaryPreferences: z.array(z.string()).nonempty({
    message: "At least one dietary preference is required",
  }),
  allergies: z.array(z.string()).optional(),
  healthGoals: z.array(z.string()).nonempty({
    message: "At least one health goal is required",
  }),
});
