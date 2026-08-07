import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Product } from "@/content/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-950/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-signal-500/40 hover:shadow-[0_22px_60px_rgba(8,17,28,.1)]">
      <Link href={`/products/${product.slug}`} className="relative block aspect-square overflow-hidden bg-ink-950">
        <Image src={product.image} alt={product.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.045]" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink-950/75 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-white backdrop-blur-md">{product.model}</span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow text-signal-600">{product.category}</p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight"><Link href={`/products/${product.slug}`}>{product.name}</Link></h2>
        <p className="mt-4 text-sm leading-6 text-slate-700">{product.shortDescription}</p>
        <div className="mt-6 flex flex-wrap gap-2">{product.material.map((material) => <span key={material} className="rounded-full bg-mist-100 px-3 py-1.5 text-xs text-slate-700">{material}</span>)}</div>
        <Link href={`/products/${product.slug}`} className="mt-8 inline-flex items-center gap-2 border-t border-ink-950/10 pt-5 text-sm font-semibold">View product <ArrowUpRight aria-hidden="true" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={17} /></Link>
      </div>
    </article>
  );
}
