import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { BriefForm } from "@/components/forms/brief-form";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = { title: "Request a Quote", description: "Prepare a structured quote request for Corvex perimeter protection products and project requirements.", alternates: { canonical: "/request-a-quote" }, robots: { index: true, follow: true } };

export default function QuotePage() {
  const inputs = ["Site and delivery location", "Perimeter length or product quantity", "Drawings or approved specification", "Material and environmental exposure", "Required inspections and documentation", "Target delivery programme"];
  return <><PageHero eyebrow="Request a quote" title="Define the requirement." accent="Engineer the response." copy="A structured brief helps us identify the right product route, missing decisions, documentation needs, and realistic programme." /><section className="bg-mist-100 py-20 md:py-28"><div className="container-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20"><div><p className="eyebrow text-signal-600">Before you begin</p><h2 className="mt-6 text-4xl font-semibold tracking-[-.05em] md:text-5xl">Six inputs make a stronger brief.</h2><ul className="mt-9 space-y-4">{inputs.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700"><CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-success-600" size={19} />{item}</li>)}</ul><p className="mt-8 border-t border-ink-950/15 pt-6 text-xs leading-5 text-slate-500">A request is not an order or engineering approval. Configuration, acceptance criteria, availability, price, and delivery are confirmed in authorised commercial documentation.</p></div><BriefForm mode="quote" /></div></section></>;
}
