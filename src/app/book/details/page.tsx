"use client";

import { Button } from "@/components/ui/button";
import { DateTimePicker } from "@/components/ui/dateTimePicker";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useUserFormContext from "@/hooks/useUserFormContext";
import React from "react";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  const form = useUserFormContext();
  const router = useRouter();

  const onSubmit = () => {
    router.push("/book/services");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 max-w-[500px] sm:mx-32 mt-8"
      >
        <h1 className="text-3xl">Tell us about yourself</h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">
                  First Name <span className="text-red-500 font-normal">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">
                  Last Name <span className="text-red-500 font-normal">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="booking_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">
                Booking date and time{" "}
                <span className="text-red-500 font-normal">*</span>
              </FormLabel>
              <FormControl>
                <DateTimePicker
                  granularity="minute"
                  jsDate={field.value}
                  onJsDateChange={field.onChange}
                  label="Date and Time"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator />
        <Button type="submit">Next</Button>
      </form>
    </Form>
  );
};

export default Page;
