import { BookingServicesValidator } from "./validators/bookingServices";
import { LoginResponseValidator } from "./validators/loginValidator";

export const API_URL = "https://calibrecleaning-sandbox.launch27.com/latest";

export const login = async () => {
  const loginCredentials = {
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
  };

  const data = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginCredentials),
  });

  return LoginResponseValidator.parse(await data.json());
};

export const getBookingServices = async (token: string) => {
  const service_data = await fetch(`${API_URL}/booking/services`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return BookingServicesValidator.parse(await service_data.json());
};
