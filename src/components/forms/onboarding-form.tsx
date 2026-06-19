"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Loader2,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Label,
  Input,
  Textarea,
  Select,
  FieldError,
  FieldGroup,
} from "@/components/ui/form-fields";
import { cn } from "@/lib/utils";

/* ───────────────────────── schema ───────────────────────── */
const schema = z.object({
  // Step 1 — company
  company: z.string().min(2, "Company name is required"),
  contact: z.string().min(2, "Contact name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  country: z.string().min(2, "Country is required"),
  website: z.string().optional(),
  businessType: z.string().optional(),
  industry: z.string().optional(),
  // Step 2 — product & requirement
  productName: z.string().min(2, "Product name is required"),
  productCategory: z.string().optional(),
  productDescription: z.string().min(10, "A short description helps us scope accurately"),
  productType: z.string().optional(),
  orderQuantity: z.string().optional(),
  targetMarket: z.string().optional(),
  urgency: z.string().optional(),
  // Step 3 — budget & specs
  targetUnitCost: z.string().optional(),
  totalBudget: z.string().optional(),
  currency: z.string().optional(),
  incoterm: z.string().optional(),
  certifications: z.string().optional(),
  // Step 4 — logistics, services & notes
  destination: z.string().optional(),
  shippingMethod: z.string().optional(),
  services: z.array(z.string()).optional(),
  sourcingMarket: z.string().optional(),
  notes: z.string().optional(),
  declaration: z.literal(true, {
    errorMap: () => ({ message: "Please confirm to submit" }),
  }),
  hp: z.string().max(0).optional(), // honeypot
});

type FormValues = z.infer<typeof schema>;

const steps = [
  { id: "company", title: "Your Company", fields: ["company", "contact", "email", "country"] as const },
  { id: "product", title: "Product & Requirement", fields: ["productName", "productDescription"] as const },
  { id: "budget", title: "Budget & Specifications", fields: [] as const },
  { id: "services", title: "Logistics & Services", fields: ["declaration"] as const },
];

const serviceOptions = [
  "Supplier Discovery",
  "Supplier Verification",
  "Strategic Sourcing",
  "Price Negotiation",
  "Procurement Management",
  "Factory Audit Coordination",
  "Quality Inspection",
  "Freight Coordination",
  "Vendor Management",
];

export function OnboardingForm() {
  const [step, setStep] = React.useState(0);
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { services: [], currency: "USD" },
    mode: "onTouched",
  });

  const selectedServices = watch("services") || [];

  function toggleService(name: string) {
    const next = selectedServices.includes(name)
      ? selectedServices.filter((s) => s !== name)
      : [...selectedServices, name];
    setValue("services", next, { shouldValidate: false });
  }

  async function next() {
    const valid = await trigger(steps[step].fields as unknown as (keyof FormValues)[]);
    if (valid) setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  async function onSubmit(values: FormValues) {
    setStatus("idle");
    const { company, contact, email, phone, country, ...rest } = values;
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "onboarding",
          name: contact,
          email,
          company,
          phone,
          country,
          service: (values.services || []).join(", "),
          message: values.productDescription,
          details: rest,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-10 text-center">
        <CheckCircle2 className="mx-auto size-14 text-emerald-500" />
        <h3 className="mt-5 text-2xl">Brief received — thank you</h3>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          We acknowledge receipt within one working day. If anything needs
          clarification we&apos;ll reach out, and your customised sourcing
          proposal will follow within 3–5 working days of a complete brief.
        </p>
        <div className="mt-7 flex justify-center gap-3">
          <Button asChild variant="gold">
            <a href="/book">Book a discovery call</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card sm:p-8">
      {/* Stepper */}
      <ol className="mb-8 grid grid-cols-4 gap-2">
        {steps.map((s, i) => (
          <li key={s.id} className="flex flex-col gap-2">
            <span
              className={cn(
                "h-1.5 rounded-full transition-colors",
                i <= step ? "bg-gold-500" : "bg-ink-100",
              )}
            />
            <span
              className={cn(
                "flex items-center gap-1.5 text-xs font-medium",
                i <= step ? "text-ink-900" : "text-muted-foreground",
              )}
            >
              <span
                className={cn(
                  "grid size-5 shrink-0 place-items-center rounded-full text-[0.65rem]",
                  i < step
                    ? "bg-gold-500 text-ink-900"
                    : i === step
                      ? "bg-ink-900 text-white"
                      : "bg-ink-100 text-muted-foreground",
                )}
              >
                {i < step ? <Check className="size-3" /> : i + 1}
              </span>
              <span className="hidden sm:inline">{s.title}</span>
            </span>
          </li>
        ))}
      </ol>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Step 1 */}
        {step === 0 && (
          <div className="grid gap-5 sm:grid-cols-2">
            <FieldGroup>
              <Label htmlFor="company" required>Company name</Label>
              <Input id="company" {...register("company")} />
              <FieldError>{errors.company?.message}</FieldError>
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="contact" required>Contact person</Label>
              <Input id="contact" {...register("contact")} />
              <FieldError>{errors.contact?.message}</FieldError>
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="email" required>Email address</Label>
              <Input id="email" type="email" {...register("email")} />
              <FieldError>{errors.email?.message}</FieldError>
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="phone">Phone / WhatsApp</Label>
              <Input id="phone" {...register("phone")} />
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="country" required>Country</Label>
              <Input id="country" {...register("country")} />
              <FieldError>{errors.country?.message}</FieldError>
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="website">Company website</Label>
              <Input id="website" {...register("website")} />
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="businessType">Business type</Label>
              <Select id="businessType" defaultValue="" {...register("businessType")}>
                <option value="" disabled>Select…</option>
                {["Importer", "Distributor", "Wholesaler", "Retailer", "Ecommerce / Amazon", "Brand owner", "Manufacturer", "Trading company", "Other"].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </Select>
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="industry">Industry / sector</Label>
              <Input id="industry" {...register("industry")} />
            </FieldGroup>
          </div>
        )}

        {/* Step 2 */}
        {step === 1 && (
          <div className="grid gap-5 sm:grid-cols-2">
            <FieldGroup>
              <Label htmlFor="productName" required>Product name</Label>
              <Input id="productName" {...register("productName")} />
              <FieldError>{errors.productName?.message}</FieldError>
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="productCategory">Product category</Label>
              <Input id="productCategory" {...register("productCategory")} />
            </FieldGroup>
            <FieldGroup className="sm:col-span-2">
              <Label htmlFor="productDescription" required>Product description</Label>
              <Textarea
                id="productDescription"
                rows={4}
                placeholder="Describe the product, key features, materials and any reference links…"
                {...register("productDescription")}
              />
              <FieldError>{errors.productDescription?.message}</FieldError>
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="productType">Product type</Label>
              <Select id="productType" defaultValue="" {...register("productType")}>
                <option value="" disabled>Select…</option>
                {["Existing product", "New product", "Private label", "White label", "Custom brand", "Unbranded"].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </Select>
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="orderQuantity">Initial order quantity</Label>
              <Select id="orderQuantity" defaultValue="" {...register("orderQuantity")}>
                <option value="" disabled>Select…</option>
                {["<100", "100–500", "500–1,000", "1,000–5,000", "5,000+", "Flexible"].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </Select>
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="targetMarket">Target / destination market</Label>
              <Input id="targetMarket" {...register("targetMarket")} />
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="urgency">Order urgency</Label>
              <Select id="urgency" defaultValue="" {...register("urgency")}>
                <option value="" disabled>Select…</option>
                {["Immediate (within 4 weeks)", "Standard (4–12 weeks)", "Planning stage (3+ months)", "Ongoing / recurring"].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </Select>
            </FieldGroup>
          </div>
        )}

        {/* Step 3 */}
        {step === 2 && (
          <div className="grid gap-5 sm:grid-cols-2">
            <FieldGroup>
              <Label htmlFor="targetUnitCost">Target unit cost</Label>
              <Input id="targetUnitCost" placeholder="e.g. $2.50" {...register("targetUnitCost")} />
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="totalBudget">Total budget range</Label>
              <Input id="totalBudget" placeholder="e.g. $20,000–$50,000" {...register("totalBudget")} />
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="currency">Preferred currency</Label>
              <Select id="currency" {...register("currency")}>
                {["USD", "EUR", "GBP", "Other"].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </Select>
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="incoterm">Pricing basis (Incoterm)</Label>
              <Select id="incoterm" defaultValue="" {...register("incoterm")}>
                <option value="" disabled>Select…</option>
                {["EXW — Ex Works", "FOB — Free on Board", "CIF — Cost Insurance Freight", "DDP — Delivered Duty Paid", "Not sure / advise"].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </Select>
            </FieldGroup>
            <FieldGroup className="sm:col-span-2">
              <Label htmlFor="certifications">Compliance & certifications required</Label>
              <Input
                id="certifications"
                placeholder="e.g. CE, FCC, UKCA, REACH, RoHS, ISO 9001, EN71…"
                {...register("certifications")}
              />
            </FieldGroup>
          </div>
        )}

        {/* Step 4 */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <FieldGroup>
                <Label htmlFor="destination">Destination country / port</Label>
                <Input id="destination" {...register("destination")} />
              </FieldGroup>
              <FieldGroup>
                <Label htmlFor="shippingMethod">Preferred shipping method</Label>
                <Select id="shippingMethod" defaultValue="" {...register("shippingMethod")}>
                  <option value="" disabled>Select…</option>
                  {["Sea freight (FCL)", "Sea freight (LCL)", "Air freight", "Express courier", "Rail", "Advise best option"].map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </Select>
              </FieldGroup>
              <FieldGroup>
                <Label htmlFor="sourcingMarket">Preferred sourcing market</Label>
                <Select id="sourcingMarket" defaultValue="" {...register("sourcingMarket")}>
                  <option value="" disabled>Select…</option>
                  {["China", "Vietnam", "Turkey", "Europe", "North America", "South America", "Africa", "No preference / advise"].map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </Select>
              </FieldGroup>
            </div>

            <div>
              <Label>Services required</Label>
              <div className="mt-2 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {serviceOptions.map((s) => {
                  const active = selectedServices.includes(s);
                  return (
                    <button
                      type="button"
                      key={s}
                      onClick={() => toggleService(s)}
                      className={cn(
                        "flex items-center gap-2.5 rounded-lg border px-3.5 py-2.5 text-left text-sm transition-colors",
                        active
                          ? "border-gold-300 bg-gold-50 text-ink-900"
                          : "border-ink-100 bg-white text-ink-700 hover:border-ink-200",
                      )}
                    >
                      <span
                        className={cn(
                          "grid size-4 shrink-0 place-items-center rounded border",
                          active ? "border-gold-500 bg-gold-500" : "border-ink-300",
                        )}
                      >
                        {active && <Check className="size-3 text-ink-900" />}
                      </span>
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>

            <FieldGroup>
              <Label htmlFor="notes">Additional notes & project context</Label>
              <Textarea
                id="notes"
                rows={4}
                placeholder="Any constraints, priorities, supplier preferences or background that helps us prepare an accurate proposal…"
                {...register("notes")}
              />
            </FieldGroup>

            <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-ink-100 bg-paper p-4">
              <input
                type="checkbox"
                className="mt-0.5 size-4 accent-gold-500"
                {...register("declaration")}
              />
              <span className="text-sm text-ink-700">
                I confirm the information provided is accurate to the best of my
                knowledge and authorise Arrowlink Global Procurement Ltd to use it
                to prepare a sourcing proposal. I understand all information is
                treated in confidence.
              </span>
            </label>
            <FieldError>{errors.declaration?.message as string}</FieldError>
          </div>
        )}

        {/* Honeypot */}
        <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden {...register("hp")} />

        {status === "error" && (
          <p className="mt-5 rounded-md bg-red-50 px-4 py-2.5 text-sm text-red-700">
            Something went wrong submitting your brief. Please email{" "}
            <a href="mailto:info@arrowlinkprocurement.com" className="font-semibold underline">
              info@arrowlinkprocurement.com
            </a>
            .
          </p>
        )}

        {/* Nav */}
        <div className="mt-8 flex items-center justify-between gap-3 border-t border-ink-100 pt-6">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setStep((s) => Math.max(s - 1, 0))}
            disabled={step === 0}
            className={cn(step === 0 && "invisible")}
          >
            <ArrowLeft className="size-4" /> Back
          </Button>

          {step < steps.length - 1 ? (
            <Button type="button" variant="gold" onClick={next}>
              Continue <ArrowRight className="size-4" />
            </Button>
          ) : (
            <Button type="submit" variant="gold" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Submitting…
                </>
              ) : (
                <>
                  <Send className="size-4" /> Submit brief
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
