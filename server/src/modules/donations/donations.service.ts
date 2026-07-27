import { prisma } from '../../common/utils/prisma.js';
import type { CreateDonationInput, DonationQuery } from './donations.schema.js';
import type { DonationStats } from '../../common/types/index.js';

export async function createDonation(input: CreateDonationInput) {
  return prisma.donation.create({
    data: {
      donorName: input.donorName,
      amount: input.amount,
      message: input.message || null,
      paymentStatus: input.paymentStatus,
    },
  });
}

export async function getDonations(query: DonationQuery) {
  const where: Record<string, unknown> = {};
  if (query.paymentStatus) where.paymentStatus = query.paymentStatus;
  if (query.donorName) where.donorName = { contains: query.donorName, mode: 'insensitive' };

  return prisma.donation.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  });
}

export async function getDonationStats(): Promise<DonationStats> {
  const [aggregated, pending, completed, failed] = await Promise.all([
    prisma.donation.aggregate({
      _sum: { amount: true },
      _count: { id: true },
    }),
    prisma.donation.findMany({ where: { paymentStatus: 'PENDING' }, select: { amount: true } }),
    prisma.donation.findMany({ where: { paymentStatus: 'COMPLETED' }, select: { amount: true } }),
    prisma.donation.findMany({ where: { paymentStatus: 'FAILED' }, select: { amount: true } }),
  ]);

  return {
    totalAmount: aggregated._sum.amount || 0,
    totalDonations: aggregated._count.id,
    completedAmount: completed.reduce((sum, d) => sum + d.amount, 0),
    pendingAmount: pending.reduce((sum, d) => sum + d.amount, 0),
    failedAmount: failed.reduce((sum, d) => sum + d.amount, 0),
  };
}
