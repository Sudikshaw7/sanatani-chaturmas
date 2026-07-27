import type { FastifyRequest, FastifyReply } from 'fastify';

export async function requestLogger(
  request: FastifyRequest,
  _reply: FastifyReply,
): Promise<void> {
  const method = request.method;
  const url = request.url;
  const timestamp = new Date().toISOString();
  request.log.info({ method, url, timestamp }, `Incoming request: ${method} ${url}`);
}
