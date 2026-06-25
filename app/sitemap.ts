import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.alamhandloomcarpets.in",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.alamhandloomcarpets.in/mohali-carpet-shop",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
  url: "https://www.alamhandloomcarpets.in/patiala-carpet-shop",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.8,
},
    {
      url: "https://www.alamhandloomcarpets.in/panchkula-carpet-shop",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.alamhandloomcarpets.in/zirakpur-carpet-shop",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.alamhandloomcarpets.in/mumbai-carpet-shop",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
