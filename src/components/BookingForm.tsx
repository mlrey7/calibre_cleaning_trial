"use client";

import {
  BookingRequestType,
  BookingRequestValidator,
  ServiceType,
} from "@/lib/validators/bookingServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { DateTimePicker } from "./ui/dateTimePicker";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import ServiceSelect from "./ServiceSelect";
import ExtrasSelect from "./ExtrasSelect";

const BookingForm = ({
  initialFirstName,
  initialLastName,
  services,
}: {
  initialFirstName: string;
  initialLastName: string;
  services: Array<ServiceType>;
}) => {
  const form = useForm<BookingRequestType>({
    resolver: zodResolver(BookingRequestValidator),
    defaultValues: {
      first_name: initialFirstName,
      last_name: initialLastName,
      booking_date: new Date(),
      service_type: services[0],
      extras: [],
    },
  });

  const onSubmit = (data: BookingRequestType) => {
    form.reset({
      first_name: "",
      last_name: "",
      booking_date: new Date(),
      service_type: services[0],
      extras: [],
    });
    console.log(data);
  };

  const availableExtras = form.watch("service_type").extras;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 max-w-[800px] sm:mx-32 mt-8"
      >
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

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default BookingForm;
