import { prisma } from '../../common/utils/prisma.js';
import { NotFoundError } from '../../common/utils/errors.js';
import type { CreateEventInput, UpdateEventInput } from './events.schema.js';

export async function createEvent(input: CreateEventInput, userId: string) {
  return prisma.event.create({
    data: {
      title: input.title,
      description: input.description || null,
      date: new Date(input.date),
      location: input.location || null,
      createdBy: userId,
    },
    include: {
      creator: { select: { id: true, name: true } },
    },
  });
}

export async function getEvents() {
  return prisma.event.findMany({
    include: {
      creator: { select: { id: true, name: true } },
      _count: { select: { guests: true } },
    },
    orderBy: { date: 'asc' },
  });
}

export async function getEvent(id: string) {
  const event = await prisma.event.findUnique({
    where: { id },
    include: {
      creator: { select: { id: true, name: true } },
      guests: {
        orderBy: { createdAt: 'desc' },
        select: { id: true, name: true, email: true, phone: true, status: true },
      },
    },
  });

  if (!event) {
    throw new NotFoundError('Event');
  }

  return event;
}

export async function updateEvent(id: string, input: UpdateEventInput) {
  const existing = await prisma.event.findUnique({ where: { id } });
  if (!existing) {
    throw new NotFoundError('Event');
  }

  const data: Record<string, unknown> = {};
  if (input.title !== undefined) data.title = input.title;
  if (input.description !== undefined) data.description = input.description || null;
  if (input.date !== undefined) data.date = new Date(input.date);
  if (input.location !== undefined) data.location = input.location || null;

  return prisma.event.update({
    where: { id },
    data,
    include: {
      creator: { select: { id: true, name: true } },
    },
  });
}

export async function deleteEvent(id: string) {
  const existing = await prisma.event.findUnique({ where: { id } });
  if (!existing) {
    throw new NotFoundError('Event');
  }

  await prisma.event.delete({ where: { id } });

  return { id };
}
