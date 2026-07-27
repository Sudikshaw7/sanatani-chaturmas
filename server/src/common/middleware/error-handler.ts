import type { FastifyError, FastifyReply, FastifyRequest } from 'fastify';
import { AppError } from '../utils/errors.js';
import { ZodError } from 'zod';

export function errorHandler(
  error: FastifyError | AppError | ZodError | Error,
  _request: FastifyRequest,
  reply: FastifyReply,
): void {
  if (error instanceof AppError) {
    reply.status(error.statusCode).send({
      success: false,
      error: error.message,
    });
    return;
  }

  if (error instanceof ZodError) {
    const messages = error.errors.map((e) => `${e.path.join('.')}: ${e.message}`).join('; ');
    reply.status(400).send({
      success: false,
      error: messages,
    });
    return;
  }

  if ('statusCode' in error && (error as FastifyError).statusCode === 429) {
    reply.status(429).send({
      success: false,
      error: 'Too many requests. Please try again later.',
    });
    return;
  }

  reply.status(500).send({
    success: false,
    error: 'Internal server error',
  });
}
