import type { FastifyReply, FastifyRequest } from 'fastify';
import { sendSuccess, sendError } from '../../common/utils/response.js';
import { createEventSchema, updateEventSchema } from './events.schema.js';
import { createEvent, getEvents, getEvent, updateEvent, deleteEvent } from './events.service.js';
import { NotFoundError } from '../../common/utils/errors.js';
import type { JwtPayload } from '../../common/types/index.js';

export async function createEventHandler(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  const input = createEventSchema.parse(request.body);
  const { sub: userId } = request.user as JwtPayload;
  const event = await createEvent(input, userId);
  sendSuccess(reply, event, 201);
}

export async function getEventsHandler(_request: FastifyRequest, reply: FastifyReply): Promise<void> {
  const events = await getEvents();
  sendSuccess(reply, events);
}

export async function getEventHandler(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  try {
    const { id } = request.params as { id: string };
    const event = await getEvent(id);
    sendSuccess(reply, event);
  } catch (error) {
    if (error instanceof NotFoundError) {
      sendError(reply, error.message, 404);
      return;
    }
    throw error;
  }
}

export async function updateEventHandler(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  try {
    const { id } = request.params as { id: string };
    const input = updateEventSchema.parse(request.body);
    const event = await updateEvent(id, input);
    sendSuccess(reply, event);
  } catch (error) {
    if (error instanceof NotFoundError) {
      sendError(reply, error.message, 404);
      return;
    }
    throw error;
  }
}

export async function deleteEventHandler(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  try {
    const { id } = request.params as { id: string };
    const result = await deleteEvent(id);
    sendSuccess(reply, result);
  } catch (error) {
    if (error instanceof NotFoundError) {
      sendError(reply, error.message, 404);
      return;
    }
    throw error;
  }
}
