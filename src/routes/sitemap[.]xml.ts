import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/start-client-core";

const SITE_URL = "https://gabeyreglobal.ca";

const routes = [
  { path: "/", priority: "1.0", changefreq: "weekly" as const },
  { path: "/services", priority: "0.9", changefreq: "monthly" as const },
  { path: "/services/print", priority: "0.8", changefreq: "monthly" as const },
  {
    path: "/services/development",
    priority: "0.8",
    changefreq: "monthly" as const,
  },
  { path: "/work", priority: "0.8", changefreq: "monthly" as const },
  { path: "/companies", priority: "0.7", changefreq: "monthly" as const },
  { path: "/about", priority: "0.7", changefreq: "monthly" as const },
  { path: "/contact", priority: "0.9", changefreq: "monthly" as const },
  { path: "/privacy", priority: "0.3", changefreq: "yearly" as const },
  { path: "/legal", priority: "0.3", changefreq: "yearly" as const },
];

function generateSitemapXml(): string {
  const entries = routes
    .map(
      (route) =>
        `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const xml = generateSitemapXml();
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
          },
        });
      },
    },
  },
});
