import SacredHeader from "@/components/SacredHeader";
import SacredFooter from "@/components/SacredFooter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const eventTypes: Record<string, { color: string; label: string }> = {
  pravachan: { color: "bg-yellow-500", label: "Pravachan" },
  bhandara: { color: "bg-green-600", label: "Bhandara" },
  yagna: { color: "bg-red-600", label: "Yagna" },
  mahotsav: { color: "bg-saffron", label: "Mahotsav" },
  path: { color: "bg-purple-600", label: "Path" },
  ekadashi: { color: "bg-blue-500", label: "Ekadashi" },
};

// July 2024 events (day => event types)
const julyEvents: Record<number, string[]> = {
  1: ["path"],
  4: ["pravachan"],
  7: ["ekadashi"],
  11: ["pravachan", "path"],
  14: ["pravachan"],
  17: ["mahotsav"],
  18: ["pravachan"],
  20: ["pravachan"],
  21: ["ekadashi"],
  23: ["path"],
  24: ["pravachan"],
  25: ["bhandara"],
  27: ["pravachan"],
  28: ["pravachan"],
  31: ["pravachan"],
};

const monthData: Record<number, { name: string; startDay: number; days: number; events: Record<number, string[]> }> = {
  6: {
    name: "July 2024",
    startDay: 1, // Monday
    days: 31,
    events: julyEvents,
  },
  7: {
    name: "August 2024",
    startDay: 4, // Thursday
    days: 31,
    events: {
      1: ["pravachan"],
      4: ["ekadashi"],
      8: ["pravachan", "bhandara"],
      11: ["path"],
      15: ["mahotsav"],
      19: ["bhandara", "ekadashi"],
      22: ["yagna"],
      25: ["pravachan"],
      29: ["pravachan"],
    },
  },
  8: {
    name: "September 2024",
    startDay: 0, // Sunday
    days: 30,
    events: {
      2: ["path", "ekadashi"],
      5: ["yagna"],
      8: ["pravachan"],
      14: ["mahotsav"],
      17: ["ekadashi"],
      20: ["bhandara"],
      22: ["pravachan"],
      29: ["path"],
    },
  },
};

const sideEvents = [
  { day: "17 July", title: "Pravesh Mahotsav", type: "mahotsav", time: "6:00 AM" },
  { day: "21 July", title: "Ekadashi Upvas Path", type: "ekadashi", time: "5:30 AM" },
  { day: "25 July", title: "Shravani Bhandara", type: "bhandara", time: "11:00 AM" },
  { day: "20 Aug", title: "Purnima Bhandara", type: "bhandara", time: "11:00 AM" },
  { day: "05 Sep", title: "Vishnu Sahasranama", type: "yagna", time: "9:00 AM" },
];

