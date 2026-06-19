import {
  Search,
  ShieldCheck,
  Target,
  ClipboardCheck,
  FileText,
  Handshake,
  Scale,
  Factory,
  PackageCheck,
  Ship,
  FileCheck2,
  Users,
  Rocket,
  Shirt,
  Home,
  Plug,
  Utensils,
  Wine,
  Briefcase,
  Baby,
  Cog,
  Package,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  // services
  search: Search,
  shieldCheck: ShieldCheck,
  target: Target,
  clipboardCheck: ClipboardCheck,
  fileText: FileText,
  handshake: Handshake,
  scale: Scale,
  factory: Factory,
  packageCheck: PackageCheck,
  ship: Ship,
  fileCheck: FileCheck2,
  users: Users,
  rocket: Rocket,
  // industries
  shirt: Shirt,
  home: Home,
  plug: Plug,
  utensils: Utensils,
  wine: Wine,
  briefcase: Briefcase,
  baby: Baby,
  cog: Cog,
  package: Package,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = iconMap[name] ?? Package;
  return <Cmp className={className} aria-hidden="true" />;
}
