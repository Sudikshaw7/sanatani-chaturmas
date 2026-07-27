import { useState } from "react";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

interface NewsletterProps {
  variant?: "inline" | "card" | "section";
}

export default function Newsletter({ variant = "section" }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 4000);
    }, 1200);
  };

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-3 py-2 text-sm font-sans border border-gold/60 bg-white text-brown placeholder:text-brown/40 focus:outline-none focus:border-saffron transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-4 py-2 bg-saffron text-white text-xs font-sans font-semibold uppercase tracking-wider hover:bg-orange-600 transition-colors duration-150 disabled:opacity-50"
        >
          {status === "loading" ? <Loader2 size={14} className="animate-spin" /> : "Subscribe"}
        </button>
      </form>
    );
  }

  if (variant === "card") {
    return (
      <div className="bg-white border border-gold/40 p-6">
        <div className="flex items-center gap-2 mb-3">
          <Mail size={18} className="text-saffron" />
          <h3 className="font-serif text-lg text-brown">Subscribe to Newsletter</h3>
        </div>
        <p className="text-sm font-sans text-brown/60 mb-4">
          Get weekly updates on events, pravachans, and seva opportunities.
        </p>
        {status === "success" ? (
          <div className="flex items-center gap-2 text-green-600 text-sm font-sans py-2">
            <CheckCircle size={16} />
            <span>Subscribed successfully! Har Har Mahadev.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-3 py-2 text-sm font-sans border border-gold/60 bg-cream text-brown placeholder:text-brown/40 focus:outline-none focus:border-saffron transition-colors"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-2 bg-saffron text-white text-xs font-sans font-semibold uppercase tracking-wider hover:bg-orange-600 transition-colors duration-150 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <><Loader2 size={14} className="animate-spin" /> Subscribing...</>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <section className="bg-cream py-14 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="text-4xl font-serif text-saffron mb-4">✉</div>
        <h2 className="font-serif text-3xl md:text-4xl text-brown mb-3">
          Stay Connected with Chaturmas
        </h2>
        <p className="font-sans text-sm md:text-base text-brown/60 mb-8 max-w-lg mx-auto">
          Subscribe to receive updates on upcoming events, pravachan schedules,
          seva opportunities, and divine moments from Sanatani Chaturmas.
        </p>

        {status === "success" ? (
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-6 py-3 text-sm font-sans">
            <CheckCircle size={18} />
            <span>Thank you for subscribing! जय श्री कृष्ण</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 text-sm font-sans border border-gold/60 bg-white text-brown placeholder:text-brown/40 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron/20 transition-all"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-8 py-3 bg-saffron text-white text-xs font-sans font-semibold uppercase tracking-wider hover:bg-orange-600 transition-colors duration-150 disabled:opacity-50 flex items-center justify-center gap-2 shrink-0"
            >
              {status === "loading" ? (
                <><Loader2 size={14} className="animate-spin" /> Subscribing...</>
              ) : (
                <>
                  <Mail size={14} />
                  Subscribe
                </>
              )}
            </button>
          </form>
        )}

        <p className="mt-4 text-xs font-sans text-brown/40">
          No spam. Unsubscribe anytime. We respect your devotion and your inbox.
        </p>
      </div>
    </section>
  );
}
