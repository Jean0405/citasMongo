import { z } from "zod";

export const userSchema = z.object({
  ID: z.number({
    required_error: "ID is required",
    invalid_type_error: "ID must be a number",
  }),
  names: z.object({
    name: z.string({
      required_error: "name is required",
      invalid_type_error: "name must be a string",
    }),
    surname: z.string({
      required_error: "surname is required",
      invalid_type_error: "surname must be a string",
    }),
    required_error: "names is required",
  }),
  phone: z.string({
    required_error: "phone is required",
    invalid_type_error: "phone must be a string",
  }),
  address: z.string({
    required_error: "address is required",
    invalid_type_error: "address must be a string",
  }),
  email: z.string().email({
    required_error: "email is required",
    invalid_type_error: "email must be a string",
  }),
  genre: z.object({
    nameGenre: z.enum(["masculino", "femenino"]),
    abbreviation: z.enum(["M", "F"]),
    required_error: "genre is required",
  }),
  attendant: z.object({
    ID: z.number({
      required_error: "ID is required",
      invalid_type_error: "ID must be a number",
    }),
    name: z.string({
      required_error: "name is required",
      invalid_type_error: "name must be a string",
    }),
    phone: z
      .string({
        required_error: "phone is required",
        invalid_type_error: "phone must be a string",
      })
      .max(10, { message: "phone must be exactly 10 characters long" }),
    address: z.string({
      required_error: "address is required",
      invalid_type_error: "address must be a string",
    }),
  }),
});
