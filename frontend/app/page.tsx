import NewsCard from "@/components/NewsCard";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getArticles(category?: string) {
  const url = category
    ? `${API_URL}/articles?category=${category}&limit=50`
    : `${API_URL}/articles?limit=50`;

  try {
    const res = await fetch(url, { next: { revalidate: 1800 } });
    if (!res.ok) return [];
    const data = await res.json();
    return data.articles ?? [];
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const articles = await getArticles();

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Top Stories</h1>
      {articles.length === 0 ? (
        <p className="text-gray-500">No articles yet. Check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {articles.map((article: any) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </main>
  );
}
