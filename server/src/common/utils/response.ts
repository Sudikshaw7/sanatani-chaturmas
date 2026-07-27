import type { FastifyReply } from 'fastify';

interface SuccessResponse<T = unknown> {
  success: true;
  data: T;
}

interface ErrorResponse {
  success: false;
  error: string;
}

export function sendSuccess<T>(reply: FastifyReply, data: T, statusCode: number = 200): void {
  const response: SuccessResponse<T> = { success: true, data };
  reply.status(statusCode).send(response);
}

export function sendError(reply: FastifyReply, error: string, statusCode: number = 500): void {
  const response: ErrorResponse = { success: false, error };
  reply.status(statusCode).send(response);
}
