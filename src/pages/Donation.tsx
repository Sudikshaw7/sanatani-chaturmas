import SacredHeader from "@/components/SacredHeader";
import SacredFooter from "@/components/SacredFooter";
import { useState } from "react";
import { Heart, CheckCircle } from "lucide-react";

const presets = [500, 1100, 2100, 5100, 11000, 21000];

const sevaCategories = [
  { label: "Anna Seva (Food)", icon: "🍛", desc: "Feed devotees during Bhandara" },
  { label: "Deepa Seva (Lamps)", icon: "🪔", desc: "Light a lamp at the Mandap" },
  { label: "Vastra Seva (Cloth)", icon: "🧣", desc: "Donate cloth for priests & poor" },
  { label: "Yagna Seva (Fire)", icon: "🔥", desc: "Sponsor sacred Yagna rituals" },
];

const goal = 2500000; // ₹25,00,000
const raised = 1248000;

export default function DonationPage() {
  const [selected, setSelected] = useState<number | null>(1100);
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [pan, setPan] = useState("");
  const [message, setMessage] = useState("");
  const [sevaType, setSevaType] = useState("Anna Seva (Food)");
  const [submitted, setSubmitted] = useState(false);

  const finalAmount = custom ? parseInt(custom) || 0 : selected || 0;
  const progress = Math.min((raised / goal) * 100, 100);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (finalAmount > 0) setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SacredHeader />

      {/* Page Header */}
      <div className="bg-brown py-10 md:py-14 text-center relative lotus-bg overflow-hidden">
        <div className="absolute inset-0 bg-brown/88 pointer-events-none" />
        <div className="relative">
          <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-2">दान सेवा</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white">Make a Donation</h1>
          <div className="mt-3 flex justify-center gap-1 text-gold text-sm">❈ ❈ ❈</div>
        </div>
      </div>

      <main className="flex-1 bg-cream py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Progress Section */}
          <div className="bg-white border border-gold/40 p-6 md:p-8 mb-8 text-center">
            <div className="text-4xl mb-3">🏺</div>
            <h2 className="font-serif text-2xl text-brown mb-1">Seva Goal Progress</h2>
            <p className="font-sans text-sm text-brown/60 mb-5">
              Help us reach our Chaturmas Seva Goal of ₹25,00,000
            </p>
            <div className="relative h-5 bg-cream rounded-full overflow-hidden border border-gold/30 mb-3 max-w-xl mx-auto">
              <div
                className="h-full bg-gradient-to-r from-saffron to-gold transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-xs font-sans text-brown/60 max-w-xl mx-auto mb-4">
              <span>₹{(raised / 100000).toFixed(1)}L raised</span>
              <span className="text-saffron font-semibold">{Math.round(progress)}% of goal</span>
              <span>Goal: ₹25L</span>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto text-center">
              {[
                { v: "847", l: "Donors" },
                { v: "₹12.4L", l: "Raised" },
                { v: "12.6L", l: "Remaining" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-serif text-2xl text-saffron">{s.v}</div>
                  <div className="text-xs font-sans text-brown/50 uppercase tracking-wider">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {submitted ? (
            /* Success State */
            <div className="bg-white border border-gold sacred-card p-10 text-center">
              <div className="text-5xl mb-4">🙏</div>
              <h2 className="font-serif text-3xl text-brown mb-3">धन्यवाद</h2>
              <p className="font-sans text-brown/70 text-base mb-2">
                Your donation of{" "}
                <span className="text-saffron font-semibold text-xl">₹{finalAmount.toLocaleString()}</span>{" "}
                has been received.
              </p>
              <p className="font-sans text-sm text-brown/50 mb-6">
                A receipt will be sent to your email. May Lord Vishnu bless you and your family.
              </p>
              <div className="flex items-center justify-center gap-2 text-green-600 font-sans text-sm mb-6">
                <CheckCircle size={18} /> Payment Successful
              </div>
              <button
                onClick={() => { setSubmitted(false); setCustom(""); setSelected(1100); }}
                className="border border-saffron text-saffron px-8 py-2.5 text-sm font-sans font-semibold hover:bg-saffron hover:text-white transition-colors duration-150"
              >
                Donate Again
              </button>
            </div>
          ) : (
            /* Donation Form */
            <div className="bg-white border border-gold/60 shadow-lg">
              {/* Gold top border decoration */}
              <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="p-6 md:p-10">
                <h2 className="font-serif text-2xl text-brown mb-6 text-center">
                  🪔 Choose Your Seva
                </h2>

                {/* Seva Category */}
                <div className="mb-7">
                  <label className="block text-xs font-sans font-semibold text-brown/60 uppercase tracking-wider mb-3">
                    Seva Category
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {sevaCategories.map((cat) => (
                      <button
                        key={cat.label}
                        type="button"
                        onClick={() => setSevaType(cat.label)}
                        className={`p-3 text-center border transition-all duration-150 ${
                          sevaType === cat.label
                            ? "border-saffron bg-orange-50"
                            : "border-gold/40 hover:border-gold"
                        }`}
                      >
                        <div className="text-2xl mb-1">{cat.icon}</div>
                        <div className="text-xs font-sans font-semibold text-brown leading-tight">{cat.label}</div>
                        <div className="text-xs font-sans text-brown/50 mt-1">{cat.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amount Presets */}
                <div className="mb-7">
                  <label className="block text-xs font-sans font-semibold text-brown/60 uppercase tracking-wider mb-3">
                    Select Amount (₹)
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-4">
                    {presets.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => { setSelected(amt); setCustom(""); }}
                        className={`py-3 text-sm font-sans font-bold border transition-all duration-150 ${
                          selected === amt && !custom
                            ? "bg-saffron text-white border-saffron"
                            : "border-gold/50 text-brown hover:border-saffron hover:text-saffron"
                        }`}
                      >
                        ₹{amt >= 1000 ? `${amt / 100 >= 10 ? amt / 1000 + "K" : amt}` : amt}
                        {amt >= 1000 && amt < 10000 ? "" : ""}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brown/50 font-sans">₹</span>
                    <input
                      type="number"
                      placeholder="Enter custom amount"
                      value={custom}
                      onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
                      className="w-full border border-gold/40 bg-cream pl-7 pr-4 py-2.5 text-sm font-sans text-brown focus:outline-none focus:border-saffron"
                    />
                  </div>
                </div>

                {/* Donor Details */}
                <form onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className="block text-xs font-sans font-semibold text-brown/60 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ramesh Sharma"
                        required
                        className="w-full border border-gold/40 bg-cream px-3 py-2.5 text-sm font-sans text-brown focus:outline-none focus:border-saffron"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-sans font-semibold text-brown/60 uppercase tracking-wider mb-1.5">
                        PAN (for 80G receipt)
                      </label>
                      <input
                        type="text"
                        value={pan}
                        onChange={(e) => setPan(e.target.value)}
                        placeholder="ABCDE1234F"
                        className="w-full border border-gold/40 bg-cream px-3 py-2.5 text-sm font-sans text-brown focus:outline-none focus:border-saffron uppercase"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-xs font-sans font-semibold text-brown/60 uppercase tracking-wider mb-1.5">
                      Sankalp / Message (optional)
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="In the name of... / For the wellbeing of..."
                      rows={3}
                      className="w-full border border-gold/40 bg-cream px-3 py-2.5 text-sm font-sans text-brown focus:outline-none focus:border-saffron resize-none"
                    />
                  </div>

                  {/* Summary */}
                  {finalAmount > 0 && (
                    <div className="bg-orange-50 border border-saffron/30 px-5 py-4 mb-6 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-sans text-brown/60 uppercase tracking-wider">Seva Amount</div>
                        <div className="font-serif text-3xl text-saffron">₹{finalAmount.toLocaleString()}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-sans text-brown/60">{sevaType}</div>
                        <div className="flex items-center gap-1 text-xs font-sans text-green-600 mt-1">
                          <Heart size={12} /> Eligible for 80G tax benefit
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-saffron text-white py-4 font-sans font-bold text-base uppercase tracking-widest hover:bg-orange-600 transition-colors duration-150 disabled:opacity-50"
                    disabled={finalAmount <= 0 || !name}
                  >
                    🙏 Proceed with Seva  ₹{finalAmount.toLocaleString()}
                  </button>
                  <p className="text-center text-xs font-sans text-brown/40 mt-3">
                    Secured payment • 80G Tax Exemption • Immediate receipt
                  </p>
                </form>
              </div>
              <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
          )}
        </div>
      </main>

      <SacredFooter />
    </div>
  );
}