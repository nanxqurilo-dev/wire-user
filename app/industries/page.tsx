import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Layers3, ScanLine } from "lucide-react";

import { IndustryCard } from "@/components/industry/industry-card";
import { industries } from "@/content/industries";
import { Reveal } from "@/sections/home/home-interactions";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Explore perimeter protection strategies for critical infrastructure, energy, transport, manufacturing, data centers, institutions, agriculture, and commercial sites.",
  alternates: { canonical: "/industries" },
  openGraph: { title: "Perimeter Systems by Industry", description: "Site-specific thinking for demanding industrial and infrastructure environments.", url: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 pb-20 pt-24 text-white md:pb-28 md:pt-36">
        <div className="industrial-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="container-shell relative"><Reveal><p className="eyebrow text-signal-500">Industries we serve</p><h1 className="mt-7 max-w-6xl text-5xl font-semibold leading-[.96] tracking-[-0.06em] text-balance md:text-8xl">The site changes.<br /><span className="text-steel-300">The thinking should too.</span></h1></Reveal><Reveal delay={.08} className="mt-12 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-[1fr_auto] md:items-end"><p className="max-w-2xl text-lg leading-8 text-steel-300">Perimeter performance depends on what happens behind, beside, and through the boundary. Explore how operating context reshapes system decisions.</p><Link className="button button-primary" href="/request-a-quote">Discuss your environment <ArrowRight aria-hidden="true" size={17} /></Link></Reveal></div>
      </section>

      <section className="bg-paper-50 py-20 md:py-32">
        <div className="container-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24"><Reveal><p className="eyebrow text-signal-600">Context before catalog</p><Compass aria-hidden="true" className="mt-8 text-signal-600" size={36} /></Reveal><Reveal delay={.08}><h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.05em] md:text-6xl">A product is only one decision inside a working perimeter.</h2><div className="mt-10 grid gap-8 border-t border-ink-950/15 pt-8 md:grid-cols-2"><p className="leading-7 text-slate-700">Site risk, terrain, movement, exposure, public interface, maintenance, and response all influence the right combination of boundary, structure, access, and deterrence.</p><p className="leading-7 text-slate-700">Our industry approach makes those inputs visible so project teams can ask better questions before dimensions and quantities become fixed.</p></div></Reveal></div>
      </section>

      <section className="bg-mist-100 py-20 md:py-28">
        <div className="container-shell"><Reveal className="grid gap-7 md:grid-cols-[1fr_.65fr] md:items-end"><div><p className="eyebrow text-signal-600">Explore environments</p><h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">Eight operating contexts. One disciplined method.</h2></div><p className="max-w-lg leading-7 text-slate-700">Each guide connects common site challenges to design inputs and suitable Corvex system families.</p></Reveal><div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{industries.map((industry, index) => <Reveal key={industry.slug} delay={(index % 3) * .05} className={index === 0 ? "md:col-span-2" : ""}><IndustryCard industry={industry} featured={index === 0} /></Reveal>)}</div></div>
      </section>

      <section className="bg-navy-900 py-20 text-white md:py-28">
        <div className="container-shell"><Reveal><p className="eyebrow text-signal-500">A repeatable decision framework</p><h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl">Read the environment. Define the layers. Resolve the interfaces.</h2></Reveal><div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-[0_24px_70px_rgba(4,12,20,.16)] md:grid-cols-3">{[[Compass,"Read the site","Terrain, exposure, operations, users, risk, and neighboring context."],[Layers3,"Set the layers","Boundary definition, delay, detection readiness, access, and response."],[ScanLine,"Resolve the details","Posts, fixings, gates, drainage, civil work, finishes, and documentation."]].map(([Icon,title,copy],index)=>{const StepIcon=Icon as typeof Compass;return <Reveal key={title as string} delay={index*.06} className="bg-white/[0.035] p-8 transition-colors hover:bg-white/[0.065] md:p-10"><span className="font-mono text-xs text-signal-500">0{index+1}</span><StepIcon aria-hidden="true" className="mt-10 text-steel-300" size={30}/><h3 className="mt-8 text-2xl font-semibold">{title as string}</h3><p className="mt-4 text-sm leading-6 text-steel-300">{copy as string}</p></Reveal>})}</div></div>
      </section>

      <section className="relative overflow-hidden bg-signal-600 py-24 text-white md:py-32"><div className="container-shell relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><Reveal><p className="eyebrow text-white/70">Your site may cross categories</p><h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-balance md:text-7xl">Bring us the operating reality.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">Complex sites rarely fit one label. A project brief helps connect the relevant risks, users, interfaces, and system choices.</p></Reveal><Reveal delay={.1}><Link className="button border-white bg-white text-ink-950 hover:bg-paper-50" href="/request-a-quote">Start a project brief <ArrowRight aria-hidden="true" size={18}/></Link></Reveal></div></section>
    </>
  );
}
