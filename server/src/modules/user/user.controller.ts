import type { FastifyReply, FastifyRequest } from 'fastify';
import { sendSuccess, sendError } from '../../common/utils/response.js';
import { updateUserSchema } from './user.schema.js';
import { getProfile, updateProfile } from './user.service.js';
import { ConflictError } from '../../common/utils/errors.js';
import type { JwtPayload } from '../../common/types/index.js';

export async function getMe(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  const { sub: userId } = request.user as JwtPayload;
  const user = await getProfile(userId);
  sendSuccess(reply, user);
}

export async function updateMe(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  try {
    const { sub: userId } = request.user as JwtPayload;
    const input = updateUserSchema.parse(request.body);
    const user = await updateProfile(userId, input);
    sendSuccess(reply, user);
  } catch (error) {
    if (error instanceof ConflictError) {
      sendError(reply, error.message, 409);
      return;
    }
    throw error;
  }
}
