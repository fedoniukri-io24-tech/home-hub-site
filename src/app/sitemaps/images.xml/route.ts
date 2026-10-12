import { buildImagesSitemapXml, sitemapResponseHeaders } from "@/lib/seo/sitemapXml";

export function GET() {
  return new Response(buildImagesSitemapXml(), { headers: sitemapResponseHeaders });
}
