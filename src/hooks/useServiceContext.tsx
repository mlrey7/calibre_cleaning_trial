import { ServiceType } from "@/lib/validators/bookingServices";
import { createContext, useContext } from "react";

const ServiceContext = createContext<Array<ServiceType>>([]);

export function ServiceContextProvider({
  children,
  services,
}: {
  children: React.ReactNode;
  services: Array<ServiceType>;
}) {
  return (
    <ServiceContext.Provider value={services}>
      {children}
    </ServiceContext.Provider>
  );
}

export const useServiceContext = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error(
      "useServiceContext must be used within a ServiceContextProvider"
    );
  }

  return context;
};
