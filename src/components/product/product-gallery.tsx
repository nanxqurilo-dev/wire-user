"use client";

import Image from "next/image";
import { Expand } from "lucide-react";
import { useState } from "react";

const views = [
  { label: "Full configuration", position: "center", scale: "scale-100" },
  { label: "Material detail", position: "left center", scale: "scale-[1.7]" },
  { label: "Connection detail", position: "right center", scale: "scale-[1.7]" },
];

export function ProductGallery({ src, alt }: { src: string; alt: string }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-ink-950">
        <Image src={src} alt={`${alt}, ${views[active].label.toLowerCase()}`} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className={`object-cover transition-all duration-700 ${views[active].scale}`} style={{ objectPosition: views[active].position }} />
        <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-ink-950/60 text-white backdrop-blur"><Expand aria-hidden="true" size={18} /></span>
        <span className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-ink-950/65 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-white backdrop-blur">{views[active].label}</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3" role="tablist" aria-label="Product views">
        {views.map((view, index) => <button key={view.label} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)} className={`relative aspect-[1.4] overflow-hidden rounded-xl border-2 bg-ink-950 transition ${active === index ? "border-signal-500" : "border-transparent opacity-65 hover:opacity-100"}`}><Image src={src} alt="" fill sizes="12vw" className={`object-cover ${view.scale}`} style={{ objectPosition: view.position }} /><span className="sr-only">{view.label}</span></button>)}
      </div>
    </div>
  );
}
