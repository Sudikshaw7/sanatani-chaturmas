import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Megaphone,
  CalendarDays,
  HeartHandshake,
  ChevronRight,
  LogOut,
} from "lucide-react";

const adminLinks = [
  { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { label: "Guest List", path: "/admin/guests", icon: Users },
  { label: "Announcements", path: "/announcements", icon: Megaphone },
  { label: "Calendar", path: "/calendar", icon: CalendarDays },
  { label: "Donations", path: "/donation", icon: HeartHandshake },
];

export default function AdminSidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 shrink-0 bg-cream border-r border-gold flex flex-col min-h-screen">
      {/* Header */}
      <div className="px-6 py-6 border-b border-gold/40">
        <div className="text-3xl font-serif text-saffron mb-1">ॐ</div>
        <div className="font-serif text-brown text-sm">Admin Console</div>
        <div className="text-xs font-sans text-brown/50 mt-0.5">Chaturmas Management</div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {adminLinks.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 px-3 py-2.5 text-sm font-sans font-medium transition-all duration-150 rounded-sm group ${
                isActive
                  ? "bg-saffron text-white"
                  : "text-brown hover:bg-orange-50 hover:text-saffron"
              }`}
            >
              <Icon size={16} className={isActive ? "text-white" : "text-gold group-hover:text-saffron"} />
              <span>{link.label}</span>
              {isActive && <ChevronRight size={14} className="ml-auto text-white/70" />}
            </Link>
          );
        })}
      </nav>

      {/* Divider & Footer */}
      <div className="border-t border-gold/40 px-3 py-4">
        <Link
          to="/"
          className="flex items-center gap-3 px-3 py-2.5 text-sm font-sans font-medium text-brown hover:text-saffron transition-colors duration-150 rounded-sm hover:bg-orange-50"
        >
          <LogOut size={16} className="text-gold" />
          <span>Back to Site</span>
        </Link>
      </div>
    </aside>
  );
}