"use client";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserDetailsformSchema } from "@/utils/FormSchemas";

interface pageProps {}

const UseformSchema = z.object({
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

const Page: FC<pageProps> = ({}) => {
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm({
    resolver: zodResolver(UserDetailsformSchema),
    defaultValues: {
      name: "",
      gender: "",
      age: 0,
      weight: 0,
      height: 0,
      dietaryPreferences: [],
      allergies: [],
      healthGoals: [],
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // You can handle form submission here
  };

  if (!isMounted) {
    return null;
  }
  return (
    <div className="h-full flex min-w-max">
      <div className="font-bold text-4xl">
        <h1>User Details</h1>
      </div>

      <Form {...form}>
        <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-8 px-6">
            <div className="items-center justify-center text-center">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your gender" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter your age"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weight (kg)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter your weight"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Height (cm)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter your height"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center justify-center text-center">
            <FormField
              control={form.control}
              name="dietaryPreferences"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dietary Preferences</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your dietary preferences"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center justify-center text-center">
            <FormField
              control={form.control}
              name="allergies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Allergies</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your allergies (if any)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center justify-center text-center">
            <FormField
              control={form.control}
              name="healthGoals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Health Goals</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your health goals" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center justify-center text-center">
            <Button variant="default">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Page;
