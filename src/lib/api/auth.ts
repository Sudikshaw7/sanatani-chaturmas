import { api } from '../api-client';

interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}

export function register(data: { name: string; email: string; password: string; role?: string }) {
  return api.post<AuthResponse>('/auth/register', data);
}

export function login(data: { email: string; password: string }) {
  return api.post<AuthResponse>('/auth/login', data);
}

export function getMe() {
  return api.get<{
    id: string;
    name: string;
    email: string;
    role: string;
    createdAt: string;
  }>('/users/me');
}
