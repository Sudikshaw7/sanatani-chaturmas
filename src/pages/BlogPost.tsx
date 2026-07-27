import { useParams, Link } from "react-router-dom";
import SacredHeader from "@/components/SacredHeader";
import SacredFooter from "@/components/SacredFooter";
import Newsletter from "@/components/Newsletter";
import { Calendar, Clock, User, ArrowLeft, Tag, ChevronRight } from "lucide-react";

const blogPosts: Record<
  string,
  {
    title: string;
    date: string;
    readTime: string;
    category: string;
    author: string;
    image: string;
    content: string[];
    relatedSlugs: string[];
  }
> = {
  "significance-of-chaturmas": {
    title: "The Sacred Significance of Chaturmas in Sanatan Dharma",
    date: "July 15, 2024",
    readTime: "6 min read",
    category: "Spirituality",
    author: "Pandit Suresh Shastri",
    image: "",
    content: [
      "Chaturmas (चातुर्मास) literally means 'four months' — a sacred period in the Hindu calendar that begins on Ekadashi of Shukla Paksha in the month of Ashadha (typically July) and concludes on Ekadashi of Shukla Paksha in Kartik (typically November).",
      "During these four months, the monsoon season covers the Indian subcontinent, and ancient rishis recognized this as an ideal time for spiritual retreat and inner transformation. The dampened earth, the sound of rain, and the reduced external activity all create a natural environment for meditation and self-reflection.",
      "It is during Chaturmas that Lord Vishnu is believed to enter a state of cosmic sleep (Yoga Nidra) on the cosmic ocean. Devotees observe various vratas (vows) and engage in spiritual practices to honor this divine period.",
      "Many saints and spiritual leaders choose Chaturmas for their annual retreat. They establish temporary camps (shivirs) where devotees can gather for pravachans (spiritual discourses), kirtans, and group sadhana. This tradition has been carried on for thousands of years and remains vibrant today.",
      "The significance of Chaturmas extends beyond religious rituals. It is a time for self-purification — both physical and spiritual. Many devotees observe dietary restrictions, practice brahmacharya, increase their meditation time, and focus on charitable activities.",
      "At Sanatani Chaturmas, we honor this ancient tradition by organizing daily pravachans, community bhandaras, special yagnas, and various seva opportunities. We invite all seekers to join us in making the most of this blessed period.",
    ],
    relatedSlugs: ["gita-pravachan-day-1-summary", "mantras-for-daily-worship"],
  },
  "gita-pravachan-day-1-summary": {
    title: "Gita Pravachan Day 1: Arjuna Vishada Yoga — When Despair Became the Gateway to Wisdom",
    date: "July 20, 2024",
    readTime: "8 min read",
    category: "Pravachan",
    author: "Pandit Suresh Shastri",
    image: "",
    content: [
      "The first chapter of the Bhagavad Gita, Arjuna Vishada Yoga, opens on the battlefield of Kurukshetra. Two great armies stand face to face — the Pandavas and the Kauravas — ready for a war that would determine the fate of Bharatvarsha.",
      "Arjuna, the greatest archer of his time, asks Lord Krishna to drive his chariot to the middle of the battlefield. But when he sees his own kinsmen — teachers, uncles, cousins — standing opposite him, his bow slips from his hands.",
      "Pujya Rameshacharyaji explained that Arjuna's despair was not a sign of weakness. It was the awakening of conscience. When a person truly sees the consequences of adharma, the heart naturally fills with sorrow.",
      "This moment of despair was actually the beginning of the greatest spiritual discourse ever delivered. Without Arjuna's question, the world would not have received the timeless wisdom of the Gita.",
      "Key teachings from this chapter include: the importance of recognizing our attachments, the courage to question our own assumptions, and the understanding that true wisdom begins with humility.",
      "As Pujya Guruji reminded us: 'When life puts you in a difficult position, don't worry — it means you are being prepared for something better. Even Arjuna had to break before he could be rebuilt.'",
    ],
    relatedSlugs: ["significance-of-chaturmas", "mantras-for-daily-worship"],
  },
  "bhandara-seva-guide": {
    title: "The Spirit of Bhandara: How Community Seva Feeds the Soul",
    date: "July 28, 2024",
    readTime: "5 min read",
    category: "Seva",
    author: "Anita Devi",
    image: "",
    content: [
      "Bhandara is one of the most beautiful traditions in Sanatan Dharma — the practice of feeding anyone and everyone who comes, without discrimination. At Sanatani Chaturmas, our Purnima Bhandara serves over 5,000 devotees every month.",
      "The word 'Bhandara' comes from 'Bhandar' meaning storehouse. It symbolizes the divine storehouse of grace that is always full and always overflowing. When we serve in a Bhandara, we are not just serving food — we are distributing God's grace.",
      "Our kitchen seva begins at 4:00 AM when volunteers start preparing fresh prasad. The menu is always sattvic — pure vegetarian food cooked with love and devotion. Every grain of rice, every roti is infused with the mantra of service.",
      "What makes Bhandara truly special is the spirit in which it is served. Volunteers stand and serve with folded hands, treating every person who comes as a manifestation of the divine. The rich and the poor sit together on the same floor and eat the same prasad.",
      "If you wish to participate in Bhandara seva, you can volunteer in the kitchen, help with serving, assist in cleanup, or contribute towards the food expenses. Every act of service, no matter how small, earns immense divine merit.",
    ],
    relatedSlugs: ["volunteering-at-chaturmas", "significance-of-chaturmas"],
  },
  "mantras-for-daily-worship": {
    title: "Essential Mantras for Daily Worship During Chaturmas",
    date: "August 3, 2024",
    readTime: "10 min read",
    category: "Spirituality",
    author: "Pandit Suresh Shastri",
    image: "",
    content: [
      "Mantras are not mere words — they are vibrations that carry divine energy. During Chaturmas, the practice of chanting mantras becomes especially potent as the spiritual energy of the cosmos is heightened.",
      "The Gayatri Mantra is considered the supreme mantra of all. Chanting it 108 times daily during Chaturmas can bring clarity of thought, spiritual protection, and inner peace. The mantra invokes the divine light of Savitr to illuminate our intellect.",
      "Vishnu Sahasranama, the thousand names of Lord Vishnu, is another essential chant for this period. Reciting it on Saturdays and Ekadashi days is believed to bring liberation from past karmas and divine blessings.",
      "For those seeking the blessings of Lord Shiva during Shravan, the Mahamrityunjaya Mantra is the most powerful. It protects against untimely death and brings healing to body and mind.",
      "The Durga Chalisa and Hanuman Chalisa are also widely chanted during Chaturmas for protection and courage. Many devotees recite these daily, especially during the evening pravachan sessions.",
      "Remember: the power of a mantra lies not in its speed but in its sincerity. Chant slowly, with full attention and devotion. Let each syllable resonate in your heart.",
    ],
    relatedSlugs: ["significance-of-chaturmas", "gita-pravachan-day-1-summary"],
  },
  "volunteering-at-chaturmas": {
    title: "A Volunteer's Journey: Stories from the Heart of Chaturmas",
    date: "August 10, 2024",
    readTime: "7 min read",
    category: "Community",
    author: "Ravi Kumar",
    image: "",
    content: [
      "Every morning at 4:00 AM, while most of the world sleeps, Suresh ji from Delhi is already in the kitchen, rolling out rotis for the Bhandara. 'This is my third year of kitchen seva,' he says with a smile. 'I have never felt more at peace.'",
      "The story of Chaturmas is not just about the saints and the discourses — it is about the hundreds of ordinary people who give their time, energy, and love to make everything possible.",
      "Meera ji, a school teacher from Mumbai, takes a month's leave every year to volunteer at Chaturmas. 'I handle the registration desk,' she explains. 'Every devotee who comes through is a guest of God. When I serve them, I serve the divine.'",
      "Then there is young Aman, a college student who manages the entire sound and live-streaming setup. 'I started as a volunteer at age 16. Now I train other youngsters. Chaturmas taught me responsibility and devotion,' he shares.",
      "The cleaning team, the security volunteers, the medical aid workers, the prasad distributors — each one plays an irreplaceable role. Together, they create the sacred infrastructure that supports thousands of spiritual seekers.",
      "If you feel called to serve, there is always room for one more pair of hands. Register at the Seva Desk or contact us online. As we say in Seva — 'Haath Badhao, Bhagwan Ka Kaam Karo' (Extend your hands, do God's work).",
    ],
    relatedSlugs: ["bhandara-seva-guide", "significance-of-chaturmas"],
  },
  "shravan-month-special": {
    title: "Shravan Maas: The Most Auspicious Month for Lord Shiva Worship",
    date: "August 18, 2024",
    readTime: "6 min read",
    category: "Festivals",
    author: "Anita Devi",
    image: "",
    content: [
      "Shravan Maas (the month of Shravan) is considered the holiest month in the entire Hindu calendar. It is the fifth month of the Hindu lunar calendar, falling between July and August, and is dedicated entirely to Lord Shiva.",
      "According to the Puranas, during the churning of the cosmic ocean (Samudra Manthan), the deadly poison (Halahala) emerged and threatened to destroy all creation. Lord Shiva consumed the poison to save the world, and the gods offered him Gangajal during Shravan to soothe his throat.",
      "This is why Monday worship (Somvar Vrat) during Shravan is considered especially powerful. Devotees wake before dawn, take a holy bath, wear clean white or green clothes, and visit Shiva temples to offer bel patra, milk, and water.",
      "At Sanatani Chaturmas, we have planned special Shravan celebrations including weekly Somvar pujas, daily Shiv Mahapuran recitation, Rudra Abhishek on Mondays, and a grand Bhandara on Shravan Purnima.",
      "Fasting during Shravan can be adapted to your capacity — some observe a full fast, others eat only one meal, and many avoid certain foods like onion, garlic, and non-vegetarian items. The key is devotion, not rigidity.",
      "As Pujya Guruji says: 'Shravan is not just a month — it is a reminder that even the greatest suffering can be overcome with divine grace. Lord Shiva took poison so that we may live. In Shravan, we remember this sacrifice and offer our hearts in gratitude.'",
    ],
    relatedSlugs: ["significance-of-chaturmas", "mantras-for-daily-worship"],
  },
};

