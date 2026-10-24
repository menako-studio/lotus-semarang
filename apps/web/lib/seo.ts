import type { Metadata } from "next";

/* ─── Site Constants ─────────────────────────────────────────────────────────
 * Single source of truth for the canonical origin and NAP (Name, Address,
 * Phone). Keep NAP identical to the Google Business Profile listing.
 * ──────────────────────────────────────────────────────────────────────────── */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.lotussemarang.com"
).replace(/\/+$/, "");

export const SITE_NAME = "Lotus Akupunktur, Hidroterapi, Fisioterapi Semarang";
export const BRAND_NAME = "Lotus Semarang";
export const CLINIC_ID = `${SITE_URL}/#clinic`;
export const PHONE = "+6287700303645";
export const MAPS_URL = "https://maps.app.goo.gl/PWpA655K59Gq82Xy9";
export const INSTAGRAM_URL = "https://www.instagram.com/lotus_semarang";
export const FACEBOOK_URL = "https://www.facebook.com/lotusacupuncturecenter";
export const DEFAULT_OG_IMAGE = "/og-image.jpg";

export const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Jl. Pamularsih No. 90/100, Gisikdrono, Semarang Barat",
  addressLocality: "Semarang",
  addressRegion: "Jawa Tengah",
  postalCode: "50149",
  addressCountry: "ID",
};

/** Reference to the clinic entity declared once in the root layout JSON-LD. */
export const clinicRef = { "@type": "MedicalClinic", "@id": CLINIC_ID, name: SITE_NAME };

/* ─── Page Metadata Helper ───────────────────────────────────────────────────
 * Child-route `openGraph` replaces the layout's object instead of merging, so
 * every page builds its own canonical + OG + Twitter set here. Otherwise a
 * page would inherit og:url of the homepage.
 * ──────────────────────────────────────────────────────────────────────────── */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
  image = DEFAULT_OG_IMAGE,
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
}): Metadata {
  const images = [{ url: image, width: 1200, height: 630, alt: imageAlt || title }];
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "id_ID",
      siteName: SITE_NAME,
      url: path,
      title: `${title} | ${BRAND_NAME}`,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${BRAND_NAME}`,
      description,
      images: [image],
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}
