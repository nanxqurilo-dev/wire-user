"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Factory, Leaf, PackageCheck, Recycle, ShieldCheck, Truck } from "lucide-react";
import { useState } from "react";

const stages = [
  { number: "01", label: "Material", icon: Leaf, title: "Select material for the real service condition", copy: "Material and protective finish should balance performance, durability, maintainability, availability, fabrication route, and end-of-life potential—not simply minimize initial mass.", levers: ["Right material for exposure", "Verified source information where available", "Avoid unnecessary over-specification", "Design around recoverable steel value"], evidence: "Material definition and source evidence appropriate to scope" },
  { number: "02", label: "Design", icon: ShieldCheck, title: "Use less through smarter system definition", copy: "Geometry, span, aperture, support spacing, connection, modularity, and component coordination can reduce avoidable material while protecting the required function.", levers: ["Fit-for-purpose geometry", "Coordinated system interfaces", "Modular and replaceable parts", "Reduced avoidable variants"], evidence: "Controlled product schedule and design rationale" },
  { number: "03", label: "Make", icon: Factory, title: "Turn yield and resource use into process questions", copy: "Production planning can influence offcut, setup loss, rework, energy, consumables, water, maintenance, and the separation of recoverable material streams.", levers: ["Material-yield review", "Stable setup and reduced rework", "Preventive equipment care", "Segregated recoverable scrap"], evidence: "Process measures tied to defined boundaries" },
  { number: "04", label: "Deliver", icon: Truck, title: "Protect product without moving avoidable volume", copy: "Packaging and logistics should prevent damage, support safe handling, use space effectively, preserve identity, and match project delivery sequence.", levers: ["Damage-preventive packaging", "Pack density and handling fit", "Reusable or recyclable materials", "Sequenced and consolidated dispatch"], evidence: "Packing definition and shipment context" },
  { number: "05", label: "Use", icon: PackageCheck, title: "Extend useful service through maintainability", copy: "Durable finishes, accessible connections, compatible replacement parts, inspection guidance, and repair planning can protect lifecycle value after installation.", levers: ["Exposure-appropriate finish", "Inspection-ready details", "Replaceable damaged sections", "Maintenance and repair information"], evidence: "Service assumptions and maintenance guidance" },
  { number: "06", label: "Recover", icon: Recycle, title: "Plan for separation, reuse, and material recovery", copy: "Steel retains recovery value, but practical outcomes depend on access, disassembly, contamination, coatings, local infrastructure, and clear material information.", levers: ["Mechanical separation where practical", "Material identification", "Reuse of suitable components", "Responsible recycling route"], evidence: "End-of-life guidance with local limitations" },
];

export function LifecycleExplorer() {
  const [active, setActive] = useState(0);
  const item = stages[active];
  const Icon = item.icon;
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6" role="tablist" aria-label="Product lifecycle stages">
        {stages.map((stage,index)=>{const TabIcon=stage.icon;return <button key={stage.number} type="button" role="tab" aria-selected={active===index} onClick={()=>setActive(index)} className={`flex min-h-28 flex-col items-center justify-center gap-3 rounded-xl border px-3 text-sm font-semibold transition-all ${active===index?"border-signal-500 bg-ink-950 text-white shadow-[0_14px_35px_rgba(8,17,28,.12)]":"border-ink-950/10 bg-white text-slate-700 hover:border-signal-500/50"}`}><TabIcon aria-hidden="true" className={active===index?"text-signal-500":"text-slate-500"} size={21}/><span>{stage.label}</span></button>})}
      </div>
      <AnimatePresence mode="wait"><motion.div key={item.number} role="tabpanel" className="mt-4 grid overflow-hidden rounded-3xl border border-ink-950/10 bg-white lg:grid-cols-[.8fr_1.2fr]" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}><div className="relative overflow-hidden bg-ink-950 p-8 text-white md:p-10"><div className="industrial-grid absolute inset-0 opacity-45" aria-hidden="true"/><div className="relative"><div className="flex items-start justify-between"><span className="font-mono text-7xl text-white/10">{item.number}</span><Icon aria-hidden="true" className="text-signal-500" size={32}/></div><p className="eyebrow mt-10 text-signal-500">{item.label}</p><h3 className="mt-4 text-3xl font-semibold tracking-tight">{item.title}</h3><p className="mt-5 leading-7 text-steel-300">{item.copy}</p></div></div><div className="flex flex-col justify-between p-8 md:p-10"><div><p className="eyebrow text-slate-500">Decision levers</p><ul className="mt-6 grid gap-3 sm:grid-cols-2">{item.levers.map((lever)=><li key={lever} className="flex gap-3 rounded-lg bg-mist-100 px-4 py-3 text-sm"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-signal-500"/>{lever}</li>)}</ul></div><div className="mt-10 border-t border-ink-950/15 pt-6"><p className="eyebrow text-slate-500">Useful evidence</p><p className="mt-3 font-semibold">{item.evidence}</p></div></div></motion.div></AnimatePresence>
    </div>
  );
}
