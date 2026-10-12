import { buildProductsSitemapXml, sitemapResponseHeaders } from "@/lib/seo/sitemapXml";

export function GET() {
  return new Response(buildProductsSitemapXml(), { headers: sitemapResponseHeaders });
}
