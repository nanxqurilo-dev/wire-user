import type { Metadata } from "next";
import { Clock3, FileCheck2, MapPinned, MessagesSquare } from "lucide-react";
import { BriefForm } from "@/components/forms/brief-form";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = { title: "Contact", description: "Contact Corvex Steel Wires for perimeter products, project coordination, quality documentation, order support, and technical enquiries.", alternates: { canonical: "/contact" }, openGraph: { title: "Contact Corvex Steel Wires", description: "Start a clear conversation about your perimeter project.", url: "/contact" } };

export default function ContactPage() {
  const cards = [
    { icon: MessagesSquare, title: "Project enquiries", copy: "Products, quantities, site context, programmes, and commercial coordination." },
    { icon: FileCheck2, title: "Technical records", copy: "Product data, inspection requirements, traceability, and document planning." },
    { icon: Clock3, title: "Business hours", copy: "Monday–Saturday, 09:00–18:00 IST. Project responses are prioritised by urgency and information quality." },
  ];
  return <><PageHero eyebrow="Contact" title="Start with context." accent="Leave with clarity." copy="Tell us what the site needs, where the project stands, and which decisions remain open." /><section className="bg-paper-50 py-20 md:py-28"><div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div><p className="eyebrow text-signal-600">Route your request</p><h2 className="mt-6 text-4xl font-semibold tracking-[-.05em] md:text-5xl">Useful answers begin with useful inputs.</h2><div className="mt-9 divide-y divide-ink-950/15">{cards.map((card) => <div key={card.title} className="flex gap-5 py-6"><card.icon aria-hidden="true" className="shrink-0 text-signal-600" size={24} /><div><h3 className="font-semibold">{card.title}</h3><p className="mt-2 text-sm leading-6 text-slate-700">{card.copy}</p></div></div>)}</div><div className="mt-8 rounded-2xl bg-mist-100 p-6"><MapPinned aria-hidden="true" className="text-signal-600" size={25} /><h3 className="mt-4 font-semibold">Location details</h3><p className="mt-2 text-sm leading-6 text-slate-700">Registered office and dispatch locations are confirmed on authorised quotations and commercial documents, preventing travel to an outdated or unverified address.</p></div></div><BriefForm mode="contact" /></div></section></>;
}
