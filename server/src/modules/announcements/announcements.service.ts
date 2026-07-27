import { prisma } from '../../common/utils/prisma.js';
import { NotFoundError } from '../../common/utils/errors.js';
import type { CreateAnnouncementInput } from './announcements.schema.js';

export async function createAnnouncement(input: CreateAnnouncementInput, userId: string) {
  return prisma.announcement.create({
    data: {
      title: input.title,
      message: input.message,
      createdBy: userId,
    },
    include: {
      creator: { select: { id: true, name: true } },
    },
  });
}

export async function getAnnouncements() {
  return prisma.announcement.findMany({
    include: {
      creator: { select: { id: true, name: true } },
    },
    orderBy: { createdAt: 'desc' },
  });
}

export async function deleteAnnouncement(id: string) {
  const existing = await prisma.announcement.findUnique({ where: { id } });
  if (!existing) {
    throw new NotFoundError('Announcement');
  }

  await prisma.announcement.delete({ where: { id } });

  return { id };
}
