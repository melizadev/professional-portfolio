import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .regex(
      /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
      "Name can only contain letters and spaces"
    ),
  email: z.string().email("Invalid email format"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});
