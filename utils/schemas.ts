import * as z from 'zod'
import { ZodSchema } from 'zod'

export const profileSchema = z.object({
  // firstName: z.string().max(5, { message: 'max length is 5' }),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  username: z.string().min(2),
})

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const resault = schema.safeParse(data)
  if (!resault.success) {
    const errors = resault.error.errors.map((error) => error.message)
    throw new Error(errors.join(','))
  }
  return resault.data
}
