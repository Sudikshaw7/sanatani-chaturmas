import bcrypt from 'bcryptjs';
import { prisma } from '../../common/utils/prisma.js';
import { ConflictError, UnauthorizedError } from '../../common/utils/errors.js';
import type { RegisterInput, LoginInput } from './auth.schema.js';
import type { Role } from '@prisma/client';

const SALT_ROUNDS = 12;

export interface AuthResult {
  user: {
    id: string;
    name: string;
    email: string;
    role: Role;
  };
}

export async function registerUser(input: RegisterInput): Promise<AuthResult> {
  const existing = await prisma.user.findUnique({ where: { email: input.email } });
  if (existing) {
    throw new ConflictError('A user with this email already exists');
  }

  const hashedPassword = await bcrypt.hash(input.password, SALT_ROUNDS);
  const user = await prisma.user.create({
    data: {
      name: input.name,
      email: input.email,
      password: hashedPassword,
      role: input.role as Role,
    },
    select: { id: true, name: true, email: true, role: true },
  });

  return { user };
}

export async function loginUser(input: LoginInput): Promise<AuthResult> {
  const user = await prisma.user.findUnique({
    where: { email: input.email },
    select: { id: true, name: true, email: true, password: true, role: true },
  });

  if (!user) {
    throw new UnauthorizedError('Invalid email or password');
  }

  const isValid = await bcrypt.compare(input.password, user.password);
  if (!isValid) {
    throw new UnauthorizedError('Invalid email or password');
  }

  return {
    user: { id: user.id, name: user.name, email: user.email, role: user.role },
  };
}
