/** Editorial content: process, industries, pain points, principles, proof. */

export const processSteps = [
  {
    n: "01",
    title: "Client Brief & Scope Definition",
    body: "Product specifications, target pricing, destination market, compliance requirements and volume are documented. Scope and deliverables are agreed in writing before work begins.",
  },
  {
    n: "02",
    title: "Market & Platform Research",
    body: "Category-specific research across global sourcing platforms identifies the available supplier landscape, price tiers and MOQ ranges for your product.",
  },
  {
    n: "03",
    title: "Supplier Identification & Screening",
    body: "A longlist of candidate suppliers is filtered against your criteria: factory vs. trading-company status, minimum production capacity, export history and verification status.",
  },
  {
    n: "04",
    title: "Supplier Verification",
    body: "Shortlisted suppliers undergo documented due diligence: business-licence review, capacity assessment, trade-record analysis and, where required, factory-audit coordination.",
  },
  {
    n: "05",
    title: "Price Negotiation & Benchmarking",
    body: "RFQs are issued to qualified suppliers and benchmarked across a minimum of three factories. We negotiate directly on your behalf, targeting factory-direct pricing.",
  },
  {
    n: "06",
    title: "Sample Coordination & Approval",
    body: "Samples are requested, tracked and reviewed against your specifications. Production is confirmed only after sample approval is received in writing.",
  },
  {
    n: "07",
    title: "Order Management & Production Tracking",
    body: "Purchase orders are documented and confirmed. Production milestones are followed up directly with the supplier, with structured status updates throughout.",
  },
  {
    n: "08",
    title: "Pre-Shipment Inspection & Dispatch",
    body: "A third-party pre-shipment inspection is coordinated and reviewed before shipment is approved. Shipping documentation is confirmed and the order closed with a completion report.",
  },
];

export const industries = [
  { name: "Fashion & Apparel", note: "Garments, footwear, accessories, private label", icon: "shirt" },
  { name: "Home & Living", note: "Cleaning products, storage, home-improvement goods", icon: "home" },
  { name: "Consumer Electronics", note: "Electronics accessories, gadgets, power products", icon: "plug" },
  { name: "Kitchenware", note: "Cookware, appliances, kitchen tools", icon: "utensils" },
  { name: "Glassware & Ceramics", note: "Drinkware, decorative ware, ceramics", icon: "wine" },
  { name: "Bags & Luggage", note: "Travel bags, backpacks, promotional bags", icon: "briefcase" },
  { name: "Toys & Baby Products", note: "Novelty toys, educational products, infant goods", icon: "baby" },
  { name: "Industrial Components", note: "Die inserts, extrusion components, machinery parts", icon: "cog" },
  { name: "General Merchandise", note: "Ecommerce catalogue, promotional items, wholesale", icon: "package" },
];

export const clientTypes = [
  "Importers",
  "Distributors",
  "Wholesalers",
  "Retailers",
  "Ecommerce Brands",
  "Amazon Sellers",
  "Private Label Brands",
  "Manufacturers",
  "Corporate Buyers",
  "Procurement Teams",
  "SMEs",
  "Startups",
];

export const challenges = [
  {
    title: "Unverified Supplier Risk",
    problem: "Trading companies presenting as manufacturers, suppliers with no verifiable export history, or factories with misrepresented capacity.",
    response: "Documented supplier vetting using business registration, factory-audit coordination and trade-record verification before shortlisting.",
  },
  {
    title: "Overpriced Middlemen",
    problem: "Multiple layers of agents between the importer and the factory, each adding margin without adding value.",
    response: "Direct platform sourcing to access factory-direct price tiers, with price benchmarking across multiple suppliers before any order is placed.",
  },
  {
    title: "Quality Inconsistency",
    problem: "Sample quality does not match bulk production. Defects discovered only upon arrival.",
    response: "Pre-shipment inspection coordination covering 18+ on-site checkpoints — function tests, measurements, workmanship and packaging.",
  },
  {
    title: "Communication Breakdown",
    problem: "Language barriers, unclear specifications and miscommunication leading to incorrect production.",
    response: "All supplier communication managed directly, with written specification confirmations before production begins.",
  },
  {
    title: "MOQ & Negotiation Barriers",
    problem: "Importers unable to negotiate MOQs or pricing without leverage or market knowledge.",
    response: "Comparative supplier shortlisting creates negotiation leverage. Pricing benchmarks from multiple factories support informed counter-offers.",
  },
  {
    title: "No Procurement Documentation",
    problem: "Orders placed with no written agreements, PO terms or quality standards defined in advance.",
    response: "Procurement documentation — supplier agreements, PO management and quality checklists — prepared and maintained for every managed order.",
  },
  {
    title: "Time & Bandwidth Constraints",
    problem: "Procurement managers stretched across too many categories to source new products effectively.",
    response: "Full-cycle outsourcing of specific sourcing engagements — from brief to vetted supplier shortlist — frees internal resources.",
  },
  {
    title: "Supplier Dependency Risk",
    problem: "Over-reliance on a single supplier with no alternatives identified or vetted.",
    response: "Vendor-management retainers benefit from ongoing supplier diversification — backup suppliers identified and maintained in parallel.",
  },
];

