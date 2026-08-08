"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, CircleDot, Gauge, ScanLine, ShieldCheck } from "lucide-react";
import { useState } from "react";

const characteristics = [
  {
    label: "Material", icon: ShieldCheck, title: "Confirm the input before transformation",
    purpose: "Establish that the material entering production aligns with the controlled product definition and remains identifiable.",
    checks: ["Material and finish identity", "Incoming dimensions", "Visible surface condition", "Quantity and batch context"],
    evidence: ["Receiving status", "Material identification", "Inspection record", "Hold or acceptance decision"],
  },
  {
    label: "Geometry", icon: Gauge, title: "Measure what defines product fit",
    purpose: "Verify the dimensions and patterns that influence assembly, installation, appearance, and system compatibility.",
    checks: ["Wire or section dimensions", "Aperture, pitch, and spacing", "Coil, panel, or profile geometry", "Connection and hole positions"],
    evidence: ["First-piece result", "In-process measurement", "Sampling record", "Final dimensional status"],
  },
  {
    label: "Assembly", icon: CircleDot, title: "Treat connections as controlled characteristics",
    purpose: "Confirm that joining, clipping, twisting, welding, orientation, and component completeness match the released configuration.",
    checks: ["Joint and clip consistency", "Component orientation", "Connection spacing", "Completeness of supplied assembly"],
    evidence: ["Setup confirmation", "Visual inspection", "In-process check", "Assembly release result"],
  },
  {
    label: "Finish", icon: ScanLine, title: "Protect condition through production and handling",
    purpose: "Review protective finish and product condition after operations that may influence surface integrity.",
    checks: ["Finish type and visible coverage", "Surface damage or contamination", "Cut and fabrication areas", "Handling and storage condition"],
    evidence: ["Finish inspection", "Repair disposition where permitted", "Final visual status", "Packaging protection review"],
  },
  {
    label: "Release", icon: CheckCircle2, title: "Close the loop against the approved brief",
    purpose: "Reconcile configuration, quantity, condition, identification, packaging, and agreed documentation before dispatch.",
    checks: ["Product and variant confirmation", "Released quantity", "Package and label identity", "Required document availability"],
    evidence: ["Final inspection result", "Release authorization", "Packing reconciliation", "Dispatch status"],
  },
];

export function QualityMatrix() {
  const [active, setActive] = useState(0);
  const item = characteristics[active];
  const Icon = item.icon;

  return (
    <div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5" role="tablist" aria-label="Quality characteristics">
        {characteristics.map((entry, index) => {
          const TabIcon = entry.icon;
          return <button key={entry.label} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)} className={`flex min-h-24 flex-col items-center justify-center gap-3 rounded-xl border px-3 text-sm font-semibold transition-all ${active === index ? "border-signal-500 bg-ink-950 text-white shadow-[0_14px_35px_rgba(8,17,28,.12)]" : "border-ink-950/10 bg-white text-slate-700 hover:border-signal-500/50"}`}><TabIcon aria-hidden="true" className={active === index ? "text-signal-500" : "text-slate-500"} size={21}/>{entry.label}</button>;
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.label} role="tabpanel" className="mt-4 grid overflow-hidden rounded-2xl border border-ink-950/10 bg-white lg:grid-cols-[.8fr_1.2fr]" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
          <div className="relative overflow-hidden bg-ink-950 p-8 text-white md:p-10"><div className="industrial-grid absolute inset-0 opacity-40" aria-hidden="true"/><div className="relative"><Icon aria-hidden="true" className="text-signal-500" size={32}/><p className="eyebrow mt-12 text-signal-500">{item.label} control</p><h3 className="mt-4 text-3xl font-semibold tracking-tight">{item.title}</h3><p className="mt-5 leading-7 text-steel-300">{item.purpose}</p></div></div>
          <div className="grid gap-px bg-ink-950/10 sm:grid-cols-2"><div className="bg-paper-50 p-8"><p className="eyebrow text-slate-500">Typical checks</p><ul className="mt-6 space-y-4">{item.checks.map((check) => <li key={check} className="flex gap-3 text-sm leading-6"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-signal-500"/>{check}</li>)}</ul></div><div className="bg-mist-100 p-8"><p className="eyebrow text-slate-500">Resulting evidence</p><ul className="mt-6 space-y-4">{item.evidence.map((evidence) => <li key={evidence} className="flex gap-3 text-sm leading-6"><CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-success-600" size={17}/>{evidence}</li>)}</ul></div></div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
