import { useQuery } from '@tanstack/react-query';
import AdminSidebar from '@/components/AdminSidebar';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Users, CalendarDays, HeartHandshake, Megaphone,
  TrendingUp, Plus, Bell, ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import * as eventsApi from '@/lib/api/events';
import * as guestsApi from '@/lib/api/guests';
import * as donationsApi from '@/lib/api/donations';
import * as announcementsApi from '@/lib/api/announcements';
import { useAuth } from '@/hooks/use-auth';

export default function AdminDashboard() {
  const { user, logout } = useAuth();

  const { data: eventsData, isLoading: eventsLoading } = useQuery({
    queryKey: ['events'],
    queryFn: eventsApi.getEvents,
  });

  const { data: guestsData, isLoading: guestsLoading } = useQuery({
    queryKey: ['guests'],
    queryFn: () => guestsApi.getGuests(),
  });

  const { data: statsData, isLoading: statsLoading } = useQuery({
    queryKey: ['donation-stats'],
    queryFn: donationsApi.getDonationStats,
  });

  const { data: announcementsData, isLoading: announcementsLoading } = useQuery({
    queryKey: ['announcements'],
    queryFn: announcementsApi.getAnnouncements,
  });

  const { data: donationsData } = useQuery({
    queryKey: ['donations'],
    queryFn: () => donationsApi.getDonations(),
  });

  const totalGuests = guestsData?.length ?? 0;
  const confirmedGuests = guestsData?.filter((g) => g.status === 'CONFIRMED').length ?? 0;
  const totalEvents = eventsData?.length ?? 0;
  const upcomingEvents = eventsData?.filter((e) => new Date(e.date) > new Date()).length ?? 0;
  const totalDonations = statsData?.totalDonations ?? 0;
  const totalAmount = statsData?.totalAmount ?? 0;
  const totalAnnouncements = announcementsData?.length ?? 0;

  const stats = [
    {
      label: 'Total Guests', value: totalGuests.toLocaleString(), change: `${confirmedGuests} confirmed`,
      icon: Users, color: 'text-saffron', bg: 'bg-orange-50', loading: guestsLoading,
    },
    {
      label: 'Events', value: totalEvents.toString(), change: `${upcomingEvents} upcoming`,
      icon: CalendarDays, color: 'text-gold', bg: 'bg-yellow-50', loading: eventsLoading,
    },
    {
      label: 'Donations', value: `₹${(totalAmount / 100000).toFixed(1)}L`, change: `${totalDonations} total`,
      icon: HeartHandshake, color: 'text-green-600', bg: 'bg-green-50', loading: statsLoading,
    },
    {
      label: 'Announcements', value: totalAnnouncements.toString(), change: 'latest updates',
      icon: Megaphone, color: 'text-purple-600', bg: 'bg-purple-50', loading: announcementsLoading,
    },
  ];

  const recentDonations = (donationsData ?? []).slice(0, 4).map((d) => ({
    time: new Date(d.createdAt).toLocaleDateString(),
    text: `Donation ₹${d.amount.toLocaleString()} from ${d.donorName} (${d.paymentStatus})`,
    type: 'donation' as const,
  }));

  const recentGuests = (guestsData ?? []).slice(0, 3).map((g) => ({
    time: new Date(g.createdAt).toLocaleDateString(),
    text: `${g.name} — ${g.status} for ${g.event.title}`,
    type: 'guest' as const,
  }));

  const recentAnnouncements = (announcementsData ?? []).slice(0, 2).map((a) => ({
    time: new Date(a.createdAt).toLocaleDateString(),
    text: `Announcement: ${a.title}`,
    type: 'announcement' as const,
  }));

  const recentActivity = [...recentDonations, ...recentGuests, ...recentAnnouncements]
    .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
    .slice(0, 8);

  const activityColor: Record<string, string> = {
    guest: 'bg-saffron',
    donation: 'bg-green-500',
    announcement: 'bg-purple-500',
  };

  const quickActions = [
    { label: 'Add New Guest', icon: Plus, path: '/admin/guests', color: 'bg-saffron hover:bg-orange-600 text-white' },
    { label: 'Post Announcement', icon: Megaphone, path: '/announcements', color: 'bg-brown hover:bg-brown/80 text-white border border-gold/30' },
    { label: 'Schedule Event', icon: CalendarDays, path: '/calendar', color: 'bg-white hover:bg-cream text-brown border border-gold' },
    { label: 'Record Donation', icon: HeartHandshake, path: '/donation', color: 'bg-green-600 hover:bg-green-700 text-white' },
  ];

  const completedAmount = statsData?.completedAmount ?? 0;
  const pendingAmount = statsData?.pendingAmount ?? 0;
  const total = completedAmount + pendingAmount || 1;
  const completedPct = Math.round((completedAmount / total) * 100);
  const pendingPct = Math.round((pendingAmount / total) * 100);

  const upcoming = (eventsData ?? [])
    .filter((e) => new Date(e.date) > new Date())
    .slice(0, 5);

  return (
    <div className="min-h-screen flex bg-cream">
      <AdminSidebar />

      <div className="flex-1 min-w-0 flex flex-col">
        <div className="bg-white border-b border-gold/40 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
          <div>
            <h1 className="font-serif text-2xl text-brown">Dashboard</h1>
            <p className="text-xs font-sans text-brown/50">Chaturmas — Admin Overview</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-brown/60 hover:text-saffron transition-colors">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-saffron rounded-full" />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-xs font-sans text-brown/60">{user?.name}</span>
              <button
                onClick={logout}
                className="text-xs font-sans text-brown/40 hover:text-saffron transition-colors"
              >
                logout
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 md:p-8 overflow-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white border border-gold/40 p-5 hover:shadow-md transition-shadow duration-200">
                  {stat.loading ? (
                    <>
                      <Skeleton className="h-10 w-10 mb-4" />
                      <Skeleton className="h-8 w-24 mb-2" />
                      <Skeleton className="h-4 w-32" />
                    </>
                  ) : (
                    <>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-2.5 ${stat.bg}`}>
                          <Icon size={22} className={stat.color} />
                        </div>
                        <TrendingUp size={14} className="text-green-500" />
                      </div>
                      <div className="font-serif text-3xl text-brown mb-1">{stat.value}</div>
                      <div className="text-xs font-sans font-semibold text-brown/60 uppercase tracking-wider">{stat.label}</div>
                      <div className="text-xs font-sans text-green-600 mt-1">{stat.change}</div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gold/40">
              <div className="px-6 py-4 border-b border-gold/30 flex items-center justify-between">
                <h2 className="font-serif text-lg text-brown">Recent Activity</h2>
                <span className="text-xs font-sans text-brown/40 uppercase tracking-wider">Live</span>
              </div>
              <div className="divide-y divide-gold/20 max-h-96 overflow-y-auto">
                {recentActivity.length === 0 ? (
                  <div className="px-6 py-8 text-center font-sans text-sm text-brown/40">No recent activity</div>
                ) : (
                  recentActivity.map((item, i) => (
                    <div key={i} className="px-6 py-3.5 flex items-start gap-3 hover:bg-cream/60 transition-colors">
                      <span className={`w-2 h-2 rounded-full shrink-0 mt-1.5 ${activityColor[item.type] ?? 'bg-gold'}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-sans text-brown leading-relaxed">{item.text}</p>
                      </div>
                      <span className="text-xs font-sans text-brown/40 shrink-0">{item.time}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-gold/40">
                <div className="px-6 py-4 border-b border-gold/30">
                  <h2 className="font-serif text-lg text-brown">Quick Actions</h2>
                </div>
                <div className="p-5 grid grid-cols-2 gap-3">
                  {quickActions.map((action) => {
                    const Icon = action.icon;
                    return (
                      <Link
                        key={action.label}
                        to={action.path}
                        className={`flex items-center gap-2.5 px-4 py-3 text-sm font-sans font-semibold transition-colors duration-150 ${action.color}`}
                      >
                        <Icon size={15} />
                        {action.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white border border-gold/40">
                <div className="px-6 py-4 border-b border-gold/30 flex items-center justify-between">
                  <h2 className="font-serif text-lg text-brown">Donations</h2>
                  <Link to="/donation" className="text-xs font-sans text-saffron flex items-center gap-1 hover:underline">
                    View all <ArrowRight size={12} />
                  </Link>
                </div>
                <div className="p-5 space-y-4">
                  {statsLoading ? (
                    <>
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </>
                  ) : (
                    <>
                      <div>
                        <div className="flex justify-between text-xs font-sans text-brown/70 mb-1.5">
                          <span>Completed</span>
                          <span className="font-semibold">{completedPct}%</span>
                        </div>
                        <div className="h-2.5 bg-cream rounded-full overflow-hidden">
                          <div className="h-full rounded-full bg-green-500" style={{ width: `${completedPct}%` }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-sans text-brown/70 mb-1.5">
                          <span>Pending</span>
                          <span className="font-semibold">{pendingPct}%</span>
                        </div>
                        <div className="h-2.5 bg-cream rounded-full overflow-hidden">
                          <div className="h-full rounded-full bg-yellow-500" style={{ width: `${pendingPct}%` }} />
                        </div>
                      </div>
                      <div className="pt-2 grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="font-serif text-xl text-green-600">₹{(completedAmount / 100000).toFixed(1)}L</div>
                          <div className="text-xs font-sans text-brown/50">Completed</div>
                        </div>
                        <div>
                          <div className="font-serif text-xl text-yellow-600">₹{(pendingAmount / 100000).toFixed(1)}L</div>
                          <div className="text-xs font-sans text-brown/50">Pending</div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gold/40">
            <div className="px-6 py-4 border-b border-gold/30 flex items-center justify-between">
              <h2 className="font-serif text-lg text-brown">Upcoming Events</h2>
              <Link to="/calendar" className="text-xs font-sans text-saffron flex items-center gap-1 hover:underline">
                Full calendar <ArrowRight size={12} />
              </Link>
            </div>
            <div className="divide-y divide-gold/20">
              {eventsLoading ? (
                <div className="px-6 py-4 space-y-2">
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-full" />
                </div>
              ) : upcoming.length === 0 ? (
                <div className="px-6 py-8 text-center font-sans text-sm text-brown/40">No upcoming events</div>
              ) : (
                upcoming.map((ev) => {
                  const d = new Date(ev.date);
                  const day = d.getDate().toString();
                  const month = d.toLocaleString('default', { month: 'short' });
                  return (
                    <div key={ev.id} className="px-6 py-4 flex items-center gap-4 hover:bg-cream/50">
                      <div className="w-12 h-12 bg-saffron/10 border border-saffron/30 flex flex-col items-center justify-center shrink-0">
                        <span className="font-serif text-lg text-saffron leading-none">{day}</span>
                        <span className="font-sans text-xs text-saffron/70">{month}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-sans text-sm font-semibold text-brown">{ev.title}</div>
                        <div className="font-sans text-xs text-brown/50">{ev.location ?? 'TBD'}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-sans text-brown/50">Guests</div>
                        <div className="font-sans text-sm font-semibold text-brown">{ev._count?.guests ?? 0}</div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
