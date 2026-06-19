"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Label,
  Input,
  Textarea,
  Select,
  FieldError,
  FieldGroup,
} from "@/components/ui/form-fields";
import { services } from "@/lib/services";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  phone: z.string().optional(),
  country: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Tell us a little about your requirement"),
  website: z.string().max(0).optional(), // honeypot
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setStatus("idle");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, type: "contact" }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-8 text-center">
        <CheckCircle2 className="mx-auto size-12 text-emerald-500" />
        <h3 className="mt-4 text-xl">Message received</h3>
        <p className="mt-2 text-muted-foreground">
          Thank you. We acknowledge enquiries within one working day and will be
          in touch shortly to discuss your requirement.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-ink-100 bg-white p-7 shadow-card sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FieldGroup>
          <Label htmlFor="name" required>Full name</Label>
          <Input id="name" autoComplete="name" {...register("name")} />
          <FieldError>{errors.name?.message}</FieldError>
        </FieldGroup>
        <FieldGroup>
          <Label htmlFor="email" required>Work email</Label>
          <Input id="email" type="email" autoComplete="email" {...register("email")} />
          <FieldError>{errors.email?.message}</FieldError>
        </FieldGroup>
        <FieldGroup>
          <Label htmlFor="company">Company</Label>
          <Input id="company" autoComplete="organization" {...register("company")} />
        </FieldGroup>
        <FieldGroup>
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input id="phone" autoComplete="tel" {...register("phone")} />
        </FieldGroup>
        <FieldGroup>
          <Label htmlFor="country">Country</Label>
          <Input id="country" autoComplete="country-name" {...register("country")} />
        </FieldGroup>
        <FieldGroup>
          <Label htmlFor="service">Service of interest</Label>
          <Select id="service" defaultValue="" {...register("service")}>
            <option value="" disabled>Select a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Not sure / advise">Not sure — please advise</option>
          </Select>
        </FieldGroup>
      </div>

      <FieldGroup className="mt-5">
        <Label htmlFor="message" required>
          What do you need to source, verify or manage?
        </Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Describe your product, target market, volumes and timeline…"
          {...register("message")}
        />
        <FieldError>{errors.message?.message}</FieldError>
      </FieldGroup>

      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        {...register("website")}
      />

      {status === "error" && (
        <p className="mt-4 rounded-md bg-red-50 px-4 py-2.5 text-sm text-red-700">
          Something went wrong sending your message. Please email{" "}
          <a href="mailto:info@arrowlinkprocurement.com" className="font-semibold underline">
            info@arrowlinkprocurement.com
          </a>{" "}
          directly.
        </p>
      )}

      <Button type="submit" variant="gold" size="lg" className="mt-6 w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="size-4" /> Send message
          </>
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Your information is treated in confidence and never shared with suppliers.
      </p>
    </form>
  );
}
