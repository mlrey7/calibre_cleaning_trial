import { login, getBookingServices } from "@/lib/server";
import Providers from "./providers";
import StepIndicator from "@/components/Stepindicator";
import { Separator } from "@/components/ui/separator";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { bearer, first_name, last_name } = await login();
  const services = await getBookingServices(bearer);

  return (
    <Providers
      services={services}
      first_name={first_name}
      last_name={last_name}
    >
      <StepIndicator />
      {children}
    </Providers>
  );
}