export const principles = [
  {
    title: "Transparency First",
    body: "Clients receive documented evidence of supplier vetting, pricing benchmarks and quality findings — not verbal assurances.",
  },
  {
    title: "Supplier Independence",
    body: "We maintain no commercial relationship with any supplier that creates a conflict of interest with your objectives. No referral arrangements.",
  },
  {
    title: "Process Over Relationships",
    body: "Our value is not in knowing people — it is in applying a repeatable, documented procurement process to every engagement.",
  },
  {
    title: "Outcome Accountability",
    body: "We define clear deliverables before any engagement begins. Scope, timeline and output are agreed in writing.",
  },
  {
    title: "Client-Side Representation",
    body: "In every negotiation, inspection and communication with suppliers, Arrowlink acts exclusively on behalf of the buyer.",
  },
];

export const verificationTiers = [
  {
    tier: "High Risk — Do Not Engage",
    tone: "danger" as const,
    body: "No verifiable registration, export history absent, capacity inconsistent with claimed output, or recently created platform account.",
  },
  {
    tier: "Conditional — Further Due Diligence",
    tone: "warning" as const,
    body: "Trading company with verifiable factory relationships, partial documentation or limited export history. Engagement possible with defined controls.",
  },
  {
    tier: "Verified — Cleared for Engagement",
    tone: "success" as const,
    body: "Confirmed factory status, verifiable export records, consistent capacity and category alignment. Cleared for procurement with standard QC controls.",
  },
];

export const engagements = [
  {
    sector: "Consumer Goods · Canada",
    body: "Sourced and coordinated a 204-unit order of novelty toy products for a Canada-based reseller. Full order managed from supplier identification through invoicing and dispatch.",
  },
  {
    sector: "Industrial Components · UAE",
    body: "Acted as sourcing intermediary for Teflon/PTFE pasta-extrusion die inserts, connecting a UAE-based buyer with verified manufacturers across multiple SKU variants.",
  },
  {
    sector: "Home Products · Romania",
    body: "Product research, supplier sourcing and sample coordination for microfibre cleaning-cloth products targeting the Romanian consumer market, including supplier negotiation.",
  },
];

export const testimonial = {
  quote:
    "If you have tried to source it and failed, then come here for help. If you just want someone to take care of it for you, then come here for help. If you do not know where or how to source, then come here for help. If you want something but are not sure what it is, describe it and come here for help.",
  author: "Christian Hörnebrant",
  role: "Business Development Specialist · Customer-Centric Business Strategist",
  source: "Verified LinkedIn Recommendation · October 2025",
};

export const faqs = [
  {
    q: "Are you only a China sourcing company?",
    a: "No. China is our primary and deepest market, but Arrowlink sources globally based on your requirements — including Vietnam, Turkey, Europe, North America, South America and Africa. We recommend the market that best fits your product, compliance needs and cost targets.",
  },
  {
    q: "How is Arrowlink different from a sourcing agent?",
    a: "We are a procurement consultancy, not a trading company, freight forwarder or marketplace. We hold no inventory, take no supplier commissions, and act exclusively on the buyer's side. Every engagement follows a documented process and you receive written reports — not verbal assurances.",
  },
  {
    q: "What does an engagement cost?",
    a: "Entry services are transparently priced: Supplier Discovery from $300, Supplier Verification from $200 per supplier, and a Vendor Management retainer from $500/month. Strategic Sourcing, Procurement Management, audits, inspections and freight are scoped as a custom proposal after a short discovery call.",
  },
  {
    q: "How do you verify suppliers?",
    a: "Every shortlisted supplier undergoes documented verification: business registration, factory-vs-agent status, export history, capacity assessment and compliance flags. You receive a written verdict — Verified, Conditional or High-Risk — with the evidence behind it.",
  },
  {
    q: "Who handles quality inspection?",
    a: "Pre-shipment inspections are coordinated through accredited, independent third-party partners and conducted against ISO 2859-1 (AQL) standards — covering 18+ on-site checkpoints, with reports released within 24 hours of inspection.",
  },
  {
    q: "What happens after I book a consultation?",
    a: "We hold a focused discovery call about your requirement, confirm the relevant service, timeline and cost within 24 hours, and agree a written scope of work before any fee is charged. Work begins on acceptance, with progress reported in writing at every stage.",
  },
];
