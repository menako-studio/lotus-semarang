import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const now = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/layanan/akupunktur`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/layanan/hidroterapi`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/layanan/fisioterapi`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.90,
    },
    {
      url: `${baseUrl}/layanan/swim-course`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.90,
    },
    {
      url: `${baseUrl}/reservasi`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.90,
    },
    {
      url: `${baseUrl}/tentang-kami`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];
}
