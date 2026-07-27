import type { FastifyReply, FastifyRequest } from 'fastify';
import { sendSuccess } from '../../common/utils/response.js';
import { createDonationSchema, donationQuerySchema } from './donations.schema.js';
import { createDonation, getDonations, getDonationStats } from './donations.service.js';

export async function createDonationHandler(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  const input = createDonationSchema.parse(request.body);
  const donation = await createDonation(input);
  sendSuccess(reply, donation, 201);
}

export async function getDonationsHandler(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  const query = donationQuerySchema.parse(request.query);
  const donations = await getDonations(query);
  sendSuccess(reply, donations);
}

export async function getDonationStatsHandler(_request: FastifyRequest, reply: FastifyReply): Promise<void> {
  const stats = await getDonationStats();
  sendSuccess(reply, stats);
}
