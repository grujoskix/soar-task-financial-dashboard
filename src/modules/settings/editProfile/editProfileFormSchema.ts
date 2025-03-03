import { z } from 'zod'

export const profileFormSchema = z.object({
  avatar: z.string().nullable().optional(),

  name: z
    .string()
    .trim()
    .min(2, 'Name is required')
    .max(24, 'Max 24 characters allowed'),

  username: z
    .string()
    .trim()
    .min(2, 'Username is required')
    .max(24, 'Max 24 characters allowed'),

  email: z.string().trim().email('Invalid email address'),

  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(100, 'Password too long'),

  birth_date: z
    .union([
      z
        .string()
        .transform((val) => new Date(val)), // Convert string to Date
      z.date(), // Allow native Date type
      z.null(), // Allow null values
    ])
    .refine(
      (date) => date === null || date <= new Date(),
      'Birth date must be in the past',
    )
    .optional(),

  address_present: z
    .string()
    .trim()
    .max(100, 'Max 100 characters allowed')
    .optional(),

  address_permanent: z
    .string()
    .trim()
    .max(100, 'Max 100 characters allowed')
    .optional(),

  city: z.string().trim().max(50, 'Max 50 characters allowed').optional(),

  country: z.string().trim().max(50, 'Max 50 characters allowed').optional(),

  code: z
    .string()
    .trim()
    .regex(/^\d{0,6}$/, 'Code must be at most 6 digits')
    .optional(),
})

export type ProfileFormSchema = z.infer<typeof profileFormSchema>
