"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Boxes, Factory, Gauge, PackageCheck, ScanLine, Settings2, ShieldCheck, Warehouse,
} from "lucide-react";
import { useState } from "react";

const zones = [
  { id: "material", number: "01", label: "Material control", icon: Boxes, x: "9%", y: "22%", title: "Inputs begin with visible status", copy: "Receiving, identification, review, and controlled staging establish what material may enter production and what project context must travel with it.", functions: ["Receiving and identification", "Incoming review", "Controlled storage", "Production staging"] },
  { id: "forming", number: "02", label: "Forming cells", icon: Settings2, x: "35%", y: "33%", title: "Production organized around process families", copy: "Wire forming, weaving, cutting, and profile operations are grouped so tooling, setup, in-process checks, and material movement remain understandable.", functions: ["Wire and strip forming", "Mesh and pattern control", "Tooling setup", "First-piece verification"] },
  { id: "assembly", number: "03", label: "Assembly", icon: Factory, x: "62%", y: "26%", title: "Interfaces treated as product characteristics", copy: "Joining, clipping, drilling, cutting, and structural assembly connect individual components into the approved product or coordinated system.", functions: ["Joining and clipping", "Component preparation", "System assembly", "Interface checks"] },
  { id: "quality", number: "04", label: "Quality", icon: ScanLine, x: "82%", y: "46%", title: "Inspection placed close to the decision", copy: "Measurement and visual review points are positioned where feedback can influence production, supported by a clear final-release function.", functions: ["In-process checks", "Measurement resources", "Final inspection", "Release status"] },
  { id: "tooling", number: "05", label: "Tooling", icon: Gauge, x: "25%", y: "69%", title: "Tooling readiness supports repeatability", copy: "Tool condition, setup, maintenance, and controlled change are part of the infrastructure required to reproduce geometry consistently.", functions: ["Tool identification", "Setup readiness", "Preventive care", "Controlled replacement"] },
  { id: "packaging", number: "06", label: "Packaging", icon: PackageCheck, x: "56%", y: "72%", title: "Delivered quality continues after inspection", copy: "Product-safe handling, identification, packing format, quantity reconciliation, and dispatch sequence protect the system through its next journey.", functions: ["Safe handling", "Protective packaging", "Package identity", "Dispatch staging"] },
  { id: "warehouse", number: "07", label: "Warehouse", icon: Warehouse, x: "87%", y: "78%", title: "Storage connects production to project timing", copy: "Defined storage and dispatch zones keep released product, status, packaging, and project sequence visible before loading.", functions: ["Released-goods storage", "Project segregation", "Loading preparation", "Dispatch control"] },
];

export function CapabilityMap() {
  const [active, setActive] = useState(0);
  const zone = zones[active];
  const Icon = zone.icon;

  return (
    <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-navy-900 lg:grid-cols-[1.15fr_.85fr]">
      <div className="relative min-h-[34rem] overflow-hidden p-6 md:p-10">
        <div className="industrial-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true"><path d="M70 130H330V205H620V150H860V275H950M230 405H560V430H880" fill="none" stroke="#B7C1CA" strokeWidth="1" strokeDasharray="7 8"/><path d="M330 205V405M620 150V430M860 275V465" fill="none" stroke="#B7C1CA" strokeWidth="1" strokeDasharray="7 8"/></svg>
        <p className="eyebrow relative text-signal-500">Interactive facility logic</p>
        <p className="relative mt-3 max-w-sm text-sm leading-6 text-steel-300">Select a node to see the role it plays in controlled product flow.</p>
        {zones.map((item, index) => {
          const NodeIcon = item.icon;
          return <button key={item.id} type="button" onClick={() => setActive(index)} aria-pressed={active === index} aria-label={`Explore ${item.label}`} className="group absolute -translate-x-1/2 -translate-y-1/2" style={{ left: item.x, top: item.y }}><span className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all md:h-14 md:w-14 ${active === index ? "border-signal-500 bg-signal-500 text-white shadow-[0_0_0_8px_rgba(240,100,36,.13)]" : "border-white/20 bg-ink-950/85 text-steel-300 hover:border-signal-500 hover:text-white"}`}><NodeIcon aria-hidden="true" size={21}/></span><span className={`mt-2 hidden whitespace-nowrap font-mono text-[.6rem] uppercase tracking-[.1em] md:block ${active === index ? "text-signal-500" : "text-steel-300"}`}>{item.label}</span></button>;
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={zone.id} className="flex flex-col justify-between border-t border-white/10 bg-ink-950 p-8 text-white lg:border-l lg:border-t-0 md:p-12" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }}>
          <div><div className="flex items-start justify-between"><span className="font-mono text-6xl text-white/10">{zone.number}</span><Icon aria-hidden="true" className="text-signal-500" size={28}/></div><p className="eyebrow mt-12 text-signal-500">{zone.label}</p><h3 className="mt-4 text-3xl font-semibold tracking-tight">{zone.title}</h3><p className="mt-5 leading-7 text-steel-300">{zone.copy}</p></div>
          <div className="mt-10 grid gap-2 sm:grid-cols-2">{zone.functions.map((item) => <p key={item} className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2.5 text-xs text-steel-300"><ShieldCheck aria-hidden="true" className="text-signal-500" size={15}/>{item}</p>)}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
