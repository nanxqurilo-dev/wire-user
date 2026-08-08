import { Reveal } from "@/sections/home/home-interactions";

export function PageHero({ eyebrow, title, accent, copy }: { eyebrow: string; title: string; accent: string; copy: string }) {
  return <section className="relative isolate overflow-hidden bg-ink-950 py-24 text-white md:py-36"><div className="industrial-grid absolute inset-0 opacity-50" aria-hidden="true" /><div className="container-shell relative"><Reveal><p className="eyebrow text-signal-500">{eyebrow}</p><h1 className="mt-7 max-w-6xl text-5xl font-semibold leading-[.95] tracking-[-.06em] text-balance md:text-8xl">{title}<br /><span className="text-steel-300">{accent}</span></h1><p className="mt-8 max-w-2xl text-lg leading-8 text-steel-300">{copy}</p></Reveal></div></section>;
}
