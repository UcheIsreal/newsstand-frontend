"use client";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  source_name: string;
  source_logo: string;
  category: string;
  image_url?: string;
  published_at: string;
  tags: string[];
}

export default function NewsCard({ article }: { article: Article }) {
  const timeAgo = (dateStr: string) => {
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    return `${Math.floor(hrs / 24)}d ago`;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      {article.image_url && (
        <div className="w-full h-48 bg-gray-100 overflow-hidden">
          <img
            src={article.image_url}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <img
            src={`https://www.google.com/s2/favicons?domain=${article.source_logo}&sz=16`}
            alt=""
            className="w-4 h-4"
          />
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            {article.source_name}
          </span>
          <span className="text-xs text-gray-400">·</span>
          <span className="text-xs text-gray-400">{timeAgo(article.published_at)}</span>
        </div>

        <h3 className="font-bold text-gray-900 leading-snug mb-2 line-clamp-2">
          {article.title}
        </h3>

        {article.excerpt && (
          <p className="text-sm text-gray-600 line-clamp-3 mb-3">{article.excerpt}</p>
        )}

        {article.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          Read Full Story →
        </a>
      </div>
    </div>
  );
}
