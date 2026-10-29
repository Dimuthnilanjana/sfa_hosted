import { z } from "zod";

export const demoRequestSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long"),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name is too long"),
  phone: z
    .string()
    .min(9, "Please enter a valid phone number (e.g. 0771234567)")
    .max(15, "Phone number is too long"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  teamSize: z.enum(["1-10", "11-50", "51-200", "200+"], {
    errorMap: () => ({ message: "Please select your sales team size" }),
  }),
  message: z.string().max(500, "Message is too long").optional(),
  website_url: z.string().max(0, "Bot detected").optional().or(z.literal("")), // Honeypot
});

export type DemoRequestInput = z.infer<typeof demoRequestSchema>;

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(100, "First name is too long"),
  lastName: z.string().max(100).optional().or(z.literal("")),
  jobTitle: z.string().max(100).optional().or(z.literal("")),
  company: z.string().max(100).optional().or(z.literal("")),
  email: z.string().email("Please enter a valid work email address"),
  phone: z.string().max(30).optional().or(z.literal("")),
  source: z.string().optional().or(z.literal("")),
  message: z
    .string()
    .min(5, "Please let us know how we can help (at least 5 characters)")
    .max(2000, "Message is too long"),
  website_url: z.string().max(0, "Bot detected").optional().or(z.literal("")), // Honeypot
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

