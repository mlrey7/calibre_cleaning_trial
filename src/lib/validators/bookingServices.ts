import z from "zod";

export const HourlyValidator = z.object({
  quantity_minimum: z.number(),
  quantity_maximum: z.number(),
  minutes_minimum: z.number(),
  minutes_maximum: z.number(),
  half_hour_increments: z.boolean(),
});

export const ExtrasValidator = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  quantity_based: z.boolean(),
  duration: z.number().optional(),
  icon_code: z.string().optional(),
  icon: z.string().optional(),
  image: z.string().optional(),
  description: z.string(),
  discount_by_frequency: z.boolean(),
  discount_by_code: z.boolean(),
  recurring: z.boolean(),
  ordering: z.number(),
});

export type ExtrasType = z.infer<typeof ExtrasValidator>;

export const ServiceValidator = z.object({
  id: z.number(),
  name: z.string(),
  hourly: HourlyValidator.optional(),
  price: z.number(),
  duration: z.number().optional(),
  commercial: z.boolean().optional(),
  discount_by_frequency: z.boolean(),
  discount_by_code: z.boolean(),
  icon_code: z.string().optional(),
  icon: z.string().optional(),
  image: z.string().optional(),
  extras: z.array(ExtrasValidator).optional(),
});

export type ServiceType = z.infer<typeof ServiceValidator>;

export const BookingServicesValidator = z.array(ServiceValidator);

export const BookingRequestValidator = z.object({
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  booking_date: z.date(),
  service_type: ServiceValidator,
  extras: z.array(ExtrasValidator),
});

export type BookingRequestType = z.infer<typeof BookingRequestValidator>;
