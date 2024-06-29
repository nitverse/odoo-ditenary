"use client";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
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

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const router = useRouter();
  const params = useParams();

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
      dietaryPreferences: "",
      allergies: "",
      healthGoals: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof UserDetailsformSchema>) => {
    try {
      const url = qs.stringifyUrl({
        url: `/api/userDetail`,
      });

      await axios.post(url, values);
      form.reset();
      router.refresh();
    } catch (error) {}
  };

  if (!isMounted) {
    return null;
  }
  return (
    <div className="h-full p-6 flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl my-6">User Details</h1>
      <div className="flex justify-center mb-6"></div>

      <Form {...form}>
        <form
          className="space-y-8 flex flex-col justify-center items-center"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex flex-wrap gap-6"></div>

          <div className="flex flex-wrap gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="w-[50%]">
                  <FormLabel className="text-black">Gender</FormLabel>
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
                <FormItem className="w-[50%]">
                  <FormLabel className="text-black">Age</FormLabel>
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
              name="weight"
              render={({ field }) => (
                <FormItem className="w-[50%]">
                  <FormLabel className="text-black">Weight</FormLabel>
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
                <FormItem className="w-[50%]">
                  <FormLabel className="text-black">Height</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your height" {...field} />
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
                    <Input
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
              name="healthGoals"
              render={({ field }) => (
                <FormItem className="w-[50%]">
                  <FormLabel className="text-black">Health Goals</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your health goals" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-center mt-8">
            <Button type="submit" variant="default">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Page;
