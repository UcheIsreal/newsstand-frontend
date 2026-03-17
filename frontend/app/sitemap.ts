export default function sitemap() {
  const baseUrl = "https://www.newsstand.online/";

  const categories = [
    "finance",
    "politics",
    "sports",
    "business",
    "technology",
    "entertainment",
    "health",
    "world",
  ];

  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/${category}`,
    lastModified: new Date(),
    changeFrequency: "hourly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "hourly" as const,
      priority: 1.0,
    },
    ...categoryPages,
  ];
}
