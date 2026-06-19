/**
 * Single source of truth for company facts, contact details and navigation.
 * Update values here and they propagate across every page, the footer,
 * structured data (JSON-LD) and the metadata.
 */

export const siteConfig = {
  name: "Arrowlink Global Procurement",
  legalName: "Arrowlink Global Procurement Ltd",
  shortName: "Arrowlink",
  rcNumber: "8646097",
  tagline: "Procurement Done Right. Globally.",
  description:
    "Arrowlink Global Procurement is a strategic sourcing and procurement consultancy. We help importers, distributors, ecommerce brands and corporate buyers source products, verify suppliers and manage procurement projects across global markets.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://arrowlinkprocurement.com",
  founder: "Oluwadamilola Arowolo",
  foundedYear: "2024",
  incorporated: "30 July 2025",
  governingAct: "CAMA 2020 — Federal Republic of Nigeria",
  structure: "Private Company Limited by Shares",
  registeredIn: "Nigeria",
  servingClients: "Worldwide",

  contact: {
    email: "info@arrowlinkprocurement.com",
    directEmail: "oluwadamilola.arowolo@arrowlinkprocurement.com",
    phone: "+234 903 140 3290",
    phoneIntl: "+2349031403290",
    whatsapp: "https://wa.me/2349031403290",
    linkedin: "https://www.linkedin.com/in/oluwadamilolaarowolo",
  },

  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "",

  // Primary + extended sourcing markets (positioned as GLOBAL, not China-only)
  markets: [
    { name: "China", note: "Primary market — Alibaba, 1688, Made-in-China, Taobao, Pinduoduo" },
    { name: "Vietnam", note: "Textiles, garments, furniture" },
    { name: "Turkey", note: "Textiles, leather goods, ceramics" },
    { name: "Europe", note: "Quality manufacturing & nearshoring" },
    { name: "North America", note: "Specialist & regulated supply" },
    { name: "South America", note: "Raw materials & agro-industrial" },
    { name: "Africa", note: "Emerging manufacturing & trade corridors" },
  ],

  stats: [
    { value: "7+", label: "Global sourcing markets" },
    { value: "5+", label: "Verification checkpoints per supplier" },
    { value: "18+", label: "On-site inspection checkpoints" },
    { value: "100%", label: "Client-side representation" },
  ],
} as const;

export type NavItem = {
  title: string;
  href: string;
  description?: string;
};

export const mainNav: NavItem[] = [
  { title: "Services", href: "/services", description: "Sourcing, verification, procurement management & more" },
  { title: "Industries", href: "/industries", description: "Sectors and product categories we cover" },
  { title: "How We Work", href: "/how-we-work", description: "Our documented 8-stage procurement process" },
  { title: "About", href: "/about", description: "Who we are and what we stand for" },
  { title: "Resources", href: "/resources", description: "Guides, downloads and procurement insight" },
  { title: "Contact", href: "/contact", description: "Talk to our procurement team" },
];

export const footerNav = {
  company: [
    { title: "About Arrowlink", href: "/about" },
    { title: "How We Work", href: "/how-we-work" },
    { title: "Industries", href: "/industries" },
    { title: "Resources", href: "/resources" },
  ],
  services: [
    { title: "Product Sourcing", href: "/services#product-sourcing" },
    { title: "Supplier Verification", href: "/services#supplier-verification" },
    { title: "Procurement Management", href: "/services#procurement-management" },
    { title: "Quality Inspection", href: "/services#quality-inspection" },
  ],
  engage: [
    { title: "Book a Consultation", href: "/book" },
    { title: "Client Onboarding", href: "/onboarding" },
    { title: "Contact Us", href: "/contact" },
    { title: "WhatsApp", href: "https://wa.me/2349031403290" },
  ],
};
