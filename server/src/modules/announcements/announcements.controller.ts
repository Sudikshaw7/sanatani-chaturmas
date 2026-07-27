import type { FastifyReply, FastifyRequest } from 'fastify';
import { sendSuccess, sendError } from '../../common/utils/response.js';
import { createAnnouncementSchema } from './announcements.schema.js';
import { createAnnouncement, getAnnouncements, deleteAnnouncement } from './announcements.service.js';
import { NotFoundError } from '../../common/utils/errors.js';
import type { JwtPayload } from '../../common/types/index.js';

export async function createAnnouncementHandler(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  const input = createAnnouncementSchema.parse(request.body);
  const { sub: userId } = request.user as JwtPayload;
  const announcement = await createAnnouncement(input, userId);
  sendSuccess(reply, announcement, 201);
}

export async function getAnnouncementsHandler(_request: FastifyRequest, reply: FastifyReply): Promise<void> {
  const announcements = await getAnnouncements();
  sendSuccess(reply, announcements);
}

export async function deleteAnnouncementHandler(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  try {
    const { id } = request.params as { id: string };
    const result = await deleteAnnouncement(id);
    sendSuccess(reply, result);
  } catch (error) {
    if (error instanceof NotFoundError) {
      sendError(reply, error.message, 404);
      return;
    }
    throw error;
  }
}
