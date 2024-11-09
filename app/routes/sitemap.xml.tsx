import { MetadataRoute } from 'remix';
import { XMLParser } from 'fast-xml-parser';

export function metadata(): MetadataRoute {
  return {
    headers: {
      'Content-Type': 'application/xml',
    },
  };
}

export default async function Sitemap() {
  const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://your-shopify-store.com/</loc>
    </url>
  </urlset>`;

  return new Response(xmlString, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
