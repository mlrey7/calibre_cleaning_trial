"use client";

import { ServiceContextProvider } from "@/hooks/useServiceContext";
import {
  BookingRequestType,
  BookingRequestValidator,
  ServiceType,
} from "@/lib/validators/bookingServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

const Providers = ({
  children,
  services,
  first_name,
  last_name,
}: Readonly<{
  children: React.ReactNode;
  services: Array<ServiceType>;
  first_name: string;
  last_name: string;
}>) => {
  const methods = useForm<BookingRequestType>({
    resolver: zodResolver(BookingRequestValidator),
    defaultValues: {
      first_name,
      last_name,
      booking_date: new Date(),
      service_type: services[0],
      extras: [],
    },
  });

  return (
    <ServiceContextProvider services={services}>
      <FormProvider {...methods}>{children}</FormProvider>
    </ServiceContextProvider>
  );
};

export default Providers;
