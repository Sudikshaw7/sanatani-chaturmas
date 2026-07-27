import { z } from 'zod';

export const createAnnouncementSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200),
  message: z.string().min(1, 'Message is required').max(5000),
});

export type CreateAnnouncementInput = z.infer<typeof createAnnouncementSchema>;
