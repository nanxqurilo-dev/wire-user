import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Blocks, CheckCircle2, Compass, Factory,
  FlaskConical, Focus, Handshake, Layers3, Leaf, ScanLine, Sparkles,
} from "lucide-react";

import { Reveal } from "@/sections/home/home-interactions";

const principles = [
  { number: "01", title: "Clarity before complexity", copy: "We translate the site, application, and project constraints into decisions that can be understood and acted on.", icon: Focus },
  { number: "02", title: "Engineering in context", copy: "A component only performs as part of a system. Interfaces, exposure, installation, and lifecycle all matter.", icon: Layers3 },
  { number: "03", title: "Control at every handoff", copy: "Material, production, inspection, documentation, and dispatch should reinforce one agreed requirement.", icon: ScanLine },
  { number: "04", title: "Partnership with substance", copy: "Useful communication is timely, technically grounded, and honest about scope, evidence, and tradeoffs.", icon: Handshake },
];

const operatingModel = [
  { label: "Understand", title: "Begin with the operating need", copy: "Map the boundary, environment, interfaces, risk profile, and delivery constraints before selecting a configuration." },
  { label: "Engineer", title: "Turn inputs into a coherent system", copy: "Align materials, geometry, finish, structural support, hardware, documentation, and package boundaries." },
  { label: "Control", title: "Make quality part of the workflow", copy: "Define the checks that matter, capture decisions, and keep scope visible through production and release." },
  { label: "Deliver", title: "Prepare for the realities of site", copy: "Coordinate identification, packaging, sequencing, logistics, and technical information around the project plan." },
];

