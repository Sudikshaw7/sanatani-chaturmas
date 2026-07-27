import AdminSidebar from "@/components/AdminSidebar";
import type { LucideIcon } from "lucide-react";
import { Search, Plus, Filter, CheckCircle, XCircle, Clock, Download, ChevronDown, Utensils, User, Phone, Mail, Type, Send, Link2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface Guest {
  id: number;
  name: string;
  phone: string;
  email: string;
  event: string;
  guests: number;
  rsvp: "confirmed" | "pending" | "declined";
  meal: "veg" | "veg-jain" | "fruits-only";
  vip: boolean;
  date: string;
  avatar: string;
}

const guestsData: Guest[] = [
  { id: 1, name: "Ramesh Sharma", phone: "+91 98765 43210", email: "ramesh@gmail.com", event: "Pravesh Mahotsav", guests: 4, rsvp: "confirmed", meal: "veg", vip: true, date: "Jul 17", avatar: "" },
  { id: 2, name: "Priya Patel", phone: "+91 87654 32109", email: "priya@gmail.com", event: "Purnima Bhandara", guests: 2, rsvp: "confirmed", meal: "veg-jain", vip: false, date: "Aug 19", avatar: "" },
  { id: 3, name: "Suresh Gupta", phone: "+91 76543 21098", email: "suresh@yahoo.com", event: "Gita Pravachan", guests: 1, rsvp: "pending", meal: "veg", vip: false, date: "Jul 20", avatar: "" },
  { id: 4, name: "Anita Mehta", phone: "+91 65432 10987", email: "anita@outlook.com", event: "Pravesh Mahotsav", guests: 6, rsvp: "confirmed", meal: "fruits-only", vip: true, date: "Jul 17", avatar: "" },
  { id: 5, name: "Vijay Krishnan", phone: "+91 54321 09876", email: "vijay@gmail.com", event: "Vishnu Yagna", guests: 3, rsvp: "declined", meal: "veg", vip: false, date: "Sep 5", avatar: "" },
  { id: 6, name: "Kavita Joshi", phone: "+91 43210 98765", email: "kavita@gmail.com", event: "Purnima Bhandara", guests: 5, rsvp: "confirmed", meal: "veg-jain", vip: true, date: "Aug 19", avatar: "" },
  { id: 7, name: "Manish Tiwari", phone: "+91 32109 87654", email: "manish@gmail.com", event: "Gita Pravachan", guests: 2, rsvp: "pending", meal: "veg", vip: false, date: "Jul 24", avatar: "" },
  { id: 8, name: "Deepa Narayanan", phone: "+91 21098 76543", email: "deepa@gmail.com", event: "Deepotsav", guests: 4, rsvp: "confirmed", meal: "fruits-only", vip: true, date: "Oct 10", avatar: "" },
  { id: 9, name: "Harish Agarwal", phone: "+91 11987 65432", email: "harish@yahoo.com", event: "Pravesh Mahotsav", guests: 1, rsvp: "confirmed", meal: "veg", vip: false, date: "Jul 17", avatar: "" },
  { id: 10, name: "Shobha Devi", phone: "+91 99876 54321", email: "shobha@gmail.com", event: "Purnima Bhandara", guests: 8, rsvp: "pending", meal: "veg-jain", vip: false, date: "Aug 19", avatar: "" },
];

const rsvpConfig: Record<string, { icon: LucideIcon, label: string, badge: string }> = {
  confirmed: { icon: CheckCircle, label: "Confirmed", badge: "bg-green-100 text-green-700" },
  pending: { icon: Clock, label: "Pending", badge: "bg-yellow-100 text-yellow-700" },
  declined: { icon: XCircle, label: "Declined", badge: "bg-red-100 text-red-700" },
};

const mealConfig: Record<string, { label: string; badge: string }> = {
  veg: { label: "Veg", badge: "bg-green-50 text-green-700" },
  "veg-jain": { label: "Veg Jain", badge: "bg-orange-50 text-orange-700" },
  "fruits-only": { label: "Fruits Only", badge: "bg-purple-50 text-purple-700" },
};

export default function AdminGuests() {
  const [search, setSearch] = useState("");
  const [rsvpFilter, setRsvpFilter] = useState("all");
  const [showAddForm, setShowAddForm] = useState(false);
  const { toast } = useToast();

  const getInviteUrl = (guestId: number) => {
    return `${window.location.origin}/invite/${guestId}`;
  };

  const sendInviteWhatsApp = (guest: Guest) => {
    const url = getInviteUrl(guest.id);
    const msg = `Namaste ${guest.name}! 🙏\n\nYou are cordially invited to *Sanatani Chaturmas 2026*.\n\n📅 15 July 2026, Wednesday\n⏰ 6:00 PM Onwards\n📍 Dharma Sabha Hall, Vrindavan, UP\n\nPlease RSVP here:\n${url}\n\nOrganized by Shri Chaturmas Seva Samiti`;
    window.open(`https://wa.me/${guest.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const copyInviteLink = (guestId: number) => {
    const url = getInviteUrl(guestId);
    navigator.clipboard.writeText(url).then(() => {
      toast({ title: "Link copied!", description: "Invitation link copied to clipboard." });
    });
  };

  const filtered = guestsData.filter((g) => {
    const matchSearch =
      g.name.toLowerCase().includes(search.toLowerCase()) ||
      g.event.toLowerCase().includes(search.toLowerCase()) ||
      g.phone.includes(search);
    const matchRsvp = rsvpFilter === "all" || g.rsvp === rsvpFilter;
    return matchSearch && matchRsvp;
  });

  return (
    <div className="min-h-screen flex bg-cream">
      <AdminSidebar />

      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-gold/40 px-6 py-4 sticky top-0 z-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h1 className="font-serif text-2xl text-brown">Guest List</h1>
              <p className="text-xs font-sans text-brown/50">
                {guestsData.length} total guests · {guestsData.filter(g => g.rsvp === "confirmed").length} confirmed
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 border border-gold/60 text-brown px-4 py-2 text-xs font-sans font-semibold hover:border-gold transition-colors">
                <Download size={13} /> Export
              </button>
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="flex items-center gap-1.5 bg-saffron text-white px-4 py-2 text-xs font-sans font-semibold hover:bg-orange-600 transition-colors"
              >
                <Plus size={13} /> Add Guest
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 md:p-6 overflow-auto">
          {/* Add Guest Form */}
          {showAddForm && (
            <div className="bg-white border border-gold/40 p-5 md:p-6 mb-6">
              <h3 className="font-serif text-lg text-brown mb-4">Add New Guest</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                {[
                  { placeholder: "Full Name", icon: User },
                  { placeholder: "Phone Number", icon: Phone },
                  { placeholder: "Email", icon: Mail },
                ].map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.placeholder} className="relative">
                      <Icon size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-brown/40" />
                      <input
                        type="text"
                        placeholder={f.placeholder}
                        className="w-full border border-gold/40 bg-cream pl-9 pr-3 py-2.5 text-sm font-sans text-brown focus:outline-none focus:border-saffron"
                      />
                    </div>
                  );
                })}
                <select className="border border-gold/40 bg-cream px-3 py-2.5 text-sm font-sans text-brown focus:outline-none focus:border-saffron">
                  <option>Select Event</option>
                  <option>Pravesh Mahotsav</option>
                  <option>Gita Pravachan</option>
                  <option>Purnima Bhandara</option>
                  <option>Vishnu Yagna</option>
                </select>
                <select className="border border-gold/40 bg-cream px-3 py-2.5 text-sm font-sans text-brown focus:outline-none focus:border-saffron">
                  <option>Meal Preference</option>
                  <option>Veg</option>
                  <option>Veg Jain</option>
                  <option>Fruits Only</option>
                </select>
                <input
                  type="number"
                  placeholder="No. of guests"
                  className="border border-gold/40 bg-cream px-3 py-2.5 text-sm font-sans text-brown focus:outline-none focus:border-saffron"
                />
              </div>
              <div className="flex gap-3">
                <button className="bg-saffron text-white px-6 py-2 text-sm font-sans font-semibold hover:bg-orange-600 transition-colors">
                  Save Guest
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="border border-gold/60 text-brown px-6 py-2 text-sm font-sans font-semibold hover:border-gold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Search & Filters */}
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <div className="relative flex-1">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-brown/40" />
              <input
                type="text"
                placeholder="Search by name, event, or phone..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-gold/40 bg-white pl-9 pr-4 py-2.5 text-sm font-sans text-brown focus:outline-none focus:border-saffron"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={14} className="text-gold shrink-0" />
              {["all", "confirmed", "pending", "declined"].map((f) => (
                <button
                  key={f}
                  onClick={() => setRsvpFilter(f)}
                  className={`text-xs font-sans px-3 py-2 border capitalize transition-colors ${
                    rsvpFilter === f
                      ? "bg-saffron text-white border-saffron"
                      : "text-brown border-gold/40 hover:border-saffron"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Data Table */}
          <div className="bg-white border border-gold/40 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-sans min-w-[700px]">
                <thead>
                  <tr className="bg-cream border-b border-gold/40">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-brown/60 uppercase tracking-wider">
                      <div className="flex items-center gap-1">Guest <ChevronDown size={12} /></div>
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-brown/60 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-brown/60 uppercase tracking-wider">
                      Event
                    </th>
                    <th className="text-center px-4 py-3 text-xs font-semibold text-brown/60 uppercase tracking-wider">
                      Guests
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-brown/60 uppercase tracking-wider">
                      <div className="flex items-center gap-1"><Utensils size={12} className="text-gold" /> Meal</div>
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-brown/60 uppercase tracking-wider">
                      RSVP
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-brown/60 uppercase tracking-wider">
                      <div className="flex items-center gap-1">Date</div>
                    </th>
                    <th className="text-center px-4 py-3 text-xs font-semibold text-brown/60 uppercase tracking-wider">
                      Invite
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold/20">
                  {filtered.map((guest) => {
                    const RsvpIcon = rsvpConfig[guest.rsvp].icon;
                    return (
                      <tr
                        key={guest.id}
                        className="hover:bg-cream/60 transition-colors duration-100"
                      >
                        <td className="px-4 py-3.5">
                          <div className="flex items-center gap-3">
                            <img
                              src={guest.avatar}
                              alt={guest.name}
                              className="w-8 h-8 rounded-full border border-gold/40 object-cover shrink-0"
                            />
                            <div>
                              <div className="font-medium text-brown flex items-center gap-2">
                                {guest.name}
                                {guest.vip && (
                                  <span className="text-[10px] bg-gold text-white px-1.5 py-0.5 font-bold">VIP</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3.5">
                          <div className="text-xs text-brown/70">{guest.phone}</div>
                          <div className="text-xs text-brown/50">{guest.email}</div>
                        </td>
                        <td className="px-4 py-3.5 text-brown/80 max-w-[140px] truncate">{guest.event}</td>
                        <td className="px-4 py-3.5 text-center">
                          <span className="font-semibold text-brown">{guest.guests}</span>
                        </td>
                        <td className="px-4 py-3.5">
                          <span className={`text-xs px-2 py-0.5 rounded-sm font-semibold ${mealConfig[guest.meal].badge}`}>
                            {mealConfig[guest.meal].label}
                          </span>
                        </td>
                        <td className="px-4 py-3.5">
                          <div className={`inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-sm font-semibold ${rsvpConfig[guest.rsvp].badge}`}>
                            <RsvpIcon size={12} className="" />
                            {rsvpConfig[guest.rsvp].label}
                          </div>
                        </td>
                        <td className="px-4 py-3.5 text-xs text-brown/60">{guest.date}</td>
                        <td className="px-4 py-3.5">
                          <div className="flex items-center justify-center gap-1.5">
                            <button
                              onClick={() => sendInviteWhatsApp(guest)}
                              className="inline-flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white text-[11px] font-sans font-semibold px-2.5 py-1.5 transition-colors"
                              title="Send Invite via WhatsApp"
                            >
                              <Send size={11} /> Send
                            </button>
                            <button
                              onClick={() => copyInviteLink(guest.id)}
                              className="inline-flex items-center justify-center border border-gold/60 text-brown/60 hover:text-saffron hover:border-saffron p-1.5 transition-colors"
                              title="Copy Invite Link"
                            >
                              <Link2 size={12} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {filtered.length === 0 && (
              <div className="py-16 text-center font-serif text-xl text-brown/30">No guests found.</div>
            )}

            {/* Table Footer */}
            <div className="px-4 py-3 border-t border-gold/30 bg-cream flex items-center justify-between text-xs font-sans text-brown/50">
              <span>Showing {filtered.length} of {guestsData.length} guests</span>
              <span className="text-saffron font-semibold">
                Total persons: {filtered.reduce((s, g) => s + g.guests, 0)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}