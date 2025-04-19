import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  birthday: z.date({
    required_error: "Birthday is required",
  }).nullable(),
  nationality: z.string().min(1, "Nationality is required"),
  citizenId: z.string().regex(/^\d{1}-\d{4}-\d{5}-\d{2}-\d{1}$/, "Invalid citizen ID format"),
  gender: z.enum(["male", "female", "unisex"], {
    required_error: "Gender is required",
  }),
  phone: z.object({
    code: z.string().min(1, "Phone code is required"),
    number: z.string().regex(/^\d{9}$/, "Phone number must be 9 digits")
  }),
  passport: z.string().min(1, "Passport is required"),
  expectedSalary: z.string().min(1, "Expected salary is required"),
});

export type FormData = z.infer<typeof formSchema>;

