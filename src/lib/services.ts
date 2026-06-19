/**
 * Service catalogue — drives the Services page, homepage grid, footer links
 * and structured data. Pricing follows a hybrid model: transparent entry
 * pricing on productised services, "Custom Proposal" on consultancy-led work.
 */

export type IconKey =
  | "search"
  | "shieldCheck"
  | "target"
  | "clipboardCheck"
  | "fileText"
  | "handshake"
  | "scale"
  | "factory"
  | "packageCheck"
  | "ship"
  | "fileCheck"
  | "users"
  | "rocket";

export type Service = {
  slug: string;
  title: string;
  icon: IconKey;
  category: "Sourcing" | "Verification" | "Management" | "Quality & Logistics" | "Growth";
  summary: string;
  /** Short value statement used on cards */
  outcome: string;
  /** Pricing display per hybrid strategy */
  price: string;
  priceNote?: string;
  featured?: boolean;
  includes: string[];
};

export const services: Service[] = [
  {
    slug: "product-sourcing",
    title: "Product Sourcing",
    icon: "search",
    category: "Sourcing",
    summary:
      "We find the right product from the right manufacturer in the right market — not the first supplier that answers an email. Category mapping, multi-platform search and factory-direct shortlisting.",
    outcome: "A shortlist of qualified, factory-direct suppliers built around your exact brief.",
    price: "Starting from $300",
    priceNote: "Supplier Discovery package",
    featured: true,
    includes: [
      "Product brief analysis and category mapping",
      "Multi-platform search across global sourcing channels",
      "Minimum of 5 qualified supplier profiles",
      "Factory vs. trading company verification",
      "MOQ, lead time and pricing-range comparison",
      "Shortlist report delivered to an agreed timeframe",
    ],
  },
  {
    slug: "supplier-identification",
    title: "Supplier Identification",
    icon: "target",
    category: "Sourcing",
    summary:
      "Access factory-direct pricing tiers that standard English-language search never surfaces. We navigate Alibaba, 1688, Made-in-China and regional manufacturing networks to build your longlist.",
    outcome: "Direct access to manufacturers behind the marketplace listings.",
    price: "Included in sourcing",
    includes: [
      "Category-specific market research",
      "Longlist of candidate manufacturers",
      "Screening against your production criteria",
      "Platform and trade-assurance status review",
    ],
  },
  {
    slug: "supplier-verification",
    title: "Supplier Verification",
    icon: "shieldCheck",
    category: "Verification",
    summary:
      "The most preventable source of procurement loss is failing to verify a supplier before ordering. We confirm the legitimacy, capacity and export history of a supplier before a single dollar is committed.",
    outcome: "A written verdict: Verified, Conditional, or High-Risk — with the evidence behind it.",
    price: "Starting from $200",
    priceNote: "per supplier",
    featured: true,
    includes: [
      "Business registration and licence check",
      "Factory vs. agent status determination",
      "Export record and platform history review",
      "Capacity and production-scope assessment",
      "Compliance-flag identification",
      "Written verification report with findings",
    ],
  },
  {
    slug: "factory-audit-coordination",
    title: "Factory Audit Coordination",
    icon: "factory",
    category: "Verification",
    summary:
      "Third-party factory audits arranged and coordinated through accredited inspection partners — so you know the factory exists, operates at scale, and meets your standards before you commit.",
    outcome: "An independent, on-the-ground assessment of your prospective factory.",
    price: "Custom Proposal",
    includes: [
      "Audit scoping and brief preparation",
      "Accredited audit booking and scheduling",
      "Report review and client briefing",
      "Recommendation on engagement readiness",
    ],
  },
  {
    slug: "rfq-management",
    title: "RFQ Management",
    icon: "clipboardCheck",
    category: "Sourcing",
    summary:
      "We issue structured requests for quotation to qualified suppliers and normalise the responses — so you compare like-for-like on price, MOQ, lead time and terms, not marketing.",
    outcome: "Clean, comparable quotes from multiple factories on a single specification.",
    price: "Included in sourcing",
    includes: [
      "Standardised RFQ preparation",
      "Distribution to a qualified supplier set",
      "Response normalisation and comparison",
      "Clarification management with suppliers",
    ],
  },
  {
    slug: "price-negotiation",
    title: "Price Negotiation",
    icon: "handshake",
    category: "Sourcing",
    summary:
      "Comparative shortlisting creates leverage. We benchmark pricing across a minimum of three factories and negotiate directly on your behalf — targeting factory-direct pricing with clearly defined terms.",
    outcome: "Lower landed cost and defined payment, quality and delivery terms.",
    price: "Custom Proposal",
    priceNote: "within Strategic Sourcing",
    includes: [
      "Price benchmarking across 3+ factories",
      "Direct negotiation on your behalf",
      "Payment and delivery-term structuring",
      "Documented negotiation outcomes",
    ],
  },
  {
    slug: "strategic-sourcing",
    title: "Contract & Strategic Sourcing",
    icon: "scale",
    category: "Management",
    summary:
      "End-to-end sourcing from discovery through to a negotiated, sample-ready supplier selection — with procurement documentation and contract support prepared along the way.",
    outcome: "A single, sample-ready supplier decision backed by a complete audit trail.",
    price: "Custom Proposal",
    featured: true,
    includes: [
      "Full supplier discovery and verification",
      "Price benchmarking across minimum 3 factories",
      "Direct price negotiation on your behalf",
      "Sample coordination and review process",
      "Procurement and contract documentation",
      "Final supplier recommendation with rationale",
    ],
  },
  {
    slug: "procurement-management",
    title: "Procurement Management",
    icon: "fileText",
    category: "Management",
    summary:
      "Full-cycle order management from purchase order through to pre-shipment inspection and dispatch confirmation — with structured status updates at every milestone. No verbal-only updates.",
    outcome: "Your order, managed end-to-end, with a documented record at every stage.",
    price: "Custom Proposal",
    priceNote: "scoped to order value",
    featured: true,
    includes: [
      "PO preparation and supplier communication",
      "Production follow-up and milestone tracking",
      "Pre-shipment inspection coordination",
      "Quality outcome review and approval",
      "Shipping document and logistics coordination",
      "Order-closure report and supplier scorecard",
    ],
  },
  {
    slug: "quality-inspection",
    title: "Quality Control Inspection",
    icon: "packageCheck",
    category: "Quality & Logistics",
    summary:
      "Pre-shipment inspection coordinated through accredited, independent third-party partners — covering 18+ on-site checkpoints against ISO 2859-1 (AQL) standards. Reports released within 24 hours.",
    outcome: "Catch defects in the factory, not on arrival.",
    price: "Custom Proposal",
    includes: [
      "Inspection checklist and specification briefing",
      "Pre-shipment inspection booking (48-hour arrangement)",
      "18+ on-site checkpoints to AQL standards",
      "Report interpretation and client advisory",
    ],
  },
  {
    slug: "freight-coordination",
    title: "Freight Coordination",
    icon: "ship",
    category: "Quality & Logistics",
    summary:
      "We coordinate sea, air, rail and courier freight through vetted forwarding partners and align Incoterms to your risk profile — so the handover from factory to destination is planned, not improvised.",
    outcome: "A clear logistics plan with the right Incoterm for your exposure.",
    price: "Custom Proposal",
    includes: [
      "Freight-method and Incoterm advisory",
      "Coordination with vetted freight partners",
      "Shipment milestone tracking",
      "Document hand-off management",
    ],
  },
  {
    slug: "trade-documentation",
    title: "Import & Export Documentation",
    icon: "fileCheck",
    category: "Quality & Logistics",
    summary:
      "Support preparing and reviewing the commercial and compliance documentation that moves goods across borders — invoices, packing lists, certificates and PO terms aligned to your destination market.",
    outcome: "Documentation that clears customs without surprises.",
    price: "Custom Proposal",
    includes: [
      "Commercial invoice and packing-list review",
      "Certificate and compliance-document coordination",
      "PO and supplier-agreement preparation",
      "Destination-market documentation alignment",
    ],
  },
  {
    slug: "vendor-management",
    title: "Vendor Management",
    icon: "users",
    category: "Management",
    summary:
      "Ongoing supplier relationship management, performance monitoring and procurement-pipeline support for active importers — including backup-supplier diversification to remove single-supplier dependency.",
    outcome: "A managed, resilient supplier base instead of a single point of failure.",
    price: "Starting from $500",
    priceNote: "per month, retainer",
    featured: true,
    includes: [
      "Supplier scorecard maintenance and review",
      "Proactive supplier communication management",
      "Backup-supplier identification and vetting",
      "Monthly procurement-pipeline reporting",
      "Priority access to sourcing and inspection services",
    ],
  },
  {
    slug: "brand-development",
    title: "Product Launch & Brand Development",
    icon: "rocket",
    category: "Growth",
    summary:
      "Support taking a private-label or white-label product from concept to market — branding, packaging, sampling and supplier coordination aligned to your launch on Shopify, Amazon or retail.",
    outcome: "A launch-ready private-label product, sourced and branded to spec.",
    price: "Custom Proposal",
    includes: [
      "Private-label and white-label supplier sourcing",
      "Packaging and branding coordination",
      "Sample iteration management",
      "Launch-timeline and supplier alignment",
    ],
  },
];

