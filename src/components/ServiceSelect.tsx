"use client";

import { ServiceType } from "@/lib/validators/bookingServices";
import { Button } from "./ui/button";

const ServiceSelect = ({
  services,
  activeService,
  onChangeService,
}: {
  services: Array<ServiceType>;
  activeService: ServiceType;
  onChangeService: (service: ServiceType) => void;
}) => {
  return (
    <div className="flex flex-wrap gap-4">
      {...services.map((service) => (
        <Button
          key={service.id}
          variant={activeService.id === service.id ? "default" : "outline"}
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            onChangeService(service);
          }}
        >
          {service.name}
        </Button>
      ))}
    </div>
  );
};

export default ServiceSelect;
