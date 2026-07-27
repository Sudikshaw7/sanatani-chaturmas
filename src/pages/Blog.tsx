import { Link } from "react-router-dom";
import SacredHeader from "@/components/SacredHeader";
import SacredFooter from "@/components/SacredFooter";
import Newsletter from "@/components/Newsletter";
import { Calendar, Clock, ArrowRight, Tag, User } from "lucide-react";

const blogPosts = [
  {
    slug: "significance-of-chaturmas",
    title: "The Sacred Significance of Chaturmas in Sanatan Dharma",
    excerpt:
      "Chaturmas is a four-month holy period beginning on Ekadashi of Shukla Paksha in the month of Ashadha. Discover the deep spiritual meaning behind this ancient observance and why saints choose this period for intensive sadhana.",
    date: "July 15, 2024",
    readTime: "6 min read",
    category: "Spirituality",
    author: "Pandit Suresh Shastri",
    image: "",
  },
  {
    slug: "gita-pravachan-day-1-summary",
    title: "Gita Pravachan Day 1: Arjuna Vishada Yoga — When Despair Became the Gateway to Wisdom",
    excerpt:
      "The opening chapter of the Bhagavad Gita sets the stage for the greatest discourse ever delivered. Pujya Rameshacharyaji explains how Arjuna's despair was not weakness but the beginning of true knowledge.",
    date: "July 20, 2024",
    readTime: "8 min read",
    category: "Pravachan",
    author: "Pandit Suresh Shastri",
    image: "",
  },
  {
    slug: "bhandara-seva-guide",
    title: "The Spirit of Bhandara: How Community Seva Feeds the Soul",
    excerpt:
      "Bhandara is not just about feeding people — it is about serving the divine in every plate. Learn how to participate in this sacred tradition and the immense merit it brings to the community.",
    date: "July 28, 2024",
    readTime: "5 min read",
    category: "Seva",
    author: "Anita Devi",
    image: "",
  },
  {
    slug: "mantras-for-daily-worship",
    title: "Essential Mantras for Daily Worship During Chaturmas",
    excerpt:
      "From the Gayatri Mantra to the Vishnu Sahasranama, these sacred chants carry the power of transformation. A guide to the most potent mantras for your daily sadhana during the holy four months.",
    date: "August 3, 2024",
    readTime: "10 min read",
    category: "Spirituality",
    author: "Pandit Suresh Shastri",
    image: "",
  },
  {
    slug: "volunteering-at-chaturmas",
    title: "A Volunteer's Journey: Stories from the Heart of Chaturmas",
    excerpt:
      "Meet the hundreds of selfless volunteers who make Chaturmas possible — from kitchen seva to crowd management. Their stories of devotion and dedication inspire us all.",
    date: "August 10, 2024",
    readTime: "7 min read",
    category: "Community",
    author: "Ravi Kumar",
    image: "",
  },
  {
    slug: "shravan-month-special",
    title: "Shravan Maas: The Most Auspicious Month for Lord Shiva Worship",
    excerpt:
      "Shravan is considered the holiest month in the Hindu calendar. Explore the rituals, vrat kathas, and special events planned at Sanatani Chaturmas during this sacred period.",
    date: "August 18, 2024",
    readTime: "6 min read",
    category: "Festivals",
    author: "Anita Devi",
    image: "",
  },
];

const categoryColor: Record<string, string> = {
  Spirituality: "bg-purple-100 text-purple-700",
  Pravachan: "bg-yellow-100 text-yellow-700",
  Seva: "bg-orange-100 text-orange-700",
  Community: "bg-blue-100 text-blue-700",
  Festivals: "bg-green-100 text-green-700",
};

const categories = ["All", "Spirituality", "Pravachan", "Seva", "Community", "Festivals"];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SacredHeader />

      {/* Page Header */}
      <div className="bg-brown py-10 md:py-14 text-center relative lotus-bg overflow-hidden">
        <div className="absolute inset-0 bg-brown/88 pointer-events-none" />
        <div className="relative">
          <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-2">चिंतन</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white">Blog & Insights</h1>
          <div className="mt-3 flex justify-center gap-1 text-gold text-sm">❈ ❈ ❈</div>
        </div>
      </div>

      {/* Blog Posts */}
      <main className="flex-1 bg-cream py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <Link
            to={`/blog/${blogPosts[0].slug}`}
            className="block sacred-card bg-white overflow-hidden mb-10 group"
          >
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-sans font-semibold px-2 py-0.5 bg-saffron text-white">
                    Featured
                  </span>
                  <span className={`text-xs font-sans font-semibold px-2 py-0.5 ${categoryColor[blogPosts[0].category]}`}>
                    <Tag size={10} className="inline mr-1" />
                    {blogPosts[0].category}
                  </span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-brown mb-3 group-hover:text-saffron transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="font-sans text-sm text-brown/70 leading-relaxed mb-4">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-brown/50">
                  <span className="flex items-center gap-1">
                    <User size={12} className="text-saffron" /> {blogPosts[0].author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} className="text-saffron" /> {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="text-saffron" /> {blogPosts[0].readTime}
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Post Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="sacred-card bg-white flex flex-col overflow-hidden group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={post.image}
                    alt={post.title}
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`text-xs font-sans font-semibold px-2 py-0.5 ${categoryColor[post.category]}`}>
                      <Tag size={10} className="inline mr-1" />
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-brown mb-2 group-hover:text-saffron transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm font-sans text-brown/60 leading-relaxed mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-sans text-brown/50 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} className="text-saffron" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} className="text-saffron" /> {post.readTime}
                    </span>
                  </div>
                  <span className="text-xs font-sans font-semibold text-saffron uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Newsletter variant="section" />
      <SacredFooter />
    </div>
  );
}
