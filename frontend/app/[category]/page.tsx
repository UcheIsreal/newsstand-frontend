import NewsCard from "@/components/NewsCard";

const CATEGORY_LABELS: Record<string, string> = {
  finance: "Finance",
  politics: "Politics",
  sports: "Sports",
  business: "Business",
  technology: "Technology",
  entertainment: "Entertainment",
  health: "Health",
  us: "USA",
  uk: "UK",
  nigeria: "Nigeria",
  india: "India",
  world: "World",
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const label = CATEGORY_LABELS[params.category] ?? params.category;
  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">{label}</h1>
      <NewsCard category={params.category} />
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(CATEGORY_LABELS).map((category) => ({ category }));
}
