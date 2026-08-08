import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, Camera, CheckCircle2, ImageIcon } from "lucide-react";

import { GalleryBrowser } from "@/sections/gallery/gallery-browser";
import { Reveal } from "@/sections/home/home-interactions";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore original Corvex editorial visual studies across steel products, manufacturing, infrastructure environments, and engineering development.",
  alternates: { canonical: "/gallery" },
  openGraph: { title: "Corvex Visual Gallery", description: "Original product, manufacturing, infrastructure, and engineering visual studies.", url: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-950 pb-20 pt-24 text-white md:pb-28 md:pt-36"><div className="industrial-grid absolute inset-0 opacity-50" aria-hidden="true"/><div className="container-shell relative"><Reveal><p className="eyebrow text-signal-500">Gallery</p><h1 className="mt-7 max-w-6xl text-5xl font-semibold leading-[.94] tracking-[-.06em] text-balance md:text-8xl">Steel, systems,<br/><span className="text-steel-300">and the spaces between.</span></h1></Reveal><Reveal delay={.08} className="mt-12 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-[1fr_auto] md:items-end"><p className="max-w-2xl text-lg leading-8 text-steel-300">An original visual library exploring product geometry, controlled manufacturing, infrastructure environments, and engineering work.</p><a className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[.14em] text-steel-300" href="#gallery-browser"><ArrowDown aria-hidden="true" className="text-signal-500" size={18}/> Browse the collection</a></Reveal></div></section>

      <section className="bg-paper-50 py-16 md:py-20"><div className="container-shell"><Reveal className="flex flex-col gap-6 rounded-2xl border border-signal-500/25 bg-white p-7 md:flex-row md:items-center md:justify-between md:p-9"><div className="flex gap-5"><Camera aria-hidden="true" className="mt-1 shrink-0 text-signal-600" size={29}/><div><p className="eyebrow text-signal-600">Image provenance</p><h2 className="mt-3 text-2xl font-semibold">Original editorial and product visualizations</h2><p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">These images were created specifically for the Corvex digital experience. They illustrate product and industry context; they are not presented as documentary photographs of completed Corvex projects, clients, employees, or facilities.</p></div></div><span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-mist-100 px-4 py-2 font-mono text-xs text-slate-700"><CheckCircle2 aria-hidden="true" className="text-success-600" size={15}/> Clearly labeled</span></Reveal></div></section>

      <section id="gallery-browser" className="scroll-mt-24 bg-mist-100 py-16 md:py-24"><div className="container-shell"><GalleryBrowser/></div></section>

      <section className="bg-paper-50 py-20 md:py-28"><div className="container-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24"><Reveal><p className="eyebrow text-signal-600">Future project library</p><ImageIcon aria-hidden="true" className="mt-8 text-signal-600" size={38}/></Reveal><Reveal delay={.08}><h2 className="text-4xl font-semibold leading-[1.08] tracking-[-.05em] md:text-6xl">Verified project photography needs context, not just a caption.</h2><p className="mt-8 max-w-4xl text-xl leading-9 text-slate-700">When approved project assets become available, each entry should identify the application, system, environment, scope boundary, image date, usage permission, and any confidentiality restrictions—without revealing sensitive security information.</p><div className="mt-10 grid gap-4 sm:grid-cols-3">{[["01","Permission","Confirm photographer, client, site, employee, and publication rights."],["02","Accuracy","Match the image to the correct system, application, date, and project scope."],["03","Security","Remove sensitive locations, access details, layouts, identifiers, and operational information."]].map(([number,title,copy])=><div key={number} className="rounded-xl border border-ink-950/10 bg-mist-100 p-6"><span className="font-mono text-xs text-signal-600">{number}</span><h3 className="mt-7 font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-700">{copy}</p></div>)}</div></Reveal></div></section>

      <section className="relative overflow-hidden bg-signal-600 py-24 text-white md:py-32"><div className="container-shell relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><Reveal><p className="eyebrow text-white/70">See a system in your context</p><h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-.055em] text-balance md:text-7xl">Move from visual direction to project definition.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">Share the site, application, system interest, and project stage to begin a technical conversation.</p></Reveal><Reveal delay={.1}><Link className="button border-white bg-white text-ink-950 hover:bg-paper-50" href="/request-a-quote">Start a project brief <ArrowRight aria-hidden="true" size={18}/></Link></Reveal></div></section>
    </>
  );
}
