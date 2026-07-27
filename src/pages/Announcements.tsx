import SacredHeader from "@/components/SacredHeader";
import SacredFooter from "@/components/SacredFooter";
import { Pin, Calendar, Tag } from "lucide-react";

const announcements = [
  {
    pinned: true,
    title: "Venue Change: Pravachan Hall Shifted to Dhyan Kendra",
    date: "July 14, 2024",
    category: "Important",
    content:
      "Due to renovation work at the main Pravachan Hall, all evening discourses from July 18th onwards will be held at the Dhyan Kendra  Building B, Ground Floor. Seating capacity is 800. Please plan accordingly and arrive early for front seating.",
  },
  {
    pinned: true,
    title: "Registration Open for VIP Seva Passes  Limited Availability",
    date: "July 12, 2024",
    category: "Registration",
    content:
      "VIP Seva Passes for the entire Chaturmas season are now available. These include reserved front seating, priority darshan, and special langar arrangements. Only 200 passes available. Register at the Seva Desk or online.",
  },
  {
    pinned: false,
    title: "Pujya Rameshacharyaji Arrives on July 15th",
    date: "July 10, 2024",
    category: "Arrival",
    content:
      "Devotees are invited to the grand welcome ceremony for Pujya Guruji on July 15th at 4:00 PM. A grand procession from the railway station to the Mandap will be conducted. Thousands are expected.",
  },
  {
    pinned: false,
    title: "Bhandara Volunteer Registration",
    date: "July 8, 2024",
    category: "Seva",
    content:
      "We need 500+ volunteers for the Purnima Bhandara on August 19th. Roles include: kitchen seva, serving, crowd management, and sanitation. Volunteers will receive a blessed seva medal. Register at the seva counter.",
  },
  {
    pinned: false,
    title: "New: Live Streaming of All Pravachans on YouTube",
    date: "July 5, 2024",
    category: "Digital",
    content:
      "Unable to attend in person? We are pleased to announce that all Pravachans by Pujya Guruji will now be live-streamed on our official YouTube channel. Subscribe to get notified.",
  },
  {
    pinned: false,
    title: "Special Children's Mahotsav on August 15th",
    date: "July 3, 2024",
    category: "Mahotsav",
    content:
      "On the occasion of Independence Day, a special children's Mahotsav will be organized with cultural performances, storytelling of Hindu epics, and competitions. All children up to age 16 are welcome.",
  },
  {
    pinned: false,
    title: "Prasad Timing Changes During Shravan Month",
    date: "July 1, 2024",
    category: "Important",
    content:
      "During the sacred Shravan month, prasad distribution timings are: Morning: 7:00 AM, Noon: 12:30 PM, Evening: 8:00 PM. On Mondays, special Shiv prasad will be distributed after evening aarti.",
  },
  {
    pinned: false,
    title: "Donation Seva Counter Now Open 24 Hours",
    date: "June 28, 2024",
    category: "Seva",
    content:
      "The Donation Seva Counter at the main entrance is now open 24 hours a day for the duration of Chaturmas. Online donations also accepted via the website. All donations are eligible for tax exemption under 80G.",
  },
];

const categoryColor: Record<string, string> = {
  Important: "bg-red-100 text-red-700",
  Registration: "bg-blue-100 text-blue-700",
  Arrival: "bg-green-100 text-green-700",
  Seva: "bg-orange-100 text-orange-700",
  Digital: "bg-purple-100 text-purple-700",
  Mahotsav: "bg-yellow-100 text-yellow-700",
};

export default function AnnouncementsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SacredHeader />

      {/* Page Header */}
      <div className="bg-brown py-10 md:py-14 text-center relative lotus-bg overflow-hidden">
        <div className="absolute inset-0 bg-brown/88 pointer-events-none" />
        <div className="relative">
          <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-2">पत्रिका</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white">Announcements</h1>
          <div className="mt-3 flex justify-center gap-1 text-gold text-sm">❈ ❈ ❈</div>
        </div>
      </div>

      <main className="flex-1 bg-cream py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Pinned note */}
          <div className="flex items-center gap-2 mb-6 text-xs font-sans text-brown/50 uppercase tracking-wider">
            <Pin size={12} className="text-saffron" />
            Pinned announcements shown first
          </div>

          <div className="space-y-5">
            {announcements.map((item, i) => (
              <article
                key={i}
                className={`bg-white relative overflow-hidden ${
                  item.pinned
                    ? "border-l-4 border-saffron shadow-sm"
                    : "border border-gold/40 hover:border-gold hover:shadow-md transition-all duration-150"
                }`}
              >
                {item.pinned && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 text-saffron text-xs font-sans font-semibold">
                    <Pin size={12} /> Pinned
                  </div>
                )}
                <div className="px-6 py-5">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className={`text-xs font-sans font-semibold px-2 py-0.5 rounded-sm ${
                        categoryColor[item.category] || "bg-gray-100 text-gray-700"
                      }`}
                    >
                      <Tag size={10} className="inline mr-1" />
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-sans text-brown/50">
                      <Calendar size={11} className="text-saffron" />
                      {item.date}
                    </span>
                  </div>
                  <h2 className="font-serif text-xl md:text-2xl text-brown mb-3">{item.title}</h2>
                  <p className="font-sans text-sm text-brown/70 leading-relaxed">{item.content}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <SacredFooter />
    </div>
  );
}