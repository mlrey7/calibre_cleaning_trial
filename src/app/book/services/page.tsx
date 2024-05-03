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
import ServiceSelect from "@/components/ServiceSelect";
import { useServiceContext } from "@/hooks/useServiceContext";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  const form = useUserFormContext();
  const router = useRouter();
  const services = useServiceContext();

  const onSubmit = () => {
    router.push("/book/addons");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6  max-w-[500px] sm:mx-32 mt-8"
      >
        <h1 className="text-3xl">What kind of Service do you need?</h1>
        <FormField
          control={form.control}
          name="service_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Service Type</FormLabel>
              <FormControl>
                <ServiceSelect
                  services={services}
                  activeService={field.value}
                  onChangeService={(service) => {
                    form.setValue("extras", []);
                    field.onChange(service);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
