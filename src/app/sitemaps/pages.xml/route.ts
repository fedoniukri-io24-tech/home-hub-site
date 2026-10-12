import { buildPagesSitemapXml, sitemapResponseHeaders } from "@/lib/seo/sitemapXml";

export function GET() {
  return new Response(buildPagesSitemapXml(), { headers: sitemapResponseHeaders });
}
