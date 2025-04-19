import { Control } from "react-hook-form";
import { FormData } from "@/utils/schemas/form.schema";

export interface BaseFormProps {
  name: keyof FormData;
  control: Control<FormData>;
  errors: Record<string, { message?: string }>;
  label: string;
}