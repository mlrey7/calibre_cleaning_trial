"use client";

import { Button } from "@/components/ui/button";

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
import ExtrasSelect from "@/components/ExtrasSelect";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  const form = useUserFormContext();
  const router = useRouter();

  const onSubmit = () => {
    router.push("/book/summary");
  };

  const availableExtras = form.watch("service_type").extras;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6  max-w-[500px] sm:mx-32 mt-8"
      >
        <h1 className="text-3xl">Do you want to add addons?</h1>
        {!availableExtras && <h1>No available add ons for this service</h1>}

        {availableExtras && (
          <FormField
            control={form.control}
            name="extras"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Add ons</FormLabel>
                <FormControl>
                  <ExtrasSelect
                    extras={availableExtras}
                    activeExtras={field.value}
                    onChangeExtras={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Separator />
        <div className="flex gap-4">
          <Button
            variant={"ghost"}
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              router.back();
            }}
          >
            Previous
          </Button>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
};

export default Page;
