import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { toPng } from "html-to-image";
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle,
  XCircle,
  Share2,
  Download,
  Loader2,
} from "lucide-react";

const guestData: Record<string, { name: string; phone: string }> = {
  "1": { name: "Ramesh Sharma", phone: "919876543210" },
  "2": { name: "Priya Patel", phone: "918765432109" },
  "3": { name: "Suresh Gupta", phone: "917654321098" },
  "4": { name: "Anita Mehta", phone: "916543210987" },
  "5": { name: "Vijay Krishnan", phone: "915432109876" },
  "6": { name: "Kavita Joshi", phone: "914321098765" },
  "7": { name: "Manish Tiwari", phone: "913210987654" },
  "8": { name: "Deepa Narayanan", phone: "912109876543" },
  "9": { name: "Harish Agarwal", phone: "91198765432" },
  "10": { name: "Shobha Devi", phone: "919987654321" },
};

const EVENT = {
  title: "Sanatani Chaturmas 2026",
  titleHindi: "सनातनी चातुर्मास २०२६",
  date: "July 15, 2026",
  dateHindi: "15 July 2026, Wednesday",
  time: "6:00 PM Onwards",
  venue: "Dharma Sabha Hall",
  venueAddress: "Vrindavan, Uttar Pradesh",
  organizer: "Shri Chaturmas Seva Samiti",
  contact: "seva@chaturmas.org • +91 99999 12345",
};

function getGoogleCalendarUrl() {
  const start = "20260715T123000Z";
  const end = "20260715T180000Z";
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: EVENT.title,
    dates: `${start}/${end}`,
    details: `Join us for ${EVENT.title}\nVenue: ${EVENT.venue}, ${EVENT.venueAddress}`,
    location: `${EVENT.venue}, ${EVENT.venueAddress}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function getWhatsAppShareUrl(rsvp?: string) {
  const msg = rsvp
    ? `Namaste! I have ${rsvp === "accepted" ? "accepted" : "declined"} the invitation for *${EVENT.title}*.\n\n📅 ${EVENT.dateHindi}\n⏰ ${EVENT.time}\n📍 ${EVENT.venue}, ${EVENT.venueAddress}`
    : `You are cordially invited to *${EVENT.title}*!\n\n📅 ${EVENT.dateHindi}\n⏰ ${EVENT.time}\n📍 ${EVENT.venue}, ${EVENT.venueAddress}\n\nOrganized by ${EVENT.organizer}`;
  return `https://wa.me/?text=${encodeURIComponent(msg)}`;
}

