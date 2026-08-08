"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { InsightCard } from "@/components/insight/insight-card";
import { insightCategories, insights, type InsightCategory } from "@/content/insights";

export function InsightsBrowser() {
  const [category,setCategory]=useState<"All"|InsightCategory>("All");
  const [query,setQuery]=useState("");
  const filtered=useMemo(()=>insights.filter((insight)=>(category==="All"||insight.category===category)&&(!query.trim()||`${insight.title} ${insight.excerpt} ${insight.category}`.toLowerCase().includes(query.toLowerCase().trim()))),[category,query]);
  return <div><div className="flex flex-col gap-5 border-b border-ink-950/15 pb-7 lg:flex-row lg:items-center lg:justify-between"><div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Insight categories">{insightCategories.map((item)=><button key={item} type="button" role="tab" aria-selected={category===item} onClick={()=>setCategory(item)} className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${category===item?"bg-ink-950 text-white":"border border-ink-950/10 bg-white text-slate-700 hover:border-signal-500/50"}`}>{item}</button>)}</div><label className="relative block w-full lg:max-w-xs"><span className="sr-only">Search insights</span><Search aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18}/><input value={query} onChange={(event)=>setQuery(event.target.value)} className="form-input pl-11 pr-10" placeholder="Search insights"/>{query&&<button type="button" onClick={()=>setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" aria-label="Clear search"><X aria-hidden="true" size={17}/></button>}</label></div><div className="mt-8"><AnimatePresence mode="popLayout">{filtered.length?<motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filtered.map((insight)=><motion.div layout key={insight.slug} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,scale:.97}}><InsightCard insight={insight}/></motion.div>)}</motion.div>:<motion.div className="rounded-2xl border border-ink-950/10 bg-white py-20 text-center" initial={{opacity:0}} animate={{opacity:1}}><Search aria-hidden="true" className="mx-auto text-slate-500" size={30}/><h2 className="mt-5 text-2xl font-semibold">No matching insights</h2><p className="mt-3 text-slate-700">Try another topic or clear the current search.</p><button type="button" onClick={()=>{setQuery("");setCategory("All")}} className="button button-primary mt-7">Clear filters</button></motion.div>}</AnimatePresence></div></div>;
}
