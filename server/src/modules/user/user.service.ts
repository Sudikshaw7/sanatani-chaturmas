import { prisma } from '../../common/utils/prisma.js';
import { NotFoundError, ConflictError } from '../../common/utils/errors.js';
import type { UpdateUserInput } from './user.schema.js';

export async function getProfile(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, name: true, email: true, role: true, createdAt: true },
  });

  if (!user) {
    throw new NotFoundError('User');
  }

  return user;
}

export async function updateProfile(userId: string, input: UpdateUserInput) {
  if (input.email) {
    const existing = await prisma.user.findFirst({
      where: { email: input.email, id: { not: userId } },
    });
    if (existing) {
      throw new ConflictError('Email is already in use');
    }
  }

  const user = await prisma.user.update({
    where: { id: userId },
    data: input,
    select: { id: true, name: true, email: true, role: true, createdAt: true },
  });

  return user;
}
