import { api } from '../api-client';

export interface Donation {
  id: string;
  donorName: string;
  amount: number;
  message: string | null;
  paymentStatus: 'PENDING' | 'COMPLETED' | 'FAILED';
  createdAt: string;
}

export interface DonationStats {
  totalAmount: number;
  totalDonations: number;
  completedAmount: number;
  pendingAmount: number;
  failedAmount: number;
}

export function getDonations(params?: { paymentStatus?: string; donorName?: string }) {
  const query = params ? '?' + new URLSearchParams(params as Record<string, string>).toString() : '';
  return api.get<Donation[]>(`/donations${query}`);
}

export function createDonation(data: { donorName: string; amount: number; message?: string }) {
  return api.post<Donation>('/donations', data);
}

export function getDonationStats() {
  return api.get<DonationStats>('/donations/stats');
}
