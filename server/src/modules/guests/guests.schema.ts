import { z } from 'zod';

export const createGuestSchema = z.object({
  name: z.string().min(1, 'Name is required').max(200),
  email: z.string().email().optional().or(z.literal('')),
  phone: z.string().max(20).optional().or(z.literal('')),
  status: z.enum(['INVITED', 'CONFIRMED', 'DECLINED']).optional().default('INVITED'),
  eventId: z.string().uuid('Invalid event ID'),
});

export const updateGuestSchema = z.object({
  name: z.string().min(1).max(200).optional(),
  email: z.string().email().optional().or(z.literal('')),
  phone: z.string().max(20).optional().or(z.literal('')),
  status: z.enum(['INVITED', 'CONFIRMED', 'DECLINED']).optional(),
});

export const guestQuerySchema = z.object({
  eventId: z.string().uuid().optional(),
  status: z.enum(['INVITED', 'CONFIRMED', 'DECLINED']).optional(),
});

export type CreateGuestInput = z.infer<typeof createGuestSchema>;
export type UpdateGuestInput = z.infer<typeof updateGuestSchema>;
export type GuestQuery = z.infer<typeof guestQuerySchema>;
