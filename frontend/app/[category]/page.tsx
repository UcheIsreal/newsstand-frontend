import NewsCard from "@/components/NewsCard";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const CATEGORY_LABELS: Record<string, string> = {
  finance: "💰 Finance",
  politics: "🏛️ Politics",
  sports: "⚽ Sports",
  business: "📈 Business",
  technology: "💻 Technology",
  entertainment: "🎬 Entertainment",
  health: "🏥 Health",
  world: "🌍 World",
};

async function getArticles(category: string) {
  const res = await fetch(
    `${API_URL}/articles?category=${category}&limit=50`,
    { next: { revalidate: 1800 } }
  );
  if (!res.ok) throw new Error("Failed to fetch articles");
  return res.json();
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { articles } = await getArticles(params.category);
  const label = CATEGORY_LABELS[params.category] ?? params.category;

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">{label}</h1>
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

export function generateStaticParams() {
  return Object.keys(CATEGORY_LABELS).map((category) => ({ category }));
}