export function AboutPage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Corvex Steel Wires",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/brand/corvex-steel-wires-logo.png`,
    description: "Engineered steel wire, fencing, and perimeter protection systems.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }} />

      <section className="relative isolate overflow-hidden bg-ink-950 text-white">
        <div className="industrial-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="absolute right-[-12rem] top-[-14rem] h-[38rem] w-[38rem] rounded-full border border-white/10" aria-hidden="true" />
        <div className="absolute right-[-5rem] top-[-7rem] h-[24rem] w-[24rem] rounded-full border border-signal-500/20" aria-hidden="true" />
        <div className="container-shell relative pb-12 pt-24 md:pb-16 md:pt-36">
          <Reveal>
            <p className="eyebrow text-signal-500">About Corvex</p>
            <h1 className="mt-7 max-w-6xl text-[clamp(3.5rem,8vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-balance">
              Engineered for <span className="text-steel-300">strength.</span><br />Built for confidence.
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-14 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-[1fr_1fr] md:items-end">
            <p className="max-w-2xl text-lg leading-8 text-steel-300 md:text-xl">
              Corvex Steel Wires develops steel wire, fencing, and perimeter systems through disciplined engineering, controlled production, and practical project thinking.
            </p>
            <div className="flex items-center gap-3 md:justify-self-end">
              <ArrowDown aria-hidden="true" className="text-signal-500" size={18} />
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-steel-300">Discover our approach</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-50 py-20 md:py-36">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow text-signal-600">Our point of view</p>
            <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-ink-950/10 bg-white text-signal-600 shadow-[0_16px_36px_rgba(8,17,28,.07)]">
              <Compass aria-hidden="true" size={30} />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="max-w-5xl text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-balance md:text-6xl">
              A perimeter is not a line item. It is an operating system at the edge of the site.
            </h2>
            <div className="mt-10 grid gap-8 border-t border-ink-950/15 pt-8 md:grid-cols-2">
              <p className="leading-7 text-slate-700">It shapes access, visibility, movement, maintenance, and the first physical response to risk. That is why product selection cannot sit apart from site conditions and project execution.</p>
              <p className="leading-7 text-slate-700">Our role is to make those relationships clearer—connecting steel, geometry, support, finish, installation, and information into one understandable system.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist-100 py-20 md:py-32">
        <div className="container-shell">
          <SectionIntro eyebrow="How we think" title="Strong systems begin with strong principles." copy="These principles guide product decisions, project conversations, and the way Corvex builds for repeatability." />
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Reveal key={principle.title} delay={index * 0.05}>
                  <article className="group relative min-h-72 overflow-hidden rounded-2xl border border-ink-950/10 bg-paper-50 p-7 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_55px_rgba(8,17,28,.08)] md:p-9">
                    <div className="flex items-start justify-between"><span className="font-mono text-xs text-slate-500">{principle.number}</span><Icon aria-hidden="true" className="text-signal-600 transition-transform group-hover:scale-110" size={30} /></div>
                    <div className="mt-20"><h3 className="text-2xl font-semibold tracking-tight">{principle.title}</h3><p className="mt-4 max-w-lg leading-7 text-slate-700">{principle.copy}</p></div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink-950 text-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[32rem] overflow-hidden lg:min-h-[48rem]">
            <Image src="/images/home/manufacturing-floor.png" alt="Engineer reviewing precision steel mesh during production" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/15 bg-ink-950/70 p-5 backdrop-blur-md md:bottom-10 md:left-10 md:right-auto md:max-w-sm">
              <p className="eyebrow text-signal-500">Factory mindset</p><p className="mt-3 text-sm leading-6 text-steel-300">Precision is not a final inspection. It is a sequence of controlled decisions.</p>
            </div>
          </div>
          <div className="flex items-center px-6 py-16 md:px-14 lg:px-20">
            <Reveal>
              <p className="eyebrow text-signal-500">Manufacturing discipline</p>
              <h2 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-[-0.05em] md:text-6xl">Built around repeatability, not assumptions.</h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-steel-300">Our manufacturing philosophy treats inputs, machine settings, forming, joining, finishing, inspection, identification, and packaging as connected parts of product performance.</p>
              <ul className="mt-10 space-y-4 border-t border-white/15 pt-8">
                {["Clear material and product definitions", "Inspection placed where it influences outcomes", "Traceable decisions and documented release", "Packaging considered as part of delivered quality"].map((item) => <li key={item} className="flex items-center gap-3 text-sm text-steel-300"><CheckCircle2 aria-hidden="true" className="text-signal-500" size={18} />{item}</li>)}
              </ul>
              <Link className="button button-inverse mt-10" href="/manufacturing-process">Explore manufacturing <ArrowRight aria-hidden="true" size={17} /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper-50 py-20 md:py-36">
        <div className="container-shell">
          <SectionIntro eyebrow="Our operating model" title="Four connected decisions. One accountable outcome." copy="A straightforward framework keeps technical intent visible from the first conversation through delivery support." />
          <div className="mt-16 border-y border-ink-950/15">
            {operatingModel.map((step, index) => (
              <Reveal key={step.label} className="group grid gap-5 border-b border-ink-950/15 py-8 last:border-b-0 md:grid-cols-[6rem_0.8fr_1fr] md:items-start md:py-10">
                <span className="font-mono text-xs text-signal-600">0{index + 1}</span>
                <div><p className="eyebrow text-slate-500">{step.label}</p><h3 className="mt-3 text-2xl font-semibold tracking-tight transition-transform group-hover:translate-x-1">{step.title}</h3></div>
                <p className="max-w-xl leading-7 text-slate-700">{step.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-20 text-white md:py-32">
        <div className="container-shell">
          <SectionIntro dark eyebrow="Connected capability" title="Engineering depth across the product journey." copy="Corvex is organized around the capabilities a project needs—not disconnected departmental claims." />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Blocks, "Product architecture", "System families designed to work with structural and installation components."],
              [Factory, "Manufacturing", "Production thinking centered on repeatability, visibility, and controlled flow."],
              [FlaskConical, "Quality assurance", "Evidence-led checks aligned with material, geometry, finish, and release."],
              [Sparkles, "Development", "A practical path for custom requirements, future monitoring, and product improvement."],
            ].map(([Icon, title, copy], index) => {
              const CapabilityIcon = Icon as typeof Factory;
              return <Reveal key={title as string} delay={index * 0.05} className="group bg-ink-950 p-7 transition-colors hover:bg-navy-800 md:p-9"><CapabilityIcon aria-hidden="true" className="text-signal-500" size={28} /><h3 className="mt-12 text-xl font-semibold">{title as string}</h3><p className="mt-4 text-sm leading-6 text-steel-300">{copy as string}</p></Reveal>;
            })}
          </div>
        </div>
      </section>

      <section className="bg-mist-100 py-20 md:py-32">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <Reveal><p className="eyebrow text-signal-600">Responsibility</p><div className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-signal-600 shadow-[0_16px_36px_rgba(8,17,28,.07)]"><Leaf aria-hidden="true" size={30} /></div></Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.05em] md:text-6xl">Strength should be measured across the lifecycle.</h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700">Material efficiency, durability, maintainability, responsible production, and clear end-of-life thinking all influence the real value of a steel system. Our sustainability direction begins by making those decisions more visible and measurable.</p>
            <Link className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-signal-600" href="/sustainability">Explore our direction <ArrowUpRight aria-hidden="true" size={17} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-signal-600 py-24 text-white md:py-32">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(135deg,transparent_0%,rgba(8,17,28,.16)_100%)]" aria-hidden="true" />
        <div className="container-shell relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal><p className="eyebrow text-white/70">Work with Corvex</p><h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-balance md:text-7xl">Let’s make the requirement buildable.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">Bring us the site context, drawings, quantities, standards, and delivery priorities. We’ll help structure the next technical step.</p></Reveal>
          <Reveal delay={0.1}><Link className="button border-white bg-white text-ink-950 hover:bg-paper-50" href="/request-a-quote">Start a project brief <ArrowRight aria-hidden="true" size={18} /></Link></Reveal>
        </div>
      </section>
    </>
  );
}

function SectionIntro({ eyebrow, title, copy, dark = false }: { eyebrow: string; title: string; copy: string; dark?: boolean }) {
  return (
    <Reveal className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
      <div><p className="eyebrow text-signal-600">{eyebrow}</p><h2 className={`mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-balance md:text-6xl ${dark ? "text-white" : "text-ink-950"}`}>{title}</h2></div>
      <p className={`max-w-lg leading-7 lg:justify-self-end ${dark ? "text-steel-300" : "text-slate-700"}`}>{copy}</p>
    </Reveal>
  );
}
