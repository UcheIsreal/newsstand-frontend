"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CATEGORIES = [
  { slug: "", label: "🏠 Top Stories" },
  { slug: "nigeria", label: "🇳🇬 Nigeria" },
  { slug: "india", label: "🇮🇳 India" },
  { slug: "uk", label: "🇬🇧 UK" },
  { slug: "usa", label: "🇺🇸 USA" },
  { slug: "finance", label: "💰 Finance" },
  { slug: "politics", label: "🏛️ Politics" },
  { slug: "sports", label: "⚽ Sports" },
  { slug: "business", label: "📈 Business" },
  { slug: "technology", label: "💻 Technology" },
  { slug: "entertainment", label: "🎬 Entertainment" },
  { slug: "health", label: "🏥 Health" },
  { slug: "world", label: "🌍 World" },
];

export default function CategoryNav() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
          {CATEGORIES.map(({ slug, label }) => {
            const href = slug ? `/${slug}` : "/";
            const isActive = pathname === href;
            return (
              <Link
                key={slug}
                href={href}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
