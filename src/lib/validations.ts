import * as z from 'zod';

export const contactSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name is required' }),
  workEmail: z.string().email({ message: 'Valid  email is required' }),
  company: z.string().min(1, { message: 'Company name is required' }),
  website: z.string().optional(),
  serviceNeeded: z.string({ message: 'Please select a service' }),
  budget: z.string({ message: 'Please select a budget / volume' }),
  message: z.string().min(10, { message: 'Please provide some project details' })
});

export type ContactFormValues = z.infer<typeof contactSchema>;