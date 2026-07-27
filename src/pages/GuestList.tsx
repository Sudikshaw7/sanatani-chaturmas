import SacredHeader from "@/components/SacredHeader";
import SacredFooter from "@/components/SacredFooter";
import { MapPin, Users, Search } from "lucide-react";
import { useState } from "react";

interface Guest {
  id: number;
  name: string;
  location: string;
  event: string;
  vip: boolean;
}

const guestsData: Guest[] = [
  { id: 1, name: "Ramesh Sharma", location: "Vrindavan, UP", event: "Pravesh Mahotsav", vip: true },
  { id: 2, name: "Priya Patel", location: "Mathura, UP", event: "Purnima Bhandara", vip: false },
  { id: 3, name: "Suresh Gupta", location: "Delhi NCR", event: "Gita Pravachan", vip: false },
  { id: 4, name: "Anita Mehta", location: "Mumbai, Maharashtra", event: "Pravesh Mahotsav", vip: true },
  { id: 5, name: "Vijay Krishnan", location: "Chennai, Tamil Nadu", event: "Vishnu Yagna", vip: false },
  { id: 6, name: "Kavita Joshi", location: "Jaipur, Rajasthan", event: "Purnima Bhandara", vip: true },
  { id: 7, name: "Manish Tiwari", location: "Lucknow, UP", event: "Gita Pravachan", vip: false },
  { id: 8, name: "Deepa Narayanan", location: "Bangalore, Karnataka", event: "Deepotsav", vip: true },
  { id: 9, name: "Harish Agarwal", location: "Kolkata, West Bengal", event: "Pravesh Mahotsav", vip: false },
  { id: 10, name: "Shobha Devi", location: "Ayodhya, UP", event: "Purnima Bhandara", vip: false },
];

export default function GuestList() {
  const [search, setSearch] = useState("");

  const filtered = guestsData.filter((g) =>
    g.name.toLowerCase().includes(search.toLowerCase()) ||
    g.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <SacredHeader />

      {/* Page Header */}
      <div className="bg-brown py-8 text-center">
        <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-1">अतिथि सूची</p>
        <h1 className="font-serif text-3xl md:text-4xl text-white">Invited Guests</h1>
        <p className="text-sm text-gold/70 mt-2 font-sans">{guestsData.length} guests invited to Sanatani Chaturmas 2026</p>
      </div>

      <main className="flex-1 bg-cream py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Search */}
          <div className="relative mb-8">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brown/40" />
            <input
              type="text"
              placeholder="Search by name or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gold/40 bg-white pl-11 pr-4 py-3 text-sm font-sans text-brown focus:outline-none focus:border-saffron"
            />
          </div>

          {/* Guest Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {filtered.map((guest) => (
              <div
                key={guest.id}
                className="bg-white border border-gold/30 p-5 flex items-start gap-4 hover:border-gold/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-saffron/10 border border-gold/40 flex items-center justify-center text-saffron font-serif text-lg shrink-0">
                  {guest.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-serif text-brown text-base truncate">{guest.name}</h3>
                    {guest.vip && (
                      <span className="text-[10px] bg-gold text-white px-1.5 py-0.5 font-bold shrink-0">VIP</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-brown/60 text-xs font-sans mb-1">
                    <MapPin size={12} className="text-saffron shrink-0" />
                    <span className="truncate">{guest.location}</span>
                  </div>
                  <p className="text-xs text-brown/40 font-sans">{guest.event}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-16 text-center font-serif text-xl text-brown/30">No guests found.</div>
          )}

          {/* Summary */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-gold/30 px-6 py-3">
              <Users size={16} className="text-saffron" />
              <span className="text-sm font-sans text-brown">
                Showing <span className="font-semibold">{filtered.length}</span> of <span className="font-semibold">{guestsData.length}</span> guests
              </span>
            </div>
          </div>
        </div>
      </main>

      <SacredFooter />
    </div>
  );
}
