import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import Newsletter from "@/components/Newsletter";

export default function SacredFooter() {
  return (
    <footer className="bg-brown text-white">
      {/* Gold Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-5xl font-serif text-saffron mb-3">ॐ</div>
            <h3 className="font-serif text-2xl text-gold mb-2">Sanatani Chaturmas</h3>
            <p className="text-sm text-white/70 font-sans leading-relaxed max-w-sm">
              A sacred four-month observance celebrating the spiritual richness of Sanatan Dharma.
              Join us for Pravachans, Bhandaras, and divine Seva.
            </p>
            <div className="mt-4 flex gap-3 text-xs font-sans text-white/50 tracking-widest">
              ✦ ✦ ✦
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-gold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm font-sans text-white/70">
              {[
                { label: "Home", path: "/" },
                { label: "Events", path: "/events" },
                { label: "Blog", path: "/blog" },
                { label: "Announcements", path: "/announcements" },
                { label: "Calendar", path: "/calendar" },
                { label: "Donation", path: "/donation" },
                { label: "Invitation", path: "/invitation" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-saffron transition-colors duration-150 flex items-center gap-1"
                  >
                    <span className="text-gold text-xs">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-gold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm font-sans text-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-saffron mt-0.5 shrink-0" />
                <span>Shri Ram Mandap, Sector 14,<br />Vrindavan, UP 281121</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-saffron shrink-0" />
                <span>+91 99999 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-saffron shrink-0" />
                <span>seva@chaturmas.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-gold text-lg mb-4">Newsletter</h4>
            <p className="text-sm font-sans text-white/60 mb-3">
              Get updates on events and pravachans.
            </p>
            <Newsletter variant="inline" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-sans text-white/40">
          <span>© 2024 Sanatani Chaturmas. All rights reserved.</span>
          <span className="text-gold/60">सर्वे भवन्तु सुखिनः • सर्वे सन्तु निरामयाः</span>
        </div>
      </div>
    </footer>
  );
}