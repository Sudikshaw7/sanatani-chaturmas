import { prisma } from '../../common/utils/prisma.js';
import { NotFoundError } from '../../common/utils/errors.js';
import type { CreateGuestInput, UpdateGuestInput, GuestQuery } from './guests.schema.js';

export async function createGuest(input: CreateGuestInput) {
  const event = await prisma.event.findUnique({ where: { id: input.eventId } });
  if (!event) {
    throw new NotFoundError('Event');
  }

  const guest = await prisma.guest.create({
    data: {
      name: input.name,
      email: input.email || null,
      phone: input.phone || null,
      status: input.status,
      eventId: input.eventId,
    },
    include: { event: { select: { id: true, title: true } } },
  });

  return guest;
}

export async function getGuests(query: GuestQuery) {
  const where: Record<string, unknown> = {};
  if (query.eventId) where.eventId = query.eventId;
  if (query.status) where.status = query.status;

  return prisma.guest.findMany({
    where,
    include: { event: { select: { id: true, title: true } } },
    orderBy: { createdAt: 'desc' },
  });
}

export async function getGuest(id: string) {
  const guest = await prisma.guest.findUnique({
    where: { id },
    include: { event: { select: { id: true, title: true, date: true } } },
  });

  if (!guest) {
    throw new NotFoundError('Guest');
  }

  return guest;
}

export async function updateGuest(id: string, input: UpdateGuestInput) {
  const existing = await prisma.guest.findUnique({ where: { id } });
  if (!existing) {
    throw new NotFoundError('Guest');
  }

  const data: Record<string, unknown> = {};
  if (input.name !== undefined) data.name = input.name;
  if (input.email !== undefined) data.email = input.email || null;
  if (input.phone !== undefined) data.phone = input.phone || null;
  if (input.status !== undefined) data.status = input.status;

  return prisma.guest.update({
    where: { id },
    data,
    include: { event: { select: { id: true, title: true } } },
  });
}

export async function deleteGuest(id: string) {
  const existing = await prisma.guest.findUnique({ where: { id } });
  if (!existing) {
    throw new NotFoundError('Guest');
  }

  await prisma.guest.delete({ where: { id } });

  return { id };
}
