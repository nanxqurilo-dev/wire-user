"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Box, CheckCircle2, ClipboardCheck, Factory, PackageCheck, ScanLine, Settings2,
} from "lucide-react";
import { useState } from "react";

const stages = [
  {
    number: "01", label: "Define", title: "Product and project definition", icon: ClipboardCheck,
    copy: "The production journey starts with an approved configuration—not an assumption. Material, geometry, finish, quantity, identification, packaging, and required records are translated into a controlled production brief.",
    inputs: ["Approved product schedule", "Project quantity and release plan", "Required material and finish", "Inspection and document needs"],
    checkpoint: "Production brief released for planning",
  },
  {
    number: "02", label: "Verify", title: "Incoming material control", icon: ScanLine,
    copy: "Incoming wire, strip, sections, and components are checked against the defined input requirements before they enter the production flow. Identification is preserved so later decisions can be connected to the source material.",
    inputs: ["Material identity", "Dimensional checks", "Surface and condition review", "Quantity and traceability"],
    checkpoint: "Material accepted, identified, and staged",
  },
  {
    number: "03", label: "Form", title: "Precision forming and weaving", icon: Settings2,
    copy: "Machine settings, tooling, feed control, and operator checks shape wire and strip into the required geometry. Process parameters are reviewed where they directly influence aperture, profile, pitch, or alignment.",
    inputs: ["Tooling and setup confirmation", "First-piece verification", "In-process dimensional review", "Controlled machine parameters"],
    checkpoint: "Geometry verified before continued production",
  },
  {
    number: "04", label: "Assemble", title: "Joining and system assembly", icon: Factory,
    copy: "Welding, clipping, twisting, cutting, drilling, and component assembly connect individual elements into a repeatable product or coordinated system. Interfaces are checked—not treated as secondary details.",
    inputs: ["Joint consistency", "Component orientation", "Connection spacing", "Structural interface checks"],
    checkpoint: "Assembly meets the controlled configuration",
  },
  {
    number: "05", label: "Protect", title: "Finish and surface integrity", icon: CheckCircle2,
    copy: "The protective finish is selected around material, fabrication sequence, exposure, and project requirements. Surface condition and coverage are reviewed before products move to final inspection.",
    inputs: ["Specified finish system", "Surface preparation context", "Coverage and appearance review", "Handling protection"],
    checkpoint: "Finish condition accepted for release inspection",
  },
  {
    number: "06", label: "Release", title: "Final inspection and documentation", icon: ClipboardCheck,
    copy: "Final release confirms that the produced configuration, quantity, visible condition, identification, and agreed records align with the project brief. Nonconforming items are separated from releasable material.",
    inputs: ["Configuration confirmation", "Sampling and measurement record", "Visual condition", "Release documentation"],
    checkpoint: "Authorized quality release",
  },
  {
    number: "07", label: "Deliver", title: "Packaging and dispatch control", icon: PackageCheck,
    copy: "Packaging protects the product, supports safe handling, and keeps project identity visible. Dispatch quantities, labels, sequence, and accompanying documents are checked before the shipment leaves the facility.",
    inputs: ["Product-safe packaging", "Package identification", "Quantity reconciliation", "Dispatch document check"],
    checkpoint: "Shipment cleared against dispatch plan",
  },
];

export function ManufacturingProcessMap() {
  const [active, setActive] = useState(0);
  const stage = stages[active];
  const Icon = stage.icon;

  return (
    <div>
      <div className="relative overflow-x-auto pb-4">
        <div className="relative flex min-w-[52rem] justify-between">
          <div className="absolute left-5 right-5 top-5 h-px bg-ink-950/15" aria-hidden="true" />
          <motion.div className="absolute left-5 top-5 h-px bg-signal-500" animate={{ width: `${(active / (stages.length - 1)) * 94}%` }} aria-hidden="true" />
          {stages.map((item, index) => (
            <button key={item.number} type="button" onClick={() => setActive(index)} className="group relative z-10 flex w-24 flex-col items-center text-center" aria-pressed={active === index}>
              <span className={`flex h-10 w-10 items-center justify-center rounded-full border font-mono text-xs transition-all ${active === index ? "border-signal-500 bg-signal-500 text-white shadow-[0_0_0_6px_rgba(240,100,36,.14)]" : index < active ? "border-signal-500 bg-paper-50 text-signal-600" : "border-ink-950/15 bg-paper-50 text-slate-500 group-hover:border-signal-500"}`}>{item.number}</span>
              <span className={`mt-4 text-xs font-semibold ${active === index ? "text-signal-600" : "text-slate-500"}`}>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={stage.number} className="mt-10 grid overflow-hidden rounded-3xl border border-ink-950/10 bg-white lg:grid-cols-[.85fr_1.15fr]" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
          <div className="relative flex min-h-80 flex-col justify-between overflow-hidden bg-ink-950 p-8 text-white md:p-12">
            <div className="industrial-grid absolute inset-0 opacity-45" aria-hidden="true" />
            <div className="relative flex items-start justify-between"><span className="font-mono text-7xl text-white/10 md:text-9xl">{stage.number}</span><span className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/15 bg-white/[.05]"><Icon aria-hidden="true" className="text-signal-500" size={27} /></span></div>
            <div className="relative"><p className="eyebrow text-signal-500">{stage.label}</p><h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{stage.title}</h3></div>
          </div>
          <div className="p-8 md:p-12">
            <p className="text-lg leading-8 text-slate-700">{stage.copy}</p>
            <p className="eyebrow mt-9 text-slate-500">Control inputs</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">{stage.inputs.map((input) => <p key={input} className="flex items-center gap-3 rounded-lg bg-mist-100 px-4 py-3 text-sm"><span className="h-2 w-2 shrink-0 rounded-full bg-signal-500" />{input}</p>)}</div>
            <div className="mt-8 flex items-start gap-4 border-t border-ink-950/15 pt-6"><Box aria-hidden="true" className="mt-0.5 shrink-0 text-signal-600" size={20} /><div><p className="eyebrow text-slate-500">Stage output</p><p className="mt-2 font-semibold">{stage.checkpoint}</p></div></div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
