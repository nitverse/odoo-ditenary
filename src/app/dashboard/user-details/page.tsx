"use client";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { prisma } from "@/utils/db";
import * as z from "zod";
import { useUser } from "@clerk/clerk-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useParams } from "next/navigation";
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
import qs from "query-string";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const router = useRouter();
  const params = useParams();
  let dbUser;
  const { isSignedIn, user, isLoaded } = useUser();

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm({
    resolver: zodResolver(UserDetailsformSchema),
    defaultValues: {
      name: "",
      gender: "",
      age: "",
      weight: "",
      height: "",
      dietaryPreferences: "",
      allergies: "",
      healthGoals: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const handleSubmit = async (
    values: z.infer<typeof UserDetailsformSchema>
  ) => {
    try {
      const url = "/api/userDetail";

      const response = await axios.post(url, values);
      console.log("user updated", +response.data);
      form.reset();
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  if (!isLoaded) {
    // Handle loading state however you like
    return null;
  }

  // if (isSignedIn) {

  // }

  if (!isMounted) {
    return null;
  }
  return (
    <div className="h-full p-6 flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl my-6">User Details</h1>
      <p>Please fill in the details below to access your diet plans.</p>
      <div className="flex justify-center mb-6"></div>

      <Form {...form}>
        <form
          className="space-y-8 flex flex-col justify-center items-center"
          onSubmit={form.handleSubmit(handleSubmit, (errors) =>
            console.log(errors)
          )}
        >
          <div className="flex flex-wrap gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Name</FormLabel>
                  <FormControl>
                    {/* @ts-ignore */}
                    <Input
                      disabled={isLoading}
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
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="MALE">Male</SelectItem>
                      <SelectItem value="FEMALE">Female</SelectItem>
                      <SelectItem value="OTHER">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem className="w-[50%]">
                  <FormLabel className="text-black">Age</FormLabel>
                  <FormControl>
                    {/* @ts-ignore */}
                    <Input
                      disabled={isLoading}
                      placeholder="Enter your name"
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
                <FormItem className="w-[50%]">
                  <FormLabel className="text-black">Weight</FormLabel>
                  <FormControl>
                    {/* @ts-ignore */}
                    <Input
                      disabled={isLoading}
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
                <FormItem className="w-[50%]">
                  <FormLabel className="text-black">Height</FormLabel>
                  <FormControl>
                    {/* @ts-ignore */}
                    <Input
                      disabled={isLoading}
                      placeholder="Enter your height"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="allergies"
              render={({ field }) => (
                <FormItem className="w-[50%]">
                  <FormLabel className="text-black">Allergies</FormLabel>
                  <FormControl>
                    {/* @ts-ignore */}
                    <Input
                      disabled={isLoading}
                      placeholder="Enter your allergies (if any)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dietaryPreferences"
              render={({ field }) => (
                <FormItem className="w-[50%]">
                  <FormLabel className="text-black">Diet Preference</FormLabel>
                  <FormControl>
                    {/* @ts-ignore */}
                    <Input
                      disabled={isLoading}
                      placeholder="Enter your Diet Preferece"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="healthGoals"
              render={({ field }) => (
                <FormItem className="w-[50%]">
                  <FormLabel className="text-black">Health Goals</FormLabel>
                  <FormControl>
                    {/* @ts-ignore */}
                    <Input
                      disabled={isLoading}
                      placeholder="Enter your health goals"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-center mt-8">
            <Button type="submit" disabled={isLoading} variant="default">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default Page;
