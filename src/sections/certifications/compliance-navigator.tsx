"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BadgeCheck, Building2, ClipboardCheck, FileCheck2, FlaskConical, PackageCheck,
} from "lucide-react";
import { useState } from "react";

const categories = [
  {
    label: "Company", icon: Building2, title: "Legal and business registrations",
    purpose: "Evidence that identifies the contracting entity, its registered details, and applicable business permissions.",
    examples: ["Company or business registration", "Tax and statutory registrations", "Import/export permissions where applicable", "Approved vendor registrations"],
    verify: ["Legal name matches the contracting entity", "Registration number is legible", "Issuing authority can be identified", "Status and validity are current"],
  },
  {
    label: "Management", icon: BadgeCheck, title: "Management-system certifications",
    purpose: "Independent certification of a defined management system and scope—not a blanket guarantee for every product or site.",
    examples: ["Quality management system", "Environmental management system", "Occupational health and safety system", "Other scope-specific systems"],
    verify: ["Certificate body and accreditation context", "Certified legal entity and location", "Exact scope statement", "Issue, expiry, and surveillance status"],
  },
  {
    label: "Product", icon: PackageCheck, title: "Product and conformity evidence",
    purpose: "Documents connecting a specific product configuration to an applicable specification, inspection, or conformity route.",
    examples: ["Product conformity certificate", "Type-test or classification report", "Approved technical schedule", "Declaration of conformity where appropriate"],
    verify: ["Product and variant are unambiguous", "Standard and edition are stated", "Limitations and conditions are visible", "Issuer and report reference can be checked"],
  },
  {
    label: "Testing", icon: FlaskConical, title: "Laboratory and test reports",
    purpose: "Results from a defined sample, method, condition, and date. A report should not be extended beyond its documented scope.",
    examples: ["Material test result", "Coating or corrosion test", "Mechanical or dimensional test", "Application-specific validation report"],
    verify: ["Sample identity and condition", "Test method and edition", "Laboratory identity and accreditation scope", "Result, uncertainty, limitations, and date"],
  },
  {
    label: "Quality pack", icon: ClipboardCheck, title: "Project quality documentation",
    purpose: "Records produced for a confirmed order or project to demonstrate agreed inspections, release, identity, and packaging.",
    examples: ["Inspection and test plan", "Material or process evidence", "Inspection records", "Release and packing documentation"],
    verify: ["Project and product reference", "Approved acceptance criteria", "Authorized results and status", "Revision and issue control"],
  },
  {
    label: "Tender", icon: FileCheck2, title: "Tender and prequalification evidence",
    purpose: "A structured selection of current company, financial, technical, safety, and experience records required by a specific procurement process.",
    examples: ["Eligibility registrations", "Technical capability submission", "Declarations and undertakings", "Project-specific compliance schedule"],
    verify: ["Tender clause mapping", "Document currency", "Entity and signatory consistency", "Deviations and exclusions disclosed"],
  },
];

export function ComplianceNavigator() {
  const [active, setActive] = useState(0);
  const item = categories[active];
  const Icon = item.icon;
  return (
    <div className="grid gap-4 lg:grid-cols-[17rem_1fr]">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1" role="tablist" aria-label="Document categories">
        {categories.map((category,index)=>{const TabIcon=category.icon;return <button key={category.label} type="button" role="tab" aria-selected={active===index} onClick={()=>setActive(index)} className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-all ${active===index?"border-signal-500 bg-ink-950 text-white":"border-ink-950/10 bg-white hover:border-signal-500/50"}`}><TabIcon aria-hidden="true" className={active===index?"text-signal-500":"text-slate-500"} size={20}/>{category.label}</button>})}
      </div>
      <AnimatePresence mode="wait"><motion.div key={item.label} role="tabpanel" className="grid overflow-hidden rounded-3xl border border-ink-950/10 bg-white md:grid-cols-[.8fr_1.2fr]" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}><div className="relative overflow-hidden bg-ink-950 p-8 text-white md:p-10"><div className="industrial-grid absolute inset-0 opacity-45" aria-hidden="true"/><div className="relative"><Icon aria-hidden="true" className="text-signal-500" size={32}/><p className="eyebrow mt-12 text-signal-500">{item.label} evidence</p><h3 className="mt-4 text-3xl font-semibold tracking-tight">{item.title}</h3><p className="mt-5 leading-7 text-steel-300">{item.purpose}</p></div></div><div className="grid gap-px bg-ink-950/10 sm:grid-cols-2"><div className="bg-paper-50 p-8"><p className="eyebrow text-slate-500">Typical documents</p><ul className="mt-6 space-y-4">{item.examples.map((entry)=><li key={entry} className="flex gap-3 text-sm leading-6"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-signal-500"/>{entry}</li>)}</ul></div><div className="bg-mist-100 p-8"><p className="eyebrow text-slate-500">Verification points</p><ul className="mt-6 space-y-4">{item.verify.map((entry)=><li key={entry} className="flex gap-3 text-sm leading-6"><BadgeCheck aria-hidden="true" className="mt-0.5 shrink-0 text-success-600" size={17}/>{entry}</li>)}</ul></div></div></motion.div></AnimatePresence>
    </div>
  );
}
