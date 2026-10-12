import { buildSitemapIndexXml, sitemapResponseHeaders } from "@/lib/seo/sitemapXml";

export function GET() {
  return new Response(buildSitemapIndexXml(), { headers: sitemapResponseHeaders });
}