export default function CalendarPage() {
  const [monthIndex, setMonthIndex] = useState(6);
  const month = monthData[monthIndex] || monthData[6];

  const blanks = Array(month.startDay).fill(null);
  const daysArr = Array.from({ length: month.days }, (_, i) => i + 1);

  return (
    <div className="min-h-screen flex flex-col">
      <SacredHeader />

      {/* Page Header */}
      <div className="bg-brown py-10 md:py-14 text-center relative lotus-bg overflow-hidden">
        <div className="absolute inset-0 bg-brown/88 pointer-events-none" />
        <div className="relative">
          <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-2">पंचांग</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white">Sacred Calendar</h1>
          <div className="mt-3 flex justify-center gap-1 text-gold text-sm">❈ ❈ ❈</div>
        </div>
      </div>

      <main className="flex-1 bg-cream py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calendar Grid */}
            <div className="lg:col-span-2">
              {/* Month Nav */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => setMonthIndex((m) => Math.max(6, m - 1))}
                  className="p-2 border border-gold text-brown hover:bg-gold hover:text-white transition-colors duration-150"
                  disabled={monthIndex === 6}
                >
                  <ChevronLeft size={18} />
                </button>
                <h2 className="font-serif text-2xl md:text-3xl text-brown">{month.name}</h2>
                <button
                  onClick={() => setMonthIndex((m) => Math.min(8, m + 1))}
                  className="p-2 border border-gold text-brown hover:bg-gold hover:text-white transition-colors duration-150"
                  disabled={monthIndex === 8}
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Grid */}
              <div className="bg-white border border-gold/40">
                {/* Day Headers */}
                <div className="grid grid-cols-7 border-b border-gold/40">
                  {DAYS.map((d) => (
                    <div
                      key={d}
                      className="py-2.5 text-center text-xs font-sans font-semibold text-brown/60 uppercase tracking-wider border-r border-gold/20 last:border-r-0"
                    >
                      {d}
                    </div>
                  ))}
                </div>

                {/* Calendar Cells */}
                <div className="grid grid-cols-7">
                  {blanks.map((_, i) => (
                    <div key={`blank-${i}`} className="h-20 md:h-24 border-b border-r border-gold/20 bg-cream/40" />
                  ))}
                  {daysArr.map((day) => {
                    const dayEvents = month.events[day] || [];
                    const isToday = day === 17 && monthIndex === 6;
                    const colPos = (blanks.length + day - 1) % 7;
                    return (
                      <div
                        key={day}
                        className={`h-20 md:h-24 border-b border-r border-gold/20 p-1.5 flex flex-col ${
                          isToday ? "bg-orange-50 border-saffron" : "hover:bg-cream/60"
                        } ${colPos === 6 ? "border-r-0" : ""} transition-colors duration-100`}
                      >
                        <span
                          className={`text-xs md:text-sm font-sans font-semibold self-end w-6 h-6 flex items-center justify-center rounded-full ${
                            isToday ? "bg-saffron text-white" : "text-brown"
                          }`}
                        >
                          {day}
                        </span>
                        <div className="mt-1 flex flex-wrap gap-0.5">
                          {dayEvents.map((type, idx) => (
                            <span
                              key={idx}
                              className={`w-2.5 h-2.5 rounded-full ${eventTypes[type]?.color || "bg-gray-400"}`}
                              title={eventTypes[type]?.label}
                            />
                          ))}
                        </div>
                        {dayEvents.length > 0 && (
                          <div className="mt-auto hidden md:block">
                            <span className="text-[9px] font-sans text-brown/50 leading-tight truncate block">
                              {dayEvents.map((t) => eventTypes[t]?.label).join(", ")}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Legend */}
              <div className="mt-5 flex flex-wrap gap-4">
                {Object.entries(eventTypes).map(([key, val]) => (
                  <div key={key} className="flex items-center gap-2 text-xs font-sans text-brown/70">
                    <span className={`w-3 h-3 rounded-full ${val.color}`} />
                    {val.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Sidebar */}
            <div>
              <h3 className="font-serif text-xl text-brown mb-5 border-b border-gold/40 pb-3">
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {sideEvents.map((ev, i) => (
                  <div key={i} className="sacred-card bg-white p-4 flex gap-4 items-start">
                    <div className="shrink-0 text-center min-w-[3rem]">
                      <div className={`w-10 h-10 rounded-full ${eventTypes[ev.type]?.color} flex items-center justify-center text-white text-xs font-sans font-bold mx-auto`}>
                        {ev.day.split(" ")[0]}
                      </div>
                      <div className="text-xs font-sans text-brown/50 mt-1">{ev.day.split(" ")[1]}</div>
                    </div>
                    <div>
                      <div className="font-serif text-base text-brown leading-tight">{ev.title}</div>
                      <div className="text-xs font-sans text-brown/50 mt-1">{ev.time}</div>
                      <span className={`mt-2 inline-block text-xs px-2 py-0.5 font-sans font-semibold text-white ${eventTypes[ev.type]?.color}`}>
                        {eventTypes[ev.type]?.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <SacredFooter />
    </div>
  );
}