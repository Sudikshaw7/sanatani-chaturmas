import SacredHeader from "@/components/SacredHeader";
import SacredFooter from "@/components/SacredFooter";
import { Calendar, MapPin, Clock, Filter } from "lucide-react";
import { useState } from "react";

const allEvents = [
  {
    title: "Pravesh Mahotsav",
    date: "July 17, 2024",
    time: "6:00 AM",
    location: "Main Mandap, Vrindavan",
    type: "Mahotsav",
    desc: "Grand entry ceremony marking the auspicious beginning of Chaturmas with Vedic rituals and abhishek. Thousands of devotees participate in this sacred tradition.",
    img_url: "",
  },
  {
    title: "Gita Pravachan  Chapter 1 & 2",
    date: "July 20, 2024",
    time: "7:00 PM",
    location: "Pravachan Hall",
    type: "Pravachan",
    desc: "Discourse on the opening chapters of the Bhagavad Gita  Arjuna Vishada Yoga and Sankhya Yoga.",
    img_url: "",
  },
  {
    title: "Hanuman Chalisa Path",
    date: "July 23, 2024",
    time: "5:30 AM",
    location: "Hanuman Mandir",
    type: "Path",
    desc: "Mass recitation of Hanuman Chalisa with 1008 lamps offered to Hanumanji.",
    img_url: "",
  },
  {
    title: "Purnima Bhandara",
    date: "August 19, 2024",
    time: "11:00 AM",
    location: "Open Courtyard",
    type: "Bhandara",
    desc: "Community langar and prasad distribution on the auspicious full moon day. All devotees welcome.",
    img_url: "",
  },
  {
    title: "Vishnu Sahasranama Yagna",
    date: "September 5, 2024",
    time: "9:00 AM",
    location: "Yagna Shala",
    type: "Yagna",
    desc: "Sacred fire ritual with chanting of Vishnu Sahasranama  priests from Kashi leading the ceremony.",
    img_url: "",
  },
  {
    title: "Bhajan Sandhya",
    date: "September 14, 2024",
    time: "7:30 PM",
    location: "Open Stage",
    type: "Bhajan",
    desc: "Evening of devotional music and bhajans by renowned artists. A night to remember.",
    img_url: "",
  },
  {
    title: "Deepotsav",
    date: "October 10, 2024",
    time: "6:00 PM",
    location: "River Ghat",
    type: "Mahotsav",
    desc: "Festival of lamps  over 10,000 diyas lit on the ghat as an offering to the divine.",
    img_url: "",
  },
  {
    title: "Chaturmas Samapti",
    date: "November 12, 2024",
    time: "6:00 AM",
    location: "Main Mandap",
    type: "Mahotsav",
    desc: "Concluding ceremony of the four-month observance with special Yagna and Prasad.",
    img_url: "",
  },
];

const typeFilters = ["All", "Mahotsav", "Pravachan", "Bhandara", "Yagna", "Path", "Bhajan"];

const typeBadgeColor: Record<string, string> = {
  Mahotsav: "bg-saffron text-white",
  Pravachan: "bg-yellow-600 text-white",
  Bhandara: "bg-green-600 text-white",
  Yagna: "bg-red-600 text-white",
  Path: "bg-purple-600 text-white",
  Bhajan: "bg-blue-600 text-white",
};

export default function EventsPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? allEvents : allEvents.filter((e) => e.type === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <SacredHeader />

      {/* Page Header */}
      <div className="bg-brown py-10 md:py-14 text-center relative lotus-bg overflow-hidden">
        <div className="absolute inset-0 bg-brown/88 pointer-events-none" />
        <div className="relative">
          <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-2">Sacred Programme</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white">Events & Utsavas</h1>
          <div className="mt-3 flex justify-center gap-1 text-gold text-sm">❈ ❈ ❈</div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-cream border-b border-gold/40 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center gap-2">
          <Filter size={14} className="text-gold shrink-0" />
          <span className="text-xs font-sans font-medium text-brown/60 mr-2 uppercase tracking-wider">Filter:</span>
          {typeFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-xs font-sans px-3 py-1 border transition-colors duration-150 ${
                filter === f
                  ? "bg-saffron text-white border-saffron"
                  : "text-brown border-gold/60 hover:border-saffron hover:text-saffron"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <main className="flex-1 bg-cream py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((event) => (
              <div key={event.title} className="sacred-card bg-white flex flex-col overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src={event.img_url} />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span
                    className={`self-start text-xs font-sans font-semibold px-2 py-0.5 mb-3 ${typeBadgeColor[event.type] || "bg-gray-600 text-white"}`}
                  >
                    {event.type}
                  </span>
                  <h3 className="font-serif text-xl text-brown mb-2">{event.title}</h3>
                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-center gap-1.5 text-xs font-sans text-brown/60">
                      <Calendar size={12} className="text-saffron" /> {event.date}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-sans text-brown/60">
                      <Clock size={12} className="text-saffron" /> {event.time}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-sans text-brown/60">
                      <MapPin size={12} className="text-saffron" /> {event.location}
                    </div>
                  </div>
                  <p className="text-sm font-sans text-brown/70 leading-relaxed flex-1">{event.desc}</p>
                  <button className="mt-4 w-full py-2 border border-saffron text-saffron text-xs font-sans font-semibold uppercase tracking-wider hover:bg-saffron hover:text-white transition-colors duration-150">
                    Register Seva
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-brown/40 font-serif text-2xl">
              No events found for this category.
            </div>
          )}
        </div>
      </main>

      <SacredFooter />
    </div>
  );
}