import { BookingRequestType } from "@/lib/validators/bookingServices";
import { useFormContext } from "react-hook-form";

const useUserFormContext = () => {
  return useFormContext<BookingRequestType>();
};

export default useUserFormContext;
