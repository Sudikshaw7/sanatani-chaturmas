import type { FastifyInstance } from 'fastify';
import { authRoutes } from '../modules/auth/auth.routes.js';
import { userRoutes } from '../modules/user/user.routes.js';
import { guestRoutes } from '../modules/guests/guests.routes.js';
import { announcementRoutes } from '../modules/announcements/announcements.routes.js';
import { eventRoutes } from '../modules/events/events.routes.js';
import { donationRoutes } from '../modules/donations/donations.routes.js';

export async function registerRoutes(app: FastifyInstance): Promise<void> {
  app.register(authRoutes, { prefix: '/api' });
  app.register(userRoutes, { prefix: '/api' });
  app.register(guestRoutes, { prefix: '/api' });
  app.register(announcementRoutes, { prefix: '/api' });
  app.register(eventRoutes, { prefix: '/api' });
  app.register(donationRoutes, { prefix: '/api' });
}
