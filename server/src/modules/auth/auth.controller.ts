import type { FastifyReply, FastifyRequest } from 'fastify';
import { sendSuccess, sendError } from '../../common/utils/response.js';
import { registerSchema, loginSchema } from './auth.schema.js';
import { registerUser, loginUser } from './auth.service.js';
import { ConflictError, UnauthorizedError } from '../../common/utils/errors.js';

export async function register(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  try {
    const input = registerSchema.parse(request.body);
    const { user } = await registerUser(input);
    const token = request.server.jwt.sign({ sub: user.id, role: user.role });
    sendSuccess(reply, { token, user }, 201);
  } catch (error) {
    if (error instanceof ConflictError) {
      sendError(reply, error.message, 409);
      return;
    }
    throw error;
  }
}

export async function login(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  try {
    const input = loginSchema.parse(request.body);
    const { user } = await loginUser(input);
    const token = request.server.jwt.sign({ sub: user.id, role: user.role });
    sendSuccess(reply, { token, user });
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      sendError(reply, error.message, 401);
      return;
    }
    throw error;
  }
}
