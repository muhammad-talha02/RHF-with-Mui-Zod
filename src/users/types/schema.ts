import { z } from "zod";

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const schema = z.object({
  name: z.string().min(1, { message: "Name is Required" }),
  email: z
    .string()
    .min(1, { message: "Email is Required" })
    .refine(
      (value) => {
        return emailPattern.test(value);
      },
      { message: "Email not valid" }
    ),
    country:z.object({
      id:z.number(), 
      label:z.string()
    })
});


export type Schema = z.infer<typeof schema>