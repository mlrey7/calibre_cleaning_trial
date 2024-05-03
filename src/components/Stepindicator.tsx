"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";

const StepIndicator = () => {
  const pathName = usePathname().split("/")[2];

  return (
    <div className="flex flex-col sm:mx-32 pt-8 gap-6">
      <div className="flex gap-6 mx-auto sm:m-0">
        <div className="flex gap-3 items-center">
          <div
            className={cn(
              "border-2 border-gray-400 rounded-full flex justify-center items-center h-10 w-10",
              { "bg-gray-400": pathName === "details" }
            )}
          >
            <p className="text-gray-800">1</p>
          </div>
          <h2 className="font-semibold hidden lg:block">Your details</h2>
        </div>

        <div className="flex gap-3 items-center">
          <div
            className={cn(
              "border-2 border-gray-400 rounded-full flex justify-center items-center h-10 w-10",
              { "bg-gray-400": pathName === "services" }
            )}
          >
            <p className="text-gray-800">2</p>
          </div>
          <h2 className="font-semibold hidden lg:block">Services</h2>
        </div>

        <div className="flex gap-3 items-center">
          <div
            className={cn(
              "border-2 border-gray-400 rounded-full flex justify-center items-center h-10 w-10",
              { "bg-gray-400": pathName === "addons" }
            )}
          >
            <p className="text-gray-800">3</p>
          </div>
          <h2 className="font-semibold hidden lg:block">Add ons</h2>
        </div>

        <div className="flex gap-3 items-center">
          <div
            className={cn(
              "border-2 border-gray-400 rounded-full flex justify-center items-center h-10 w-10",
              { "bg-gray-400": pathName === "summary" }
            )}
          >
            <p className="text-gray-800">4</p>
          </div>
          <h2 className="font-semibold hidden lg:block">Summary</h2>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default StepIndicator;
