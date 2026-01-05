import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "/", priority: 1 },
    { url: "/products" },
    { url: "/about" },
    { url: "/find-us" },
  ];
}
