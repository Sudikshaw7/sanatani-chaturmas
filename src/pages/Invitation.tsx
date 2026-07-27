import SacredHeader from "@/components/SacredHeader";
import SacredFooter from "@/components/SacredFooter";
import { Download, Share2, MapPin, Calendar, Clock, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

export default function InvitationPage() {
  const [rsvp, setRsvp] = useState<"none" | "accepted" | "declined">("none");

  return (
    <div className="min-h-screen flex flex-col">
      <SacredHeader />

      {/* Page Header */}
      <div className="bg-brown py-8 text-center">
        <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-1">निमंत्रण पत्रिका</p>
        <h1 className="font-serif text-3xl md:text-4xl text-white">Digital Invitation</h1>
      </div>

      <main className="flex-1 bg-cream py-10 md:py-16">
        <div className="max-w-lg mx-auto px-4 sm:px-6">
          {/* Action Buttons */}
          <div className="flex justify-center gap-3 mb-8">
            <button className="flex items-center gap-2 border border-gold text-brown px-5 py-2 text-xs font-sans font-semibold uppercase tracking-wider hover:bg-gold hover:text-white transition-colors duration-150">
              <Share2 size={14} /> Share
            </button>
            <button className="flex items-center gap-2 bg-saffron text-white px-5 py-2 text-xs font-sans font-semibold uppercase tracking-wider hover:bg-orange-600 transition-colors duration-150">
              <Download size={14} /> Download Card
            </button>
          </div>

          {/* Invitation Card */}
          <div className="relative bg-white overflow-hidden" style={{ boxShadow: "0 8px 40px rgba(212,175,55,0.25)" }}>
            {/* Gold top border */}
            <div className="h-2 bg-gradient-to-r from-gold via-saffron to-gold" />

            {/* Top Decoration */}
            <div className="bg-cream px-8 pt-8 pb-4 text-center border-b border-gold/30">
              {/* Mandala/Om */}
              <div className="text-6xl font-serif text-saffron mb-2">ॐ</div>
              <div className="text-xs font-sans text-gold tracking-[0.3em] uppercase mb-1">श्री गणेशाय नमः</div>
              <div className="flex justify-center gap-1 text-gold/60 text-xs">❈ ❈ ❈ ❈ ❈</div>
            </div>

            {/* Main Content */}
            <div
              className="px-8 py-8 text-center relative"
              style={{
                background: "linear-gradient(135deg, #fffdf5 0%, #fff8e7 50%, #fffdf5 100%)",
              }}
            >
              {/* Gold corner decorations */}
              <div className="absolute top-3 left-3 text-gold text-xl opacity-40">❋</div>
              <div className="absolute top-3 right-3 text-gold text-xl opacity-40">❋</div>
              <div className="absolute bottom-3 left-3 text-gold text-xl opacity-40">❋</div>
              <div className="absolute bottom-3 right-3 text-gold text-xl opacity-40">❋</div>

              <p className="font-sans text-xs text-brown/50 uppercase tracking-[0.2em] mb-4">
                With humility and devotion, we cordially invite
              </p>

              <div className="font-serif text-3xl text-saffron mb-1">आप सभी को</div>
              <div className="font-sans text-sm text-brown/60 mb-6">सादर आमंत्रण है</div>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-gold/40" />
                <span className="text-gold text-sm">✦</span>
                <div className="flex-1 h-px bg-gold/40" />
              </div>

              <h2 className="font-serif text-2xl md:text-3xl text-brown leading-tight mb-2">
                Sanatani Chaturmas
              </h2>
              <h3 className="font-serif text-xl text-saffron mb-6">
                सनातनी चातुर्मास २०२४
              </h3>

              {/* Event Details */}
              <div className="space-y-4 text-left bg-white/70 border border-gold/30 p-5 mb-6">
                <div className="flex items-start gap-3">
                  <Calendar size={16} className="text-saffron mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-sans font-semibold text-brown/50 uppercase tracking-wider">Date</div>
                    <div className="font-sans text-sm text-brown font-medium">
                      Ashadha Shukla Ekadashi to Kartik Shukla Dwadashi
                    </div>
                    <div className="font-sans text-xs text-brown/60">July 17 – November 12, 2024</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-saffron mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-sans font-semibold text-brown/50 uppercase tracking-wider">Timings</div>
                    <div className="font-sans text-sm text-brown font-medium">Morning: 6:00 AM</div>
                    <div className="font-sans text-xs text-brown/60">Evening Pravachan: 7:00 PM daily</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-saffron mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-sans font-semibold text-brown/50 uppercase tracking-wider">Venue</div>
                    <div className="font-sans text-sm text-brown font-medium">
                      Shri Ram Mandap, Vrindavan
                    </div>
                    <div className="font-sans text-xs text-brown/60">Sector 14, Vrindavan, UP 281121</div>
                  </div>
                </div>
              </div>

              {/* Sant Section */}
              <div className="flex items-center gap-4 mb-6 bg-saffron/5 border border-saffron/20 p-4">
                <div className="w-16 h-16 border-2 border-gold overflow-hidden shrink-0">
                  <img className="w-full h-full object-cover" src="" alt="Indian Hindu saint portrait, saffron robes, peaceful face, spiritual" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-sans text-saffron uppercase tracking-wider">Pujya Guruji</div>
                  <div className="font-serif text-lg text-brown">Shri Rameshacharyaji Maharaj</div>
                  <div className="text-xs font-sans text-brown/60">Vedanta & Gita Scholar</div>
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-1 h-px bg-gold/40" />
                <span className="text-gold text-sm">✦</span>
                <div className="flex-1 h-px bg-gold/40" />
              </div>

              <p className="font-serif text-base text-brown/70 italic mb-3">
                "सर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामयाः"
              </p>
              <p className="font-sans text-xs text-brown/50">
                May all beings be happy, may all be free from disease.
              </p>
            </div>

            {/* Organizer Footer */}
            <div className="bg-brown px-8 py-5 text-center">
              <div className="font-sans text-xs text-white/50 uppercase tracking-wider mb-1">Organized by</div>
              <div className="font-serif text-white text-lg">Shri Chaturmas Seva Samiti</div>
              <div className="font-sans text-xs text-gold/70 mt-1">seva@chaturmas.org • +91 99999 12345</div>
            </div>

            {/* Gold bottom border */}
            <div className="h-2 bg-gradient-to-r from-gold via-saffron to-gold" />
          </div>

          {/* Info Below Card */}
          <div className="mt-8 text-center text-xs font-sans text-brown/50">
            Share this digital invitation with family and friends. 🙏
          </div>

          {/* RSVP Section */}
          <div className="mt-8 text-center">
            {rsvp === "none" && (
              <div className="bg-white border border-gold/30 p-6">
                <p className="font-serif text-lg text-brown mb-1">Will you attend?</p>
                <p className="text-xs font-sans text-brown/50 mb-5">कृपया अपनी उपस्थिति की पुष्टि करें</p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => setRsvp("accepted")}
                    className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 text-sm font-sans font-semibold uppercase tracking-wider hover:bg-green-700 transition-colors duration-150"
                  >
                    <CheckCircle size={16} /> Accept Invite
                  </button>
                  <button
                    onClick={() => setRsvp("declined")}
                    className="flex items-center gap-2 border border-red-300 text-red-600 px-6 py-3 text-sm font-sans font-semibold uppercase tracking-wider hover:bg-red-50 transition-colors duration-150"
                  >
                    <XCircle size={16} /> Decline
                  </button>
                </div>
              </div>
            )}

            {rsvp === "accepted" && (
              <div className="bg-green-50 border border-green-200 p-6">
                <CheckCircle size={32} className="text-green-600 mx-auto mb-3" />
                <p className="font-serif text-xl text-green-800 mb-1">You're Accepted!</p>
                <p className="text-sm font-sans text-green-600 mb-4">We look forward to seeing you at Sanatani Chaturmas 2026.</p>
                <button
                  onClick={() => setRsvp("none")}
                  className="text-xs font-sans text-green-700 underline hover:text-green-900"
                >
                  Change Response
                </button>
              </div>
            )}

            {rsvp === "declined" && (
              <div className="bg-red-50 border border-red-200 p-6">
                <XCircle size={32} className="text-red-500 mx-auto mb-3" />
                <p className="font-serif text-xl text-red-800 mb-1">We'll Miss You</p>
                <p className="text-sm font-sans text-red-600 mb-4">Sorry you can't make it. Hope to see you next time.</p>
                <button
                  onClick={() => setRsvp("none")}
                  className="text-xs font-sans text-red-700 underline hover:text-red-900"
                >
                  Change Response
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <SacredFooter />
    </div>
  );
}