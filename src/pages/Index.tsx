import { Link } from "react-router-dom";
import SacredHeader from "@/components/SacredHeader";
import SacredFooter from "@/components/SacredFooter";
import Newsletter from "@/components/Newsletter";
import { Calendar, MapPin, ArrowRight, ChevronRight } from "lucide-react";

const events = [
  {
    title: "Pravesh Mahotsav",
    date: "July 17, 2024",
    location: "Main Mandap, Vrindavan",
    type: "Mahotsav",
    desc: "Grand entry ceremony marking the auspicious beginning of Chaturmas with Vedic rituals and abhishek.",
    img_url: "",
  },
  {
    title: "Gita Pravachan Series",
    date: "July 20–Aug 20, 2024",
    location: "Pravachan Hall",
    type: "Pravachan",
    desc: "Daily discourses on the Bhagavad Gita by Sant Shri Rameshacharyaji  Chapters 1–18.",
    img_url: "",
  },
  {
    title: "Purnima Bhandara",
    date: "August 19, 2024",
    location: "Open Courtyard",
    type: "Bhandara",
    desc: "Community langar and prasad distribution on the auspicious full moon day. All devotees welcome.",
    img_url: "",
  },
  {
    title: "Vishnu Sahasranama Yagna",
    date: "September 5, 2024",
    location: "Yagna Shala",
    type: "Yagna",
    desc: "Sacred fire ritual with chanting of Vishnu Sahasranama  priests from Kashi leading the ceremony.",
    img_url: "",
  },
];

const typeBadgeColor: Record<string, string> = {
  Mahotsav: "bg-saffron text-white",
  Pravachan: "bg-gold text-white",
  Bhandara: "bg-green-600 text-white",
  Yagna: "bg-red-600 text-white",
};

