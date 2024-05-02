import z from "zod";

export const LoginResponseValidator = z.object({
  id: z.number(),
  email: z.string(),
  type: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  bearer: z.string(),
});

export type PrismaUserType = z.infer<typeof LoginResponseValidator>;
