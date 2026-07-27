import type { FastifyInstance } from 'fastify';
import { register, login } from './auth.controller.js';

export async function authRoutes(app: FastifyInstance): Promise<void> {
  app.post('/auth/register', register);
  app.post('/auth/login', login);
}
