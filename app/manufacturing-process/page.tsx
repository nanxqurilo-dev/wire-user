import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown, ArrowRight, CheckCircle2, ClipboardCheck, Factory, Fingerprint,
  Gauge, Layers3, PackageCheck, ScanLine, Settings2, ShieldCheck,
} from "lucide-react";

import { ManufacturingProcessMap } from "@/sections/manufacturing/manufacturing-process-map";
import { Reveal } from "@/sections/home/home-interactions";

export const metadata: Metadata = {
  title: "Manufacturing Process",
  description: "Explore the controlled Corvex manufacturing journey from product definition and material verification through forming, inspection, packaging, and dispatch.",
  alternates: { canonical: "/manufacturing-process" },
  openGraph: { title: "Corvex Manufacturing Process", description: "A visible, controlled journey from approved requirement to project-ready dispatch.", url: "/manufacturing-process" },
};

export default function ManufacturingProcessPage() {
  return (
    <>
      <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-ink-950 text-white">
        <Image src="/images/home/manufacturing-floor.png" alt="Engineer inspecting steel mesh on a controlled Corvex production line" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#08111c_0%,rgba(8,17,28,.9)_42%,rgba(8,17,28,.28)_80%),linear-gradient(to_top,#08111c_0%,transparent_50%)]" />
        <div className="industrial-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="container-shell relative flex min-h-[calc(100svh-5rem)] flex-col justify-between pb-10 pt-20 md:pt-28">
          <Reveal><p className="eyebrow text-signal-500">Manufacturing process</p><h1 className="mt-7 max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[.91] tracking-[-.065em] text-balance">Control the process.<br /><span className="text-steel-300">Strengthen the outcome.</span></h1></Reveal>
          <Reveal delay={.08} className="grid gap-8 border-t border-white/15 pt-8 md:grid-cols-[1fr_auto] md:items-end"><p className="max-w-2xl text-lg leading-8 text-steel-300">Seven connected stages keep the approved product definition visible from incoming material to project-ready dispatch.</p><a className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[.14em] text-steel-300" href="#process"><ArrowDown aria-hidden="true" className="text-signal-500" size={18}/> Explore the flow</a></Reveal>
        </div>
      </section>

      <section className="bg-paper-50 py-20 md:py-32">
        <div className="container-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-24"><Reveal><p className="eyebrow text-signal-600">Our manufacturing position</p><Factory aria-hidden="true" className="mt-8 text-signal-600" size={38}/></Reveal><Reveal delay={.08}><h2 className="text-4xl font-semibold leading-[1.08] tracking-[-.05em] md:text-6xl">Quality is not inspected into steel at the end.</h2><p className="mt-8 max-w-4xl text-xl leading-9 text-slate-700">It is shaped by the definition, material, tooling, machine setup, in-process checks, handling, and decisions that came before final release. Our process architecture makes those handoffs visible.</p></Reveal></div>
      </section>

      <section id="process" className="scroll-mt-24 bg-mist-100 py-20 md:py-28">
        <div className="container-shell"><Reveal className="grid gap-8 md:grid-cols-[1fr_.65fr] md:items-end"><div><p className="eyebrow text-signal-600">Seven-stage journey</p><h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-.05em] md:text-6xl">Follow the requirement through production.</h2></div><p className="max-w-lg leading-7 text-slate-700">Select each stage to inspect its purpose, control inputs, and defined output.</p></Reveal><div className="mt-16"><ManufacturingProcessMap /></div></div>
      </section>

      <section className="bg-ink-950 py-20 text-white md:py-28">
        <div className="container-shell"><Reveal><p className="eyebrow text-signal-500">The production control stack</p><h2 className="mt-6 max-w-5xl text-4xl font-semibold tracking-[-.05em] md:text-6xl">Four layers keep decisions connected.</h2></Reveal><div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-2 lg:grid-cols-4">{[[ClipboardCheck,"Definition","What must be produced, checked, identified, and supplied."],[Settings2,"Process","How tooling, setup, forming, joining, and handling are controlled."],[ScanLine,"Verification","Where dimensions, condition, quantity, and configuration are confirmed."],[Fingerprint,"Traceability","How material, production, release, and dispatch identity remain connected."]].map(([Icon,title,copy],index)=>{const LayerIcon=Icon as typeof ClipboardCheck;return <Reveal key={title as string} delay={index*.05} className="group bg-ink-950 p-8 transition-colors hover:bg-navy-800"><span className="font-mono text-xs text-signal-500">0{index+1}</span><LayerIcon aria-hidden="true" className="mt-10 text-steel-300" size={30}/><h3 className="mt-8 text-2xl font-semibold">{title as string}</h3><p className="mt-4 text-sm leading-6 text-steel-300">{copy as string}</p></Reveal>})}</div></div>
      </section>

      <section className="bg-paper-50 py-20 md:py-32">
        <div className="container-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24"><Reveal><p className="eyebrow text-signal-600">Material flow</p><h2 className="mt-6 text-4xl font-semibold tracking-[-.05em] md:text-5xl">Protect identity through every transformation.</h2><p className="mt-6 max-w-sm leading-7 text-slate-700">As material becomes a finished system, its status and project identity must remain understandable.</p></Reveal><Reveal delay={.08} className="relative"><div className="absolute bottom-0 left-[1.2rem] top-0 w-px bg-ink-950/15" aria-hidden="true"/>{[["Input","Wire, strip, sections, fasteners, and coating inputs enter against a defined need."],["Work in progress","Formed and assembled material carries product and batch context through the flow."],["Released product","Inspection status separates accepted product from material requiring review."],["Dispatch unit","Packages connect identity, quantity, protection, and accompanying documents."]].map(([title,copy],index)=><div key={title} className="relative flex gap-6 pb-10 last:pb-0"><span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-signal-600 font-mono text-xs text-white">0{index+1}</span><div className="pt-1"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 max-w-xl leading-7 text-slate-700">{copy}</p></div></div>)}</Reveal></div>
      </section>

      <section className="bg-mist-100 py-20 md:py-28">
        <div className="container-shell"><Reveal className="grid gap-8 md:grid-cols-[1fr_.65fr] md:items-end"><div><p className="eyebrow text-signal-600">Control where it matters</p><h2 className="mt-6 max-w-5xl text-4xl font-semibold tracking-[-.05em] md:text-6xl">Match the checkpoint to the characteristic.</h2></div><p className="max-w-lg leading-7 text-slate-700">Not every check belongs at final inspection. Controls are most useful where they can still influence the outcome.</p></Reveal><div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{[[Gauge,"Geometry","Aperture, pitch, dimensions, alignment, profile, and connection spacing."],[ShieldCheck,"Material & finish","Identity, surface condition, protective treatment, and handling damage."],[Layers3,"Assembly","Orientation, joining, compatibility, interfaces, and completeness."],[CheckCircle2,"Visual condition","Workmanship, deformation, contamination, and product presentation."],[PackageCheck,"Quantity & packaging","Count, pack format, identification, protection, and handling logic."],[ClipboardCheck,"Documents","Inspection evidence, release status, packing information, and agreed records."]].map(([Icon,title,copy],index)=>{const ControlIcon=Icon as typeof Gauge;return <Reveal key={title as string} delay={(index%3)*.05} className="group rounded-2xl border border-ink-950/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-signal-500/40 hover:shadow-[0_18px_50px_rgba(8,17,28,.08)]"><ControlIcon aria-hidden="true" className="text-signal-600" size={28}/><h3 className="mt-10 text-xl font-semibold">{title as string}</h3><p className="mt-4 text-sm leading-6 text-slate-700">{copy as string}</p></Reveal>})}</div></div>
      </section>

      <section className="bg-paper-50 py-20 md:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24"><Reveal><p className="eyebrow text-signal-600">Release logic</p><h2 className="mt-6 text-4xl font-semibold tracking-[-.05em] md:text-5xl">Clear status. Clear responsibility.</h2></Reveal><Reveal delay={.08}><div className="grid gap-px overflow-hidden rounded-2xl bg-ink-950/10 sm:grid-cols-2">{[["Accepted","The item meets the defined release criteria and may move to the next controlled stage."],["Hold","The item is separated while information, measurement, or disposition is reviewed."],["Rework","An authorized, defined correction is completed and the item is verified again."],["Reject","The item is prevented from unintended use and handled through the approved disposition."]].map(([title,copy],index)=><div key={title} className="bg-mist-100 p-7"><span className="font-mono text-xs text-signal-600">0{index+1}</span><h3 className="mt-7 text-xl font-semibold">{title}</h3><p className="mt-4 text-sm leading-6 text-slate-700">{copy}</p></div>)}</div><p className="mt-6 text-xs leading-5 text-slate-500">This page describes the intended process architecture. Project-specific inspection plans and records are issued only against confirmed Corvex requirements.</p></Reveal></div>
      </section>

      <section className="relative overflow-hidden bg-signal-600 py-24 text-white md:py-32"><div className="container-shell relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><Reveal><p className="eyebrow text-white/70">Plan production around the project</p><h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-.055em] text-balance md:text-7xl">Define the outcome before the line starts.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">Share the approved schedule, quantities, release plan, documents, and delivery priorities to structure a production-ready brief.</p></Reveal><Reveal delay={.1}><Link className="button border-white bg-white text-ink-950 hover:bg-paper-50" href="/request-a-quote">Prepare a manufacturing brief <ArrowRight aria-hidden="true" size={18}/></Link></Reveal></div></section>
    </>
  );
}
