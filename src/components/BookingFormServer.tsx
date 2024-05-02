import BookingForm from "@/components/BookingForm";
import { getBookingServices, login } from "@/lib/server";

export default async function BookingFormServer() {
  const { bearer, first_name, last_name } = await login();
  const services = await getBookingServices(bearer);

  return (
    <BookingForm
      initialFirstName={first_name}
      initialLastName={last_name}
      services={services}
    />
  );
}
