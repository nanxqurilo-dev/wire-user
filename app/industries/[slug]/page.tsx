import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, ArrowRight, ChevronRight, ClipboardCheck, Compass,
  Layers3, Map, ShieldCheck, Wrench,
} from "lucide-react";

import { IndustryCard } from "@/components/industry/industry-card";
import { industryIcons } from "@/components/industry/industry-icons";
import { ProductCard } from "@/components/product/product-card";
import { getIndustry, industries } from "@/content/industries";
import { getProduct } from "@/content/products";
import { Reveal } from "@/sections/home/home-interactions";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: `${industry.name} Perimeter Systems`, description: industry.summary,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: { title: `${industry.name} Perimeter Systems`, description: industry.summary, url: `/industries/${industry.slug}`, images: [{ url: industry.image, alt: industry.alt }] },
  };
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  const Icon = industryIcons[industry.icon];
  const recommended = industry.recommendedProducts.map(getProduct).filter((product) => product !== undefined);
  const related = industry.related.map(getIndustry).filter((item) => item !== undefined);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Industries", item: `${baseUrl}/industries` },
      { "@type": "ListItem", position: 3, name: industry.name, item: `${baseUrl}/industries/${industry.slug}` },
    ],
  };
  const pageJsonLd = { "@context": "https://schema.org", "@type": "WebPage", name: `${industry.name} Perimeter Systems`, description: industry.summary, url: `${baseUrl}/industries/${industry.slug}`, primaryImageOfPage: { "@type": "ImageObject", url: `${baseUrl}${industry.image}` }, about: { "@type": "Thing", name: industry.name } };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd).replace(/</g, "\\u003c") }} />

      <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-ink-950 text-white">
        <Image src={industry.image} alt={industry.alt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#08111c_0%,rgba(8,17,28,.9)_40%,rgba(8,17,28,.22)_78%),linear-gradient(to_top,#08111c_0%,transparent_45%)]" />
        <div className="industrial-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="container-shell relative flex min-h-[calc(100svh-5rem)] flex-col pb-10 pt-8">
          <nav className="flex items-center gap-2 overflow-x-auto whitespace-nowrap text-xs text-steel-300" aria-label="Breadcrumb"><Link className="hover:text-white" href="/">Home</Link><ChevronRight aria-hidden="true" size={13}/><Link className="hover:text-white" href="/industries">Industries</Link><ChevronRight aria-hidden="true" size={13}/><span aria-current="page" className="text-white">{industry.name}</span></nav>
          <div className="my-auto max-w-5xl py-20"><Reveal><span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[.06] backdrop-blur"><Icon aria-hidden="true" className="text-signal-500" size={27}/></span><p className="eyebrow mt-8 text-signal-500">{industry.eyebrow}</p><h1 className="mt-6 text-[clamp(3.5rem,7vw,7.5rem)] font-semibold leading-[.92] tracking-[-.06em] text-balance">{industry.name}</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-steel-300 md:text-xl">{industry.summary}</p><div className="mt-10 flex flex-wrap gap-3"><a className="button button-primary" href="#systems">Explore suitable systems <ArrowRight aria-hidden="true" size={17}/></a><Link className="button button-inverse" href="/request-a-quote">Discuss this environment</Link></div></Reveal></div>
          <p className="max-w-3xl border-l-2 border-signal-500 pl-6 text-lg font-medium leading-7 md:text-xl">{industry.statement}</p>
        </div>
      </section>

      <section className="bg-paper-50 py-20 md:py-32">
        <div className="container-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-24"><Reveal><p className="eyebrow text-signal-600">Operating context</p><Compass aria-hidden="true" className="mt-8 text-signal-600" size={36}/></Reveal><Reveal delay={.08}><h2 className="text-4xl font-semibold leading-[1.08] tracking-[-.05em] md:text-6xl">Design from the environment inward.</h2><p className="mt-8 max-w-4xl text-xl leading-9 text-slate-700">{industry.context}</p></Reveal></div>
      </section>

      <section className="bg-mist-100 py-20 md:py-28">
        <div className="container-shell"><Reveal className="grid gap-8 md:grid-cols-[1fr_.7fr] md:items-end"><div><p className="eyebrow text-signal-600">What the system must resolve</p><h2 className="mt-6 text-4xl font-semibold tracking-[-.05em] md:text-6xl">Challenges beyond the fence line.</h2></div><p className="max-w-lg leading-7 text-slate-700">These are design conversations, not universal claims. Project-specific risk and engineering review remain essential.</p></Reveal><div className="mt-14 grid gap-4 lg:grid-cols-3">{industry.challenges.map((challenge,index)=><Reveal key={challenge.title} delay={index*.06} className="group min-h-72 rounded-2xl border border-ink-950/10 bg-white p-8 transition-all hover:-translate-y-1 hover:border-signal-500/40 hover:shadow-[0_18px_50px_rgba(8,17,28,.08)]"><span className="font-mono text-xs text-signal-600">0{index+1}</span><h3 className="mt-16 text-2xl font-semibold tracking-tight">{challenge.title}</h3><p className="mt-4 leading-7 text-slate-700">{challenge.copy}</p></Reveal>)}</div></div>
      </section>

      <section className="bg-ink-950 py-20 text-white md:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24"><Reveal><p className="eyebrow text-signal-500">Priority matrix</p><h2 className="mt-6 text-4xl font-semibold tracking-[-.05em] md:text-5xl">Keep the critical decisions visible.</h2><p className="mt-5 max-w-sm text-sm leading-6 text-steel-300">Priorities should be ranked and translated into measurable project requirements.</p></Reveal><Reveal delay={.08} className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">{industry.priorities.map((priority,index)=><div key={priority} className="flex items-center gap-4 bg-navy-900 p-6"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 font-mono text-xs text-signal-500">{index+1}</span><p className="text-sm font-semibold">{priority}</p></div>)}</Reveal></div>
      </section>

      <section className="bg-paper-50 py-20 md:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24"><Reveal><p className="eyebrow text-signal-600">Inputs before specification</p><h2 className="mt-6 text-4xl font-semibold tracking-[-.05em] md:text-5xl">A better brief makes a better boundary.</h2><p className="mt-5 max-w-sm text-sm leading-6 text-slate-700">Capture these inputs early enough to influence civil work, access strategy, and system selection.</p></Reveal><Reveal delay={.08}><dl className="border-t border-ink-950/15">{industry.designInputs.map((item,index)=><div key={item.label} className="grid gap-3 border-b border-ink-950/15 py-6 sm:grid-cols-[3rem_.55fr_1fr]"><span className="font-mono text-xs text-signal-600">0{index+1}</span><dt className="font-semibold">{item.label}</dt><dd className="text-sm leading-6 text-slate-700">{item.value}</dd></div>)}</dl></Reveal></div>
      </section>

      <section id="systems" className="scroll-mt-28 bg-mist-100 py-20 md:py-28">
        <div className="container-shell"><Reveal className="grid gap-8 md:grid-cols-[1fr_.65fr] md:items-end"><div><p className="eyebrow text-signal-600">Relevant Corvex systems</p><h2 className="mt-6 text-4xl font-semibold tracking-[-.05em] md:text-6xl">A starting point, not a prescription.</h2></div><p className="max-w-lg leading-7 text-slate-700">These families commonly support the priorities above. Final selection depends on the approved project inputs and complete system design.</p></Reveal><div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{recommended.map((product)=><ProductCard key={product.slug} product={product}/>)}</div></div>
      </section>

      <section className="bg-paper-50 py-20 md:py-28">
        <div className="container-shell"><Reveal><p className="eyebrow text-signal-600">Project path</p><h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-.05em] md:text-6xl">From site intelligence to controlled handover.</h2></Reveal><div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{[[Map,"Read the site","Map alignment, interfaces, movement, exposure, and constraints."],[Layers3,"Set the strategy","Define boundary layers, access, deterrence, visibility, and response."],[Wrench,"Engineer details","Coordinate products, structures, gates, civil work, and installation."],[ClipboardCheck,"Release clearly","Confirm configuration, evidence, identification, and dispatch sequence."]].map(([StepIcon,title,copy],index)=>{const PathIcon=StepIcon as typeof Map;return <Reveal key={title as string} delay={index*.05} className="rounded-2xl border border-ink-950/10 p-7"><span className="font-mono text-xs text-signal-600">0{index+1}</span><PathIcon aria-hidden="true" className="mt-10 text-signal-600" size={28}/><h3 className="mt-7 text-xl font-semibold">{title as string}</h3><p className="mt-3 text-sm leading-6 text-slate-700">{copy as string}</p></Reveal>})}</div></div>
      </section>

      <section className="bg-navy-900 py-20 text-white md:py-28"><div className="container-shell grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><Reveal><ShieldCheck aria-hidden="true" className="text-signal-500" size={34}/><p className="eyebrow mt-8 text-signal-500">Plan the full perimeter</p><h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-.055em] text-balance md:text-7xl">Make every interface part of the brief.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-steel-300">Share site plans, operating needs, risk priorities, governing standards, and project timing to start a useful technical review.</p></Reveal><Reveal delay={.1}><Link className="button button-primary" href="/request-a-quote">Discuss {industry.name.toLowerCase()} <ArrowRight aria-hidden="true" size={18}/></Link></Reveal></div></section>

      <section className="bg-paper-50 py-20 md:py-28"><div className="container-shell"><div className="flex items-end justify-between gap-6"><div><p className="eyebrow text-signal-600">Adjacent environments</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] md:text-5xl">Related industry thinking.</h2></div><Link className="hidden items-center gap-2 text-sm font-semibold sm:inline-flex" href="/industries">All industries <ArrowRight aria-hidden="true" size={17}/></Link></div><div className="mt-12 grid gap-4 md:grid-cols-3">{related.map((item)=><IndustryCard key={item.slug} industry={item}/>)}</div><Link className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-signal-600" href="/industries"><ArrowLeft aria-hidden="true" size={16}/> Return to all industries</Link></div></section>
    </>
  );
}