const galleryItems = [
  { img_url: ""},
  { img_url: ""},
  { img_url: ""},
  { img_url: ""},
  { img_url: ""},
  { img_url: ""},
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SacredHeader />

      {/* Hero */}
      <section className="relative bg-cream overflow-hidden">
        <div className="absolute inset-0">
          <img src="/10.png" alt="Sanatani Chaturmas Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-50/60 via-orange-50/40 to-cream/95" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <div className="text-6xl md:text-8xl font-serif text-white mb-4 opacity-90 leading-none drop-shadow-lg">ॐ</div>
          <p className="text-xs md:text-sm font-sans uppercase tracking-[0.3em] text-yellow-200 mb-4 font-bold drop-shadow-md">
            ✦ Ashadha to Kartik 2024 ✦
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6 drop-shadow-lg">
            Sanatani Chaturmas
            <span className="block text-yellow-300 text-3xl md:text-4xl mt-2 font-bold drop-shadow-lg">सनातनी चातुर्मास</span>
          </h1>
          <p className="max-w-2xl mx-auto font-sans text-base md:text-lg text-white mb-10 leading-relaxed font-medium drop-shadow-md">
            Four sacred months of Pravachans, Seva, Bhandaras, and devotional gatherings.
            Join thousands of devotees in this timeless tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 bg-saffron text-white px-8 py-3 font-sans font-bold text-sm uppercase tracking-wider hover:bg-orange-600 transition-colors duration-150 shadow-lg"
            >
              View All Events <ArrowRight size={16} />
            </Link>
            <Link
              to="/donation"
              className="inline-flex items-center gap-2 bg-white/90 text-brown px-8 py-3 font-sans font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors duration-150 shadow-lg"
            >
              Make a Donation
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "120+", label: "Days of Seva" },
              { value: "5,000+", label: "Devotees" },
              { value: "40+", label: "Pravachans" },
              { value: "₹12L+", label: "Donations" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-3xl md:text-4xl text-white font-bold drop-shadow-md">{stat.value}</div>
                <div className="font-sans text-xs text-yellow-100 font-semibold uppercase tracking-wider mt-1 drop-shadow-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sant */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Portrait */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-3 border-2 border-gold opacity-60 pointer-events-none" />
                <div className="w-64 h-80 md:w-72 md:h-96 overflow-hidden">
                  <img className="w-full h-full object-cover" src="" alt="Indian Hindu saint spiritual leader sitting in meditation, saffron robes, peaceful expression, portr" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-brown/80 px-4 py-2 text-center">
                  <div className="font-serif text-gold text-sm">पूज्य</div>
                  <div className="font-serif text-white text-lg">Shri Rameshacharyaji</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-3">Featured Sant</p>
              <h2 className="font-serif text-3xl md:text-4xl text-brown leading-tight mb-4">
                Param Pujya<br />
                <span className="text-saffron">Shri Rameshacharyaji Maharaj</span>
              </h2>
              <p className="font-sans text-sm md:text-base text-brown/70 leading-relaxed mb-6">
                A revered scholar of Vedanta and Bhagavad Gita, Pujya Rameshacharyaji has been conducting
                Chaturmas for over three decades. His discourses blend ancient wisdom with practical
                guidance for modern seekers.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Daily Pravachan: 6:00 AM & 7:00 PM",
                  "Gita Series: 18 Adhyayas over 4 months",
                  "Personal darshan: Tuesdays & Saturdays",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-sans text-brown/80">
                    <span className="text-saffron text-base">•</span> {item}
                  </div>
                ))}
              </div>
              <Link
                to="/invitation"
                className="inline-flex items-center gap-2 border border-saffron text-saffron px-6 py-2.5 text-sm font-sans font-semibold hover:bg-saffron hover:text-white transition-colors duration-150"
              >
                View Invitation <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Cards */}
      <section className="bg-cream py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-2">Sacred Programme</p>
            <h2 className="font-serif text-3xl md:text-4xl text-brown">Upcoming Events</h2>
            <div className="mt-3 flex justify-center gap-1 text-gold text-xs">❈ ❈ ❈</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {events.map((event) => (
              <div key={event.title} className="sacred-card bg-white flex flex-col overflow-hidden">
                <div className="h-44 overflow-hidden">
                  <img className="w-full h-full object-cover" src={event.img_url} />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-sans font-semibold px-2 py-0.5 ${typeBadgeColor[event.type]}`}>
                      {event.type}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-brown mb-1">{event.title}</h3>
                  <p className="text-xs font-sans text-brown/60 mb-2 flex items-center gap-1">
                    <Calendar size={11} className="text-saffron" /> {event.date}
                  </p>
                  <p className="text-xs font-sans text-brown/60 mb-3 flex items-center gap-1">
                    <MapPin size={11} className="text-saffron" /> {event.location}
                  </p>
                  <p className="text-xs font-sans text-brown/70 leading-relaxed flex-1">{event.desc}</p>
                  <Link
                    to="/events"
                    className="mt-4 text-xs font-sans font-semibold text-saffron uppercase tracking-wider hover:underline flex items-center gap-1"
                  >
                    Details <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 border border-gold text-brown px-8 py-3 font-sans text-sm font-semibold hover:bg-gold hover:text-white transition-colors duration-150"
            >
              View Full Calendar <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Guest List */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-2">अतिथि सूची</p>
            <h2 className="font-serif text-3xl md:text-4xl text-brown">Featured Guests</h2>
            <div className="mt-3 flex justify-center gap-1 text-gold text-xs">❈ ❈ ❈</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "Ramesh Sharma", location: "Vrindavan, UP", event: "Pravesh Mahotsav", vip: true },
              { name: "Anita Mehta", location: "Mumbai, Maharashtra", event: "Pravesh Mahotsav", vip: true },
              { name: "Kavita Joshi", location: "Jaipur, Rajasthan", event: "Purnima Bhandara", vip: true },
              { name: "Deepa Narayanan", location: "Bangalore, Karnataka", event: "Deepotsav", vip: true },
            ].map((guest) => (
              <div key={guest.name} className="sacred-card bg-cream p-5 flex items-start gap-4 hover:border-gold/60 transition-colors">
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
                  <p className="text-xs font-sans text-brown/60 mb-1">{guest.location}</p>
                  <p className="text-xs text-brown/40 font-sans">{guest.event}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/guests"
              className="inline-flex items-center gap-2 border border-gold text-brown px-8 py-3 font-sans text-sm font-semibold hover:bg-gold hover:text-white transition-colors duration-150"
            >
              View Full Guest List <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="bg-white py-14 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-2">Moments of Grace</p>
            <h2 className="font-serif text-3xl md:text-4xl text-brown">Gallery</h2>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin" style={{ scrollbarWidth: "thin" }}>
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="shrink-0 w-56 h-40 md:w-72 md:h-52 overflow-hidden border border-gold/40 hover:border-gold transition-all duration-200"
              >
                <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src={item.img_url} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Show Reel */}
      <section className="bg-cream py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-2">Witness the Divine</p>
            <h2 className="font-serif text-3xl md:text-4xl text-brown">Show Reel</h2>
            <div className="mt-3 flex justify-center gap-1 text-gold text-xs">❈ ❈ ❈</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Featured Video */}
            <div className="md:col-span-2 sacred-card bg-brown overflow-hidden group cursor-pointer">
              <div className="relative aspect-video">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src=""
                  alt="Chaturmas Highlights"
                />
                <div className="absolute inset-0 bg-brown/40 group-hover:bg-brown/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-saffron rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brown/90 to-transparent p-4 md:p-6">
                  <span className="text-xs font-sans font-semibold text-saffron uppercase tracking-wider">Featured</span>
                  <h3 className="font-serif text-xl md:text-2xl text-white mt-1">Chaturmas 2024 Highlights</h3>
                  <p className="font-sans text-sm text-white/70 mt-1">12 min • 50K+ views</p>
                </div>
              </div>
            </div>

            {/* Video Thumbnails */}
            {[
              {
                title: "Pravesh Mahotsav Ceremony",
                duration: "8:45",
                img: "",
              },
              {
                title: "Gita Pravachan Day 1",
                duration: "45:20",
                img: "",
              },
              {
                title: "Bhandara Seva Moments",
                duration: "6:30",
                img: "",
              },
              {
                title: "Yagna Ceremony 2024",
                duration: "12:15",
                img: "",
              },
            ].map((video, i) => (
              <div key={i} className="sacred-card bg-white overflow-hidden group cursor-pointer">
                <div className="relative aspect-video">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={video.img}
                    alt={video.title}
                  />
                  <div className="absolute inset-0 bg-brown/30 group-hover:bg-brown/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-saffron/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-brown/80 px-2 py-0.5">
                    <span className="text-xs font-sans text-white">{video.duration}</span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-serif text-base text-brown group-hover:text-saffron transition-colors">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="inline-flex items-center gap-2 border border-gold text-brown px-8 py-3 font-sans text-sm font-semibold hover:bg-gold hover:text-white transition-colors duration-150">
              View All Videos <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="bg-brown py-14 md:py-20 lotus-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-brown/90 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-4xl font-serif text-saffron mb-4">🪔</div>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Your Seva Matters
          </h2>
          <p className="font-sans text-white/70 text-sm md:text-base mb-8 leading-relaxed">
            Every donation  big or small  contributes to feeding thousands of devotees,
            organizing sacred events, and continuing this ancient tradition.
          </p>
          <Link
            to="/donation"
            className="inline-flex items-center gap-2 bg-saffron text-white px-10 py-3.5 font-sans font-semibold text-sm uppercase tracking-wider hover:bg-orange-600 transition-colors duration-150"
          >
            Donate Now ❤ <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Newsletter variant="section" />

      <SacredFooter />
    </div>
  );
}