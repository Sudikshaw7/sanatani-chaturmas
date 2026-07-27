import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const WHATSAPP_NUMBER = "91XXXXXXXXXX";

const quickMessages = [
  { icon: "🙏", label: "I want to donate", text: "Namaste! I would like to donate to Sanatani Chaturmas." },
  { icon: "📍", label: "Event location", text: "Namaste! Please share the event location details." },
  { icon: "🙋", label: "I want to volunteer", text: "Namaste! I would like to volunteer for Chaturmas seva." },
  { icon: "✉️", label: "General inquiry", text: "Namaste! I have a question about Sanatani Chaturmas." },
];

function openWhatsApp(message: string) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

export default function WhatsAppPopup() {
  const [open, setOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");

  const handleCustomSend = () => {
    if (customMsg.trim()) {
      openWhatsApp(customMsg.trim());
      setCustomMsg("");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Popup */}
      {open && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gold/40 overflow-hidden mb-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          {/* Header */}
          <div className="bg-[#25D366] px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle size={22} className="text-[#25D366]" />
              </div>
              <div>
                <p className="text-white font-sans font-semibold text-sm">Chat on WhatsApp</p>
                <p className="text-white/80 text-xs font-sans">Sanatani Chaturmas</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Message bubble */}
          <div className="px-5 pt-4 pb-2">
            <div className="bg-[#DCF8C6] rounded-xl rounded-tl-none px-4 py-3 text-sm text-brown/80 font-sans">
              Namaste! How can we help you today? Choose a topic or type your message below.
            </div>
          </div>

          {/* Quick options */}
          <div className="px-5 pb-3 space-y-2">
            {quickMessages.map((msg) => (
              <button
                key={msg.label}
                onClick={() => openWhatsApp(msg.text)}
                className="w-full text-left px-4 py-2.5 bg-cream hover:bg-gold/10 border border-gold/30 rounded-lg text-sm font-sans text-brown/80 flex items-center gap-2 transition-colors"
              >
                <span>{msg.icon}</span> {msg.label}
              </button>
            ))}
          </div>

          {/* Custom message */}
          <div className="px-5 pb-5">
            <div className="flex gap-2">
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleCustomSend()}
                placeholder="Type your message..."
                className="flex-1 border border-gold/40 rounded-lg px-3 py-2 text-sm font-sans text-brown/80 placeholder:text-brown/40 focus:outline-none focus:border-saffron"
              />
              <button
                onClick={handleCustomSend}
                className="bg-[#25D366] hover:bg-[#20b858] text-white rounded-lg px-3 py-2 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20b858] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 group"
      >
        {open ? (
          <X size={26} className="text-white" />
        ) : (
          <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.058 9.374L1.054 31.25l6.114-1.982A15.907 15.907 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.336 22.606c-.39 1.1-1.932 2.014-3.168 2.28-.84.18-1.936.322-5.628-1.21-4.726-1.962-7.762-6.764-7.998-7.08-.23-.316-1.884-2.504-1.884-4.776 0-2.27 1.192-3.386 1.616-3.846.39-.428.922-.54 1.226-.54.298 0 .596.002.858.016.278.012.65-.106.904.69.264.83.896 2.876.974 3.084.078.208.13.45.026.726-.104.282-.156.456-.31.7-.154.244-.324.546-.462.732-.154.208-.314.434-.134.846.18.412.8 1.654 1.716 2.684 1.178 1.328 2.17 1.738 2.474 1.936.304.198.484.166.662-.1.178-.264.756-1.084.958-1.454.202-.37.404-.31.682-.186.28.124 1.774.838 2.078.99.304.152.506.228.582.356.076.128.076.74-.314 1.838z" />
          </svg>
        )}
      </button>
    </div>
  );
}
