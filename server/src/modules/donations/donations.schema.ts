import { z } from 'zod';

export const createDonationSchema = z.object({
  donorName: z.string().min(1, 'Donor name is required').max(200),
  amount: z.number().positive('Amount must be positive'),
  message: z.string().max(1000).optional().or(z.literal('')),
  paymentStatus: z.enum(['PENDING', 'COMPLETED', 'FAILED']).optional().default('PENDING'),
});

export const donationQuerySchema = z.object({
  paymentStatus: z.enum(['PENDING', 'COMPLETED', 'FAILED']).optional(),
  donorName: z.string().optional(),
});

export type CreateDonationInput = z.infer<typeof createDonationSchema>;
export type DonationQuery = z.infer<typeof donationQuerySchema>;
