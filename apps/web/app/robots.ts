import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/* `/_next/` must stay crawlable: it serves the JS/CSS Googlebot needs to
 * render pages. Blocking it makes Google index an unstyled, partial page. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
