import type { FastifyInstance } from 'fastify';
import { authenticate } from '../../common/middleware/auth.js';
import { createAnnouncementHandler, getAnnouncementsHandler, deleteAnnouncementHandler } from './announcements.controller.js';

export async function announcementRoutes(app: FastifyInstance): Promise<void> {
  app.post('/announcements', { preHandler: [authenticate] }, createAnnouncementHandler);
  app.get('/announcements', { preHandler: [authenticate] }, getAnnouncementsHandler);
  app.delete('/announcements/:id', { preHandler: [authenticate] }, deleteAnnouncementHandler);
}
