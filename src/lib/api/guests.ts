import { api } from '../api-client';

export interface Guest {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  status: 'INVITED' | 'CONFIRMED' | 'DECLINED';
  eventId: string;
  createdAt: string;
  event: { id: string; title: string };
}

export function getGuests(params?: { eventId?: string; status?: string }) {
  const query = params ? '?' + new URLSearchParams(params as Record<string, string>).toString() : '';
  return api.get<Guest[]>(`/guests${query}`);
}

export function getGuest(id: string) {
  return api.get<Guest>(`/guests/${id}`);
}

export function createGuest(data: { name: string; email?: string; phone?: string; status?: string; eventId: string }) {
  return api.post<Guest>('/guests', data);
}

export function updateGuest(id: string, data: Partial<{ name: string; email: string; phone: string; status: string }>) {
  return api.put<Guest>(`/guests/${id}`, data);
}

export function deleteGuest(id: string) {
  return api.delete<{ id: string }>(`/guests/${id}`);
}
