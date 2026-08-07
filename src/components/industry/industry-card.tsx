import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Industry } from "@/content/industries";
import { industryIcons } from "./industry-icons";

export function IndustryCard({ industry, featured = false }: { industry: Industry; featured?: boolean }) {
  const Icon = industryIcons[industry.icon];
  return (
    <Link href={`/industries/${industry.slug}`} className={`group relative isolate flex min-h-[28rem] overflow-hidden rounded-2xl bg-ink-950 text-white ${featured ? "md:col-span-2 lg:min-h-[34rem]" : ""}`}>
      <Image src={industry.image} alt={industry.alt} fill sizes={featured ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"} className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#08111c_4%,rgba(8,17,28,.34)_65%,rgba(8,17,28,.12)_100%)]" />
      <div className="relative mt-auto w-full p-7 md:p-9">
        <div className="flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-ink-950/50 backdrop-blur"><Icon aria-hidden="true" className="text-signal-500" size={22} /></span><ArrowUpRight aria-hidden="true" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} /></div>
        <p className="eyebrow mt-8 text-signal-500">{industry.eyebrow}</p><h2 className={`mt-3 font-semibold tracking-tight ${featured ? "text-4xl md:text-5xl" : "text-3xl"}`}>{industry.name}</h2><p className="mt-4 max-w-2xl text-sm leading-6 text-steel-300">{industry.summary}</p>
      </div>
    </Link>
  );
}
