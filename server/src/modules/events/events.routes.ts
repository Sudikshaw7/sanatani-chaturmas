import type { FastifyInstance } from 'fastify';
import { authenticate } from '../../common/middleware/auth.js';
import { createEventHandler, getEventsHandler, getEventHandler, updateEventHandler, deleteEventHandler } from './events.controller.js';

export async function eventRoutes(app: FastifyInstance): Promise<void> {
  app.post('/events', { preHandler: [authenticate] }, createEventHandler);
  app.get('/events', { preHandler: [authenticate] }, getEventsHandler);
  app.get('/events/:id', { preHandler: [authenticate] }, getEventHandler);
  app.put('/events/:id', { preHandler: [authenticate] }, updateEventHandler);
  app.delete('/events/:id', { preHandler: [authenticate] }, deleteEventHandler);
}
