import { z } from "zod";
import { EMAIL_REGEX, PASSWORD_REGEX } from "./regex";

export const loginValidation = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .regex(EMAIL_REGEX, "Must be a valid email"),
  password: z
    .string()
    .regex(PASSWORD_REGEX, "Must be a valid password")
    .min(8, "Password must be at least 8 characters")
    .max(16, "Password must not exceed 16 characters")
});

export const forgotPasswordValidation = z.object({
  email: z.string().min(1, "Email is required").regex(EMAIL_REGEX, "Must be a valid email"),
})
