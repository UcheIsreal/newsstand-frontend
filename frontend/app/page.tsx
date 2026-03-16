import NewsCard from "@/components/NewsCard";

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Top Stories</h1>
      <NewsCard category="" />
    </main>
  );
}
