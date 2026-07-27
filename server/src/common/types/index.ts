import type { Role, GuestStatus } from '@prisma/client';
import type { FastifyRequest } from 'fastify';

export interface JwtPayload {
  sub: string;
  role: Role;
}

export interface AuthenticatedRequest extends FastifyRequest {
  user: JwtPayload;
}

export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  role?: Role;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface CreateGuestInput {
  name: string;
  email?: string;
  phone?: string;
  status?: GuestStatus;
  eventId: string;
}

export interface UpdateGuestInput {
  name?: string;
  email?: string;
  phone?: string;
  status?: GuestStatus;
}

export interface CreateAnnouncementInput {
  title: string;
  message: string;
}

export interface CreateEventInput {
  title: string;
  description?: string;
  date: string;
  location?: string;
}

export interface UpdateEventInput {
  title?: string;
  description?: string;
  date?: string;
  location?: string;
}

export interface CreateDonationInput {
  donorName: string;
  amount: number;
  message?: string;
}

export interface DonationStats {
  totalAmount: number;
  totalDonations: number;
  completedAmount: number;
  pendingAmount: number;
  failedAmount: number;
}