const allPostsList = Object.entries(blogPosts).map(([slug, post]) => ({
  slug,
  title: post.title,
  category: post.category,
}));

const categoryColor: Record<string, string> = {
  Spirituality: "bg-purple-100 text-purple-700",
  Pravachan: "bg-yellow-100 text-yellow-700",
  Seva: "bg-orange-100 text-orange-700",
  Community: "bg-blue-100 text-blue-700",
  Festivals: "bg-green-100 text-green-700",
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <SacredHeader />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-4xl text-brown mb-4">Post Not Found</h1>
            <p className="font-sans text-brown/60 mb-6">The blog post you're looking for doesn't exist.</p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-saffron text-white px-6 py-2 text-sm font-sans font-semibold hover:bg-orange-600 transition-colors"
            >
              <ArrowLeft size={14} /> Back to Blog
            </Link>
          </div>
        </div>
        <SacredFooter />
      </div>
    );
  }

  const relatedPosts = (post.relatedSlugs || [])
    .map((s) => ({ slug: s, ...blogPosts[s] }))
    .filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col">
      <SacredHeader />

      {/* Hero Image */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={post.image}
          alt={post.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown/80 via-brown/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-xs font-sans text-white/70 hover:text-white mb-3 transition-colors"
          >
            <ArrowLeft size={12} /> All Posts
          </Link>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`text-xs font-sans font-semibold px-2 py-0.5 ${categoryColor[post.category]}`}>
              <Tag size={10} className="inline mr-1" />
              {post.category}
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Article Content */}
      <main className="flex-1 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-14">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm font-sans text-brown/50 mb-8 pb-6 border-b border-gold/30">
            <span className="flex items-center gap-1.5">
              <User size={14} className="text-saffron" /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-saffron" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-saffron" /> {post.readTime}
            </span>
          </div>

          {/* Content */}
          <article className="prose prose-brown max-w-none">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="font-sans text-base text-brown/80 leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </article>

          {/* Divider */}
          <div className="flex items-center gap-2 text-gold my-10">
            <div className="flex-1 h-px bg-gold/30" />
            <span className="text-sm">❈ ❈ ❈</span>
            <div className="flex-1 h-px bg-gold/30" />
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h3 className="font-serif text-2xl text-brown mb-6">Related Posts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    to={`/blog/${rp.slug}`}
                    className="bg-white border border-gold/40 p-4 hover:border-gold hover:shadow-md transition-all duration-150 group"
                  >
                    <span className={`text-xs font-sans font-semibold px-2 py-0.5 ${categoryColor[rp.category]}`}>
                      {rp.category}
                    </span>
                    <h4 className="font-serif text-base text-brown mt-2 group-hover:text-saffron transition-colors line-clamp-2">
                      {rp.title}
                    </h4>
                    <span className="text-xs font-sans font-semibold text-saffron mt-3 flex items-center gap-1">
                      Read <ChevronRight size={12} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Newsletter variant="section" />
      <SacredFooter />
    </div>
  );
}
