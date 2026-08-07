import type { Metadata } from "next";
import { Suspense } from "react";
import { Boxes, CheckCircle2, SlidersHorizontal } from "lucide-react";

import { ProductCatalog } from "@/components/product/product-catalog";
import { Reveal } from "@/sections/home/home-interactions";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Corvex steel wire, fencing, barrier, electrified deterrence, and structural perimeter systems.",
  alternates: { canonical: "/products" },
  openGraph: { title: "Perimeter Protection Products", description: "A technical product portfolio organized around site and project needs.", url: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 pb-20 pt-24 text-white md:pb-28 md:pt-32">
        <div className="industrial-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="container-shell relative">
          <Reveal><p className="eyebrow text-signal-500">Product systems</p><h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[.98] tracking-[-0.055em] text-balance md:text-8xl">Find the system behind the specification.</h1></Reveal>
          <Reveal delay={0.08} className="mt-12 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-[1fr_auto] md:items-end"><p className="max-w-2xl text-lg leading-8 text-steel-300">Search by product, narrow by system family and material, then open a technical view with configuration guidance and project applications.</p><div className="flex gap-6 text-xs text-steel-300"><span className="flex items-center gap-2"><SlidersHorizontal className="text-signal-500" size={17} /> URL-driven filters</span><span className="flex items-center gap-2"><Boxes className="text-signal-500" size={17} /> Configurable systems</span></div></Reveal>
        </div>
      </section>
      <section className="bg-paper-50 py-14 md:py-20"><div className="container-shell"><Suspense fallback={<CatalogSkeleton />}><ProductCatalog /></Suspense></div></section>
      <section className="border-t border-ink-950/10 bg-mist-100 py-16 md:py-20"><div className="container-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-center"><div><p className="eyebrow text-signal-600">Need a coordinated package?</p><h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Products are stronger when interfaces are resolved together.</h2></div><ul className="grid gap-3 text-sm text-slate-700 sm:grid-cols-3">{["System selection", "Component coordination", "Project documentation"].map((item) => <li key={item} className="flex items-center gap-2"><CheckCircle2 className="text-signal-600" size={18} />{item}</li>)}</ul></div></section>
    </>
  );
}

function CatalogSkeleton() { return <div className="grid gap-10 lg:grid-cols-[15rem_1fr]"><div className="hidden h-80 animate-pulse rounded-xl bg-mist-100 lg:block" /><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{Array.from({ length: 6 }, (_, index) => <div key={index} className="aspect-[.72] animate-pulse rounded-2xl bg-mist-100" />)}</div></div>; }
