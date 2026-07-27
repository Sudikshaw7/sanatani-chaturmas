import { api } from '../api-client';

export interface Event {
  id: string;
  title: string;
  description: string | null;
  date: string;
  location: string | null;
  createdBy: string;
  createdAt: string;
  creator: { id: string; name: string };
  _count?: { guests: number };
  guests?: Array<{ id: string; name: string; email: string | null; phone: string | null; status: string }>;
}

export function getEvents() {
  return api.get<Event[]>('/events');
}

export function getEvent(id: string) {
  return api.get<Event>(`/events/${id}`);
}

export function createEvent(data: { title: string; description?: string; date: string; location?: string }) {
  return api.post<Event>('/events', data);
}

export function updateEvent(id: string, data: Partial<{ title: string; description: string; date: string; location: string }>) {
  return api.put<Event>(`/events/${id}`, data);
}

export function deleteEvent(id: string) {
  return api.delete<{ id: string }>(`/events/${id}`);
}
