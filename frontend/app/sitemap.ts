import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.newsstand.online";

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

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1.0,
    },
    ...categories.map((category) => ({
      url: `${baseUrl}/${category}`,
      lastModified: new Date(),
      changeFrequency: "hourly" as const,
      priority: 0.8,
    })),
  ];
}
