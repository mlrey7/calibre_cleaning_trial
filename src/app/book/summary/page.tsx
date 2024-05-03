"use client";

import { Button } from "@/components/ui/button";

import { Form } from "@/components/ui/form";
import useUserFormContext from "@/hooks/useUserFormContext";
import React from "react";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { BookingRequestType } from "@/lib/validators/bookingServices";

const Page = () => {
  const form = useUserFormContext();
  const router = useRouter();

  const onSubmit = (values: BookingRequestType) => {
    console.log(values);
    router.push("/");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6  max-w-[500px] sm:mx-32 mt-8"
      >
        <h1 className="text-3xl">Summary</h1>
        <div className="flex gap-5">
          <div className="flex flex-col gap-1">
            <h2 className="font-bold">First Name</h2>
            {form.getValues("first_name")}
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-bold">Last Name</h2>
            {form.getValues("last_name")}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-bold">Service</h2>
          <div className="bg-primary py-3 px-4 text-primary-foreground text-sm w-fit rounded">
            {form.getValues("service_type").name}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="font-bold">Service date and time</h2>
          {form.getValues("booking_date").toLocaleString()}
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="font-bold">Add ons</h2>
          <div className="flex flex-wrap gap-2">
            {...form.getValues("extras").map((extra) => (
              <div key={extra.id}>
                <div className="bg-primary py-3 px-4 text-primary-foreground text-sm w-fit rounded">
                  {extra.name}
                </div>
              </div>
            ))}
          </div>
        </div>

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
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
};

export default Page;