export default function InviteLanding() {
  const { guestId } = useParams<{ guestId: string }>();
  const guest = guestData[guestId || ""] || { name: "Dear Guest", phone: "" };
  const [rsvp, setRsvp] = useState<"accepted" | "declined" | null>(null);
  const [downloading, setDownloading] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  async function handleDownloadCard() {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
      });
      const link = document.createElement("a");
      link.download = `invite-${guest.name.replace(/\s+/g, "-").toLowerCase()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Download failed:", err);
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center py-8 px-4"
      style={{
        background:
          "linear-gradient(135deg, #fffdf5 0%, #fff8e7 30%, #fdf8f0 60%, #fffdf5 100%)",
      }}
    >
      <div className="w-full max-w-4xl">
        {/* Top Om */}
        <div className="text-center mb-6">
          <div className="text-5xl text-saffron font-serif">ॐ</div>
        </div>

        <div className="grid md:grid-cols-2 gap-0 shadow-2xl overflow-hidden">
          {/* Left - Invitation Card */}
          <div ref={cardRef} className="bg-white relative">
            {/* Gold top border */}
            <div className="h-1.5 bg-gradient-to-r from-gold via-saffron to-gold" />

            {/* Card Content */}
            <div
              className="px-6 sm:px-8 pt-8 pb-10 text-center relative"
              style={{
                background:
                  "linear-gradient(180deg, #fffdf5 0%, #fff8e7 50%, #fffdf5 100%)",
              }}
            >
              {/* Corner decorations */}
              <div className="absolute top-3 left-3 text-gold text-lg opacity-40">
                ❋
              </div>
              <div className="absolute top-3 right-3 text-gold text-lg opacity-40">
                ❋
              </div>
              <div className="absolute bottom-3 left-3 text-gold text-lg opacity-40">
                ❋
              </div>
              <div className="absolute bottom-3 right-3 text-gold text-lg opacity-40">
                ❋
              </div>

              <p className="font-sans text-[10px] sm:text-xs text-brown/50 uppercase tracking-[0.25em] mb-4">
                You Are Cordially Invited
              </p>

              <p className="font-sans text-[10px] sm:text-xs text-brown/40 uppercase tracking-wider mb-1">
                to
              </p>

              <h1 className="font-serif text-2xl sm:text-3xl text-brown leading-tight mb-1">
                {EVENT.title}
              </h1>
              <p className="font-sans text-xs text-saffron mb-6">
                {EVENT.titleHindi}
              </p>

              {/* Divider */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex-1 h-px bg-gold/40" />
                <span className="text-gold text-xs">✦ ✦ ✦</span>
                <div className="flex-1 h-px bg-gold/40" />
              </div>

              {/* Event Details */}
              <div className="space-y-3 text-left bg-white/60 border border-gold/30 p-4 mb-6 mx-auto max-w-xs">
                <div className="flex items-start gap-3">
                  <Calendar
                    size={14}
                    className="text-saffron mt-0.5 shrink-0"
                  />
                  <div>
                    <div className="text-[10px] font-sans font-semibold text-brown/50 uppercase tracking-wider">
                      Date
                    </div>
                    <div className="font-sans text-xs text-brown font-medium">
                      {EVENT.dateHindi}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock
                    size={14}
                    className="text-saffron mt-0.5 shrink-0"
                  />
                  <div>
                    <div className="text-[10px] font-sans font-semibold text-brown/50 uppercase tracking-wider">
                      Time
                    </div>
                    <div className="font-sans text-xs text-brown font-medium">
                      {EVENT.time}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin
                    size={14}
                    className="text-saffron mt-0.5 shrink-0"
                  />
                  <div>
                    <div className="text-[10px] font-sans font-semibold text-brown/50 uppercase tracking-wider">
                      Venue
                    </div>
                    <div className="font-sans text-xs text-brown font-medium">
                      {EVENT.venue},
                    </div>
                    <div className="font-sans text-[11px] text-brown/60">
                      {EVENT.venueAddress}
                    </div>
                  </div>
                </div>
              </div>

              {/* Lotus decoration */}
              <div className="text-4xl mb-4 opacity-60">🪷</div>

              {/* Quote */}
              <p className="font-serif text-sm text-brown/60 italic mb-1">
                "सर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामयाः"
              </p>
              <p className="font-sans text-[10px] text-brown/40">
                May all beings be happy, may all be free from disease.
              </p>
            </div>

            {/* Organizer Footer */}
            <div className="bg-brown px-6 sm:px-8 py-4 text-center">
              <div className="font-sans text-[10px] text-white/50 uppercase tracking-wider mb-0.5">
                Organized by
              </div>
              <div className="font-serif text-white text-sm">
                {EVENT.organizer}
              </div>
              <div className="font-sans text-[10px] text-gold/70 mt-1">
                {EVENT.contact}
              </div>
            </div>

            {/* Gold bottom border */}
            <div className="h-1.5 bg-gradient-to-r from-gold via-saffron to-gold" />
          </div>

          {/* Right - RSVP Panel */}
          <div className="bg-white border-t md:border-t-0 md:border-l border-gold/30 px-6 sm:px-8 py-10 flex flex-col justify-center">
            {/* Guest Name */}
            <div className="text-center mb-6">
              <p className="font-sans text-xs text-brown/50 uppercase tracking-wider mb-1">
                Dear
              </p>
              <p className="font-serif text-xl text-brown">{guest.name}</p>
            </div>

            {/* RSVP Section */}
            <div className="mb-8">
              <h2 className="font-serif text-lg text-brown text-center mb-4">
                Will You Attend?
              </h2>

              {rsvp === null ? (
                <div className="flex gap-3">
                  <button
                    onClick={() => setRsvp("accepted")}
                    className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-4 text-sm font-sans font-semibold transition-colors duration-150"
                  >
                    <CheckCircle size={16} />
                    Accept RSVP
                  </button>
                  <button
                    onClick={() => setRsvp("declined")}
                    className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 px-4 text-sm font-sans font-semibold transition-colors duration-150"
                  >
                    <XCircle size={16} />
                    Decline RSVP
                  </button>
                </div>
              ) : (
                <div
                  className={`text-center py-4 px-5 ${
                    rsvp === "accepted"
                      ? "bg-green-50 border border-green-200"
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  <div
                    className={`text-sm font-sans font-semibold ${
                      rsvp === "accepted" ? "text-green-700" : "text-red-700"
                    }`}
                  >
                    {rsvp === "accepted"
                      ? "✅ You have accepted the invitation!"
                      : "❌ You have declined the invitation."}
                  </div>
                  <button
                    onClick={() => setRsvp(null)}
                    className="mt-2 text-xs font-sans text-brown/50 underline hover:text-brown/70"
                  >
                    Change response
                  </button>
                </div>
              )}
            </div>

            {/* Add to Google Calendar */}
            <div className="mb-6">
              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full border border-gray-300 hover:border-gray-400 bg-white py-3 px-4 text-sm font-sans font-medium text-gray-700 transition-colors duration-150"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Add to Google Calendar
              </a>
            </div>

            {/* Share Invitation */}
            <div className="mb-6">
              <h3 className="font-serif text-base text-brown text-center mb-3">
                Share Invitation
              </h3>
              <a
                href={getWhatsAppShareUrl(rsvp || undefined)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full border border-green-300 hover:border-green-400 bg-white py-3 px-4 text-sm font-sans font-medium text-green-700 transition-colors duration-150"
              >
                <svg className="w-5 h-5" viewBox="0 0 32 32" fill="#25D366">
                  <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.058 9.374L1.054 31.25l6.114-1.982A15.907 15.907 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.336 22.606c-.39 1.1-1.932 2.014-3.168 2.28-.84.18-1.936.322-5.628-1.21-4.726-1.962-7.762-6.764-7.998-7.08-.23-.316-1.884-2.504-1.884-4.776 0-2.27 1.192-3.386 1.616-3.846.39-.428.922-.54 1.226-.54.298 0 .596.002.858.016.278.012.65-.106.904.69.264.83.896 2.876.974 3.084.078.208.13.45.026.726-.104.282-.156.456-.31.7-.154.244-.324.546-.462.732-.154.208-.314.434-.134.846.18.412.8 1.654 1.716 2.684 1.178 1.328 2.17 1.738 2.474 1.936.304.198.484.166.662-.1.178-.264.756-1.084.958-1.454.202-.37.404-.31.682-.186.28.124 1.774.838 2.078.99.304.152.506.228.582.356.076.128.076.74-.314 1.838z" />
                </svg>
                Share on WhatsApp
              </a>
            </div>

            {/* Download Card */}
            <div>
              <button
                onClick={handleDownloadCard}
                disabled={downloading}
                className="flex items-center justify-center gap-3 w-full border border-saffron/50 hover:border-saffron bg-saffron/5 hover:bg-saffron/10 py-3 px-4 text-sm font-sans font-medium text-saffron transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {downloading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Download size={16} />
                )}
                {downloading ? "Downloading..." : "Download Invite Card"}
              </button>
            </div>

            {/* Status indicator */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-sans text-brown/30 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Live · Sanatani Chaturmas 2026
              </div>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-6">
          <p className="font-sans text-xs text-brown/40">
            Share this invitation with family and friends 🙏
          </p>
        </div>
      </div>
    </div>
  );
}
