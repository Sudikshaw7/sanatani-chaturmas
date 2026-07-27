import type { FastifyReply, FastifyRequest } from 'fastify';
import { sendSuccess, sendError } from '../../common/utils/response.js';
import { createGuestSchema, updateGuestSchema, guestQuerySchema } from './guests.schema.js';
import { createGuest as createGuestService, getGuests, getGuest, updateGuest, deleteGuest } from './guests.service.js';
import { NotFoundError } from '../../common/utils/errors.js';

export async function createGuestHandler(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  try {
    const input = createGuestSchema.parse(request.body);
    const guest = await createGuestService(input);
    sendSuccess(reply, guest, 201);
  } catch (error) {
    if (error instanceof NotFoundError) {
      sendError(reply, error.message, 404);
      return;
    }
    throw error;
  }
}

export async function getGuestsHandler(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  const query = guestQuerySchema.parse(request.query);
  const guests = await getGuests(query);
  sendSuccess(reply, guests);
}

export async function getGuestHandler(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  const { id } = request.params as { id: string };
  try {
    const guest = await getGuest(id);
    sendSuccess(reply, guest);
  } catch (error) {
    if (error instanceof NotFoundError) {
      sendError(reply, error.message, 404);
      return;
    }
    throw error;
  }
}

export async function updateGuestHandler(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  try {
    const { id } = request.params as { id: string };
    const input = updateGuestSchema.parse(request.body);
    const guest = await updateGuest(id, input);
    sendSuccess(reply, guest);
  } catch (error) {
    if (error instanceof NotFoundError) {
      sendError(reply, error.message, 404);
      return;
    }
    throw error;
  }
}

export async function deleteGuestHandler(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  try {
    const { id } = request.params as { id: string };
    const result = await deleteGuest(id);
    sendSuccess(reply, result);
  } catch (error) {
    if (error instanceof NotFoundError) {
      sendError(reply, error.message, 404);
      return;
    }
    throw error;
  }
}
