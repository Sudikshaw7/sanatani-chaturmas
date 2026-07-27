import type { FastifyInstance } from 'fastify';
import { authenticate } from '../../common/middleware/auth.js';
import { createGuestHandler, getGuestsHandler, getGuestHandler, updateGuestHandler, deleteGuestHandler } from './guests.controller.js';

export async function guestRoutes(app: FastifyInstance): Promise<void> {
  app.post('/guests', { preHandler: [authenticate] }, createGuestHandler);
  app.get('/guests', { preHandler: [authenticate] }, getGuestsHandler);
  app.get('/guests/:id', { preHandler: [authenticate] }, getGuestHandler);
  app.put('/guests/:id', { preHandler: [authenticate] }, updateGuestHandler);
  app.delete('/guests/:id', { preHandler: [authenticate] }, deleteGuestHandler);
}
