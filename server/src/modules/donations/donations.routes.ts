import type { FastifyInstance } from 'fastify';
import { authenticate } from '../../common/middleware/auth.js';
import { createDonationHandler, getDonationsHandler, getDonationStatsHandler } from './donations.controller.js';

export async function donationRoutes(app: FastifyInstance): Promise<void> {
  app.post('/donations', { preHandler: [authenticate] }, createDonationHandler);
  app.get('/donations', { preHandler: [authenticate] }, getDonationsHandler);
  app.get('/donations/stats', { preHandler: [authenticate] }, getDonationStatsHandler);
}
