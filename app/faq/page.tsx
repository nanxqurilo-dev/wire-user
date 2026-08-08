import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, FileCheck2, MessageSquareText, ShieldCheck } from "lucide-react";
import { faqs } from "@/content/faqs";
import { Reveal } from "@/sections/home/home-interactions";
import { FaqBrowser } from "@/sections/faq/faq-browser";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about Corvex perimeter products, specifications, ordering, delivery, installation coordination, quality documentation, and lifecycle support.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Frequently Asked Questions | Corvex Steel Wires",
    description: "Practical answers for specifying, procuring, receiving, and maintaining Corvex perimeter systems.",
    url: "/faq",
  },
};

export default function FaqPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "FAQ", item: `${baseUrl}/faq` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />

      <section className="relative isolate overflow-hidden bg-ink-950 pb-20 pt-24 text-white md:pb-28 md:pt-36">
        <div className="industrial-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="absolute -right-32 top-12 h-80 w-80 rounded-full border border-signal-500/20" aria-hidden="true" />
        <div className="container-shell relative">
          <Reveal>
            <p className="eyebrow text-signal-500">Knowledge centre / FAQ</p>
            <h1 className="mt-7 max-w-6xl text-5xl font-semibold leading-[.94] tracking-[-.06em] text-balance md:text-8xl">Clear answers.<br /><span className="text-steel-300">Better project decisions.</span></h1>
          </Reveal>
          <Reveal delay={0.08} className="mt-12 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-2xl text-lg leading-8 text-steel-300">Find practical guidance for selecting, specifying, ordering, inspecting, installing, and maintaining engineered perimeter systems.</p>
            <a href="#answers" className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[.14em] text-steel-300"><ArrowDown aria-hidden="true" className="text-signal-500" size={18} /> Find an answer</a>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-50 py-12 md:py-16">
        <div className="container-shell grid gap-px overflow-hidden rounded-2xl border border-ink-950/10 bg-ink-950/10 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Evidence-aware", copy: "Answers distinguish general guidance from project-specific approval." },
            { icon: FileCheck2, title: "Built for project teams", copy: "Structured around specification, procurement, delivery, and inspection." },
            { icon: MessageSquareText, title: "A route to clarity", copy: "Complex or site-specific questions can move directly into technical review." },
          ].map((item) => (
            <div key={item.title} className="bg-white p-7 md:p-8"><item.icon aria-hidden="true" className="text-signal-600" size={26} /><h2 className="mt-5 text-lg font-semibold">{item.title}</h2><p className="mt-2 text-sm leading-6 text-slate-700">{item.copy}</p></div>
          ))}
        </div>
      </section>

      <section id="answers" className="scroll-mt-24 bg-mist-100 py-20 md:py-28">
        <div className="container-shell">
          <Reveal className="mb-12 max-w-3xl"><p className="eyebrow text-signal-600">Answers by topic</p><h2 className="mt-6 text-4xl font-semibold tracking-[-.05em] md:text-6xl">Start with the question.</h2><p className="mt-6 text-lg leading-8 text-slate-700">Search all answers or narrow the library by the stage of your project.</p></Reveal>
          <FaqBrowser />
        </div>
      </section>

      <section className="relative overflow-hidden bg-signal-600 py-24 text-white md:py-32">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal><p className="eyebrow text-white/70">Still unresolved?</p><h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-.055em] text-balance md:text-7xl">Bring us the project question.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">Share the location, drawings, operating conditions, quantities, programme, and required evidence for a more useful response.</p></Reveal>
          <Reveal delay={0.1} className="flex flex-wrap gap-3"><Link className="button border-white bg-white text-ink-950 hover:bg-paper-50" href="/contact">Contact the team <ArrowRight aria-hidden="true" size={18} /></Link><Link className="button button-inverse" href="/request-a-quote">Request a quote</Link></Reveal>
        </div>
      </section>
    </>
  );
}