export const servicePackages = [
  {
    name: "Supplier Discovery",
    price: "From $300",
    summary: "Identify and shortlist verified manufacturers for a specific product category.",
    cta: "Most popular entry point",
    highlight: false,
  },
  {
    name: "Supplier Verification",
    price: "From $200",
    priceNote: "per supplier",
    summary: "Verify the legitimacy, capacity and export history of a supplier before you order.",
    cta: "De-risk before you commit",
    highlight: false,
  },
  {
    name: "Strategic Sourcing",
    price: "Custom Proposal",
    summary: "End-to-end sourcing from discovery to a negotiated, sample-ready supplier selection.",
    cta: "Our flagship engagement",
    highlight: true,
  },
  {
    name: "Procurement Management",
    price: "Custom Proposal",
    summary: "Full-cycle order management from PO through to pre-shipment inspection and dispatch.",
    cta: "Hands-off, fully documented",
    highlight: false,
  },
  {
    name: "Vendor Management Retainer",
    price: "From $500/mo",
    summary: "Ongoing supplier performance management and procurement-pipeline support.",
    cta: "For active importers",
    highlight: false,
  },
  {
    name: "Factory Audit & Inspection",
    price: "Custom Proposal",
    summary: "Third-party factory audits and pre-shipment inspections via accredited partners.",
    cta: "Independent assurance",
    highlight: false,
  },
];
