import { api } from '../api-client';

export interface Announcement {
  id: string;
  title: string;
  message: string;
  createdBy: string;
  createdAt: string;
  creator: { id: string; name: string };
}

export function getAnnouncements() {
  return api.get<Announcement[]>('/announcements');
}

export function createAnnouncement(data: { title: string; message: string }) {
  return api.post<Announcement>('/announcements', data);
}

export function deleteAnnouncement(id: string) {
  return api.delete<{ id: string }>(`/announcements/${id}`);
}
