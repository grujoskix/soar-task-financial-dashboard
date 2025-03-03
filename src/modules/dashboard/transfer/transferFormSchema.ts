import { z } from 'zod'

export const transferFormSchema = z.object({
  balance: z.string().regex(/^\d+(\.\d{1,2})?$/, {
    message: 'Enter a valid balance',
  }),
})

export type TransferFormSchema = z.infer<typeof transferFormSchema>
