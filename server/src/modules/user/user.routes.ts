import type { FastifyInstance } from 'fastify';
import { authenticate } from '../../common/middleware/auth.js';
import { getMe, updateMe } from './user.controller.js';

export async function userRoutes(app: FastifyInstance): Promise<void> {
  app.get('/users/me', { preHandler: [authenticate] }, getMe);
  app.put('/users/me', { preHandler: [authenticate] }, updateMe);
}
