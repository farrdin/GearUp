import { z } from 'zod'

const userValidationSchema = z.object({
  name: z
    .string({
      required_error: 'Name must be provided with string type',
    })
    .min(3)
    .max(50),
  email: z.string({
    required_error: 'Email must be provided with string type',
  }),
  password: z.string({
    required_error: 'Password must be provided with string type',
  }),
  photoURL: z
    .string({
      required_error: 'Photo must be provided with string type',
    })
    .optional(),
  isBlocked: z.boolean().default(false),
  role: z.enum(['customer', 'admin']).default('customer'),
})

export const userValidation = {
  userValidationSchema,
}
