import type { Metadata } from "next";
import { siteConfig } from "./site-config";

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function pageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: PageMetaInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = `${title} | ${siteConfig.shortName}`;
  return {
    title,
    description,
    keywords: [
      "global procurement",
      "strategic sourcing",
      "supplier verification",
      "product sourcing",
      "procurement consultancy",
      ...keywords,
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.legalName,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

/** Organization + ProfessionalService JSON-LD for rich results. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    founder: { "@type": "Person", name: siteConfig.founder },
    foundingDate: "2024-09",
    sameAs: [siteConfig.contact.linkedin],
    areaServed: "Worldwide",
    knowsAbout: [
      "Product sourcing",
      "Supplier verification",
      "Procurement management",
      "Quality control inspection",
      "Strategic sourcing",
      "Vendor management",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
    },
    identifier: {
      "@type": "PropertyValue",
      name: "RC Number",
      value: siteConfig.rcNumber,
    },
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
