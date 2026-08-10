import type { Metadata } from "next";
import { ArrowUpRight, Clock3, FileCheck2, Mail, MapPin, MessagesSquare, Navigation, Phone } from "lucide-react";

import { BriefForm } from "@/components/forms/brief-form";
import { PageHero } from "@/components/ui/page-hero";
import { SocialMark } from "@/components/ui/social-mark";
import { contactDetails } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Corvex Steel Wires for perimeter products, project coordination, quality documentation, order support, and technical enquiries.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Corvex Steel Wires", description: "Start a clear conversation about your perimeter project.", url: "/contact" },
};

export default function ContactPage() {
  const encodedAddress = encodeURIComponent(contactDetails.address);
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  const cards = [
    { icon: MessagesSquare, title: "Project enquiries", copy: "Products, quantities, site context, programmes, and commercial coordination." },
    { icon: FileCheck2, title: "Technical records", copy: "Product data, inspection requirements, traceability, and document planning." },
    { icon: Clock3, title: "Business hours", copy: `${contactDetails.hours}. Project responses are prioritised by urgency and information quality.` },
  ];

  return <>
    <PageHero eyebrow="Contact" title="Start with context." accent="Leave with clarity." copy="Tell us what the site needs, where the project stands, and which decisions remain open." />

    <section className="bg-paper-50 py-20 md:py-28">
      <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow text-signal-600">Route your request</p>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-.05em] md:text-5xl">Useful answers begin with useful inputs.</h2>
          <div className="mt-9 divide-y divide-ink-950/15">
            {cards.map((card) => <div key={card.title} className="flex gap-5 py-6"><card.icon aria-hidden="true" className="shrink-0 text-signal-600" size={24} /><div><h3 className="font-semibold">{card.title}</h3><p className="mt-2 text-sm leading-6 text-slate-700">{card.copy}</p></div></div>)}
          </div>
          <div className="mt-8 rounded-2xl bg-mist-100 p-6">
            <span className="inline-flex rounded-full bg-signal-200 px-3 py-1 font-mono text-[.65rem] font-semibold uppercase tracking-[.12em] text-ink-950">Temporary details</span>
            <div className="mt-5 space-y-4">
              <a className="flex items-start gap-3 text-sm font-semibold hover:text-signal-600" href={contactDetails.phone.href}><Phone aria-hidden="true" className="mt-0.5 shrink-0 text-signal-600" size={19}/>{contactDetails.phone.label}</a>
              <a className="flex items-start gap-3 break-all text-sm font-semibold hover:text-signal-600" href={contactDetails.email.href}><Mail aria-hidden="true" className="mt-0.5 shrink-0 text-signal-600" size={19}/>{contactDetails.email.label}</a>
              <p className="flex items-start gap-3 text-sm leading-6 text-slate-700"><MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-signal-600" size={19}/>{contactDetails.address}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">{contactDetails.socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={`${social.label}: ${social.handle}`} className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-950/10 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-signal-500 hover:text-signal-600"><SocialMark platform={social.label}/></a>)}</div>
            <p className="mt-5 text-xs leading-5 text-slate-500"> <code></code></p>
          </div>
        </div>
        <BriefForm mode="contact" />
      </div>
    </section>

    <section className="bg-mist-100 py-16 md:py-20">
      <div className="container-shell grid overflow-hidden rounded-3xl border border-ink-950/10 bg-white shadow-[0_24px_70px_rgba(8,17,28,.09)] lg:grid-cols-[.72fr_1.28fr]">
        <div className="relative flex flex-col justify-between overflow-hidden bg-ink-950 p-7 text-white md:p-10 lg:min-h-[30rem]">
          <div className="industrial-grid absolute inset-0 opacity-45" aria-hidden="true" />
          <div className="relative">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/[.06] text-signal-500 backdrop-blur"><MapPin aria-hidden="true" size={23}/></span>
            <p className="eyebrow mt-10 text-signal-500">Find our office</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-.04em] md:text-4xl">Plan your visit with confidence.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-steel-300">Review the area, confirm your route, and open turn-by-turn directions before visiting.</p>
          </div>
          <div className="relative mt-10 border-t border-white/15 pt-6">
            <p className="text-sm leading-6 text-steel-300">{contactDetails.address}</p>
            <a className="button button-primary mt-6 w-full sm:w-auto" href={directionsUrl} target="_blank" rel="noreferrer">Get directions <Navigation aria-hidden="true" size={17}/></a>
          </div>
        </div>

        <div className="group relative min-h-[23rem] overflow-hidden bg-mist-100 sm:min-h-[27rem] lg:min-h-[30rem]">
          <iframe title="Map showing the Corvex Steel Wires office location" src={mapEmbedUrl} className="absolute inset-0 h-full w-full border-0 transition-opacity duration-300 group-hover:opacity-95" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink-950/35 to-transparent" aria-hidden="true" />
          <a className="absolute bottom-4 right-4 inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/50 bg-white/95 px-4 text-sm font-semibold text-ink-950 shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:bg-white sm:bottom-5 sm:right-5" href={directionsUrl} target="_blank" rel="noreferrer">Open in Maps <ArrowUpRight aria-hidden="true" size={17}/></a>
        </div>
      </div>
      {/* <p className="container-shell mt-4 text-xs leading-5 text-slate-500">The map currently uses the temporary office address and will update automatically when the confirmed details are added.</p> */}
    </section>
  </>;
}
