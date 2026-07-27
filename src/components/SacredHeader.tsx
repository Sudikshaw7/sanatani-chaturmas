import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

const primaryLinks = [
  { label: "Home", path: "/" },
  { label: "Events", path: "/events" },
  { label: "Blog", path: "/blog" },
  { label: "Calendar", path: "/calendar" },
];

const secondaryLinks = [
  { label: "Announcements", path: "/announcements" },
  { label: "Donation", path: "/donation" },
  { label: "Invitation", path: "/invitation" },
];

const tickerMessages = [
  "📿 Vachan at 6:00 AM & 7:00 PM — Venue: Main Mandap",
  "🏵 VIP Seva passes now available — Limited seating",
  "🔔 Sant Shri Rameshacharyaji's discourse on Gita — Starts Monday",
  "🪔 Chaturmas Pravesh Mahotsav begins Ashadha",
];

export default function SacredHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  return (
    <header className="relative z-50 w-full">
      {/* Main Nav */}
      <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/90.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-brown/80 via-brown/60 to-brown/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0 group">
              <span className="text-2xl md:text-3xl font-serif text-saffron leading-none group-hover:scale-105 transition-transform duration-200 drop-shadow-md">
                ॐ
              </span>
              <span className="hidden sm:block font-serif font-bold text-gold text-sm md:text-base tracking-wide uppercase">
                Sanatani Chaturmas
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center">
              {primaryLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-bold transition-all duration-150 rounded-md ${
                    location.pathname === link.path
                      ? "text-saffron bg-saffron/20 shadow-sm shadow-saffron/10"
                      : "text-gold hover:text-saffron hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Separator */}
              <span className="w-px h-4 bg-gold/40 mx-1" />

              {secondaryLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-bold transition-all duration-150 rounded-md ${
                    location.pathname === link.path
                      ? "text-saffron bg-saffron/20 shadow-sm shadow-saffron/10"
                      : "text-gold/70 hover:text-saffron hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {isAuthenticated && (
                <Link
                  to="/admin"
                  className="ml-2 px-4 py-1.5 text-sm font-bold bg-saffron text-white rounded-md hover:bg-gold hover:text-brown transition-all duration-150 shadow-sm"
                >
                  Admin
                </Link>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gold hover:text-saffron transition-colors rounded-md hover:bg-white/5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-brown border-t border-gold/20 shadow-lg">
            <nav className="flex flex-col px-3 py-2">
              {[...primaryLinks, ...secondaryLinks].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`py-2.5 px-3 text-sm font-bold rounded-md transition-all duration-150 ${
                    location.pathname === link.path
                      ? "text-saffron bg-saffron/20"
                      : "text-white/80 hover:text-saffron hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {isAuthenticated && (
                <div className="border-t border-gold/20 mt-1 pt-1">
                  <Link
                    to="/admin"
                    onClick={() => setMenuOpen(false)}
                    className="py-2.5 px-3 text-sm font-bold bg-saffron text-white text-center rounded-md block hover:bg-gold hover:text-brown transition-all duration-150"
                  >
                    Admin Dashboard
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>

      {/* Ticker */}
      <div className="bg-gradient-to-r from-saffron via-[#e8892e] to-saffron overflow-hidden py-1.5">
        <div className="flex items-center px-4">
          <span className="text-brown text-[10px] font-bold uppercase tracking-widest shrink-0 bg-gold px-2 py-0.5 rounded mr-3">
            LIVE
          </span>
          <div className="overflow-hidden flex-1">
            <div className="ticker-animate inline-block text-red-600 text-xs font-medium whitespace-nowrap drop-shadow-sm">
              {tickerMessages.join("   ✦   ")}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {tickerMessages.join("   ✦   ")}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}