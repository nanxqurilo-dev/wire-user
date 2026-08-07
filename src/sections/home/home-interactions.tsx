"use client";

import { AnimatePresence, motion, useInView, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ delay, duration: 0.65 }}>
      {children}
    </motion.div>
  );
}

export function HeroParallax({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  return <motion.div ref={ref} style={{ y, scale }} className="absolute inset-0 will-change-transform">{children}</motion.div>;
}

const processSteps = [
  ["01", "Project intelligence", "We map the site, operating conditions, interface points, and project constraints."],
  ["02", "System engineering", "Materials, geometry, finish, and accessories are configured around the requirement."],
  ["03", "Controlled production", "Defined process parameters keep forming, joining, and finishing consistent."],
  ["04", "Quality release", "Inspection records and dispatch checks confirm the agreed specification."],
  ["05", "Delivery support", "Packaging, sequencing, documentation, and installation coordination close the loop."],
];

export function ProcessExplorer() {
  const [active, setActive] = useState(0);
  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-2" role="tablist" aria-label="Manufacturing stages">
        {processSteps.map(([number, title], index) => (
          <button key={number} type="button" role="tab" aria-selected={active === index} aria-controls="process-panel" onClick={() => setActive(index)} className={`group flex w-full items-center gap-5 rounded-xl border px-5 py-4 text-left transition-all ${active === index ? "border-signal-500 bg-white shadow-[0_14px_36px_rgba(8,17,28,0.08)]" : "border-transparent hover:bg-white/70"}`}>
            <span className={`font-mono text-xs ${active === index ? "text-signal-600" : "text-slate-500"}`}>{number}</span>
            <span className="font-semibold">{title}</span>
            <span className={`ml-auto h-2 w-2 rounded-full transition-colors ${active === index ? "bg-signal-500" : "bg-steel-300"}`} />
          </button>
        ))}
      </div>
      <div id="process-panel" role="tabpanel" className="relative min-h-80 overflow-hidden rounded-3xl bg-ink-950 p-8 text-white md:p-12">
        <div className="industrial-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <AnimatePresence mode="wait">
          <motion.div key={active} className="relative flex h-full flex-col justify-between" initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
            <span className="font-mono text-6xl text-white/10 md:text-8xl">{processSteps[active][0]}</span>
            <div>
              <p className="eyebrow text-signal-500">Active stage</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">{processSteps[active][1]}</h3>
              <p className="mt-4 max-w-lg text-base leading-7 text-steel-300">{processSteps[active][2]}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

const stats = [
  { value: 5, suffix: "", label: "Quality gates across the production journey" },
  { value: 4, suffix: "", label: "Core system families configured around site needs" },
  { value: 8, suffix: "", label: "Industrial environments supported by our portfolio" },
  { value: 1, suffix: "", label: "Accountable partner from specification to dispatch" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const rawValue = useMotionValue(0);
  const springValue = useSpring(rawValue, { stiffness: 80, damping: 20 });

  useEffect(() => {
    if (inView) rawValue.set(value);
    return springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = `${Math.round(latest)}${suffix}`;
    });
  }, [inView, rawValue, springValue, suffix, value]);

  return <span ref={ref}>0{suffix}</span>;
}

export function StatsGrid() {
  return (
    <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="border-b border-r border-white/10 p-7 md:p-9">
          <p className="font-mono text-5xl font-medium tracking-[-0.05em] text-white md:text-6xl"><Counter value={stat.value} suffix={stat.suffix} /></p>
          <p className="mt-7 text-sm leading-6 text-steel-300">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

const milestones = [
  ["Foundation", "Materials discipline", "Build every system on controlled inputs and clear specification."],
  ["Integration", "System thinking", "Connect barriers, support structures, access points, and site realities."],
  ["Scale", "Repeatable delivery", "Design production and documentation for dependable project execution."],
  ["Forward", "Smarter perimeters", "Develop adaptable systems with better lifecycle and monitoring readiness."],
];

export function Timeline() {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="relative grid gap-3 md:grid-cols-4">
        <div className="absolute left-0 right-0 top-5 hidden h-px bg-ink-950/15 md:block" aria-hidden="true" />
        {milestones.map(([phase], index) => (
          <button key={phase} type="button" onClick={() => setActive(index)} className="group relative flex items-center gap-4 text-left md:block" aria-pressed={active === index}>
            <span className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border font-mono text-xs transition-all ${active === index ? "border-signal-500 bg-signal-500 text-white shadow-[0_0_0_6px_rgba(240,100,36,0.14)]" : "border-ink-950/15 bg-paper-50 text-slate-500 group-hover:border-signal-500"}`}>0{index + 1}</span>
            <span className={`mt-4 block text-sm font-semibold md:ml-0 ${active === index ? "text-signal-600" : "text-slate-500"}`}>{phase}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={active} className="mt-12 grid gap-5 border-l-2 border-signal-500 pl-7 md:grid-cols-[0.6fr_1fr] md:pl-10" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
          <h3 className="text-3xl font-semibold tracking-tight">{milestones[active][1]}</h3>
          <p className="max-w-xl text-lg leading-8 text-slate-700">{milestones[active][2]}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const faqs = [
  ["How do I choose the right perimeter system?", "Start with the site rather than a product name. Threat profile, boundary length, terrain, corrosion exposure, access frequency, and project standards shape the right system combination."],
  ["Can systems be configured for project-specific dimensions?", "Yes. Product geometry, material, coating, support spacing, packaging, and accessory requirements can be reviewed against the project brief before quotation."],
  ["What should an RFQ include?", "Share the site type, perimeter length, preferred system if known, drawings or BOQ, environmental conditions, delivery location, required timeline, and applicable standards."],
  ["Do you support technical submittals?", "The intended workflow supports product data, specification schedules, quality documentation, and installation guidance appropriate to the confirmed scope."],
  ["Can multiple products be supplied as one perimeter package?", "A complete project may combine mesh, deterrent barriers, support posts, outriggers, tensioning components, gates, and installation hardware. We can review these as one coordinated requirement."],
  ["How early should your team be involved?", "Early engagement is useful when the perimeter interfaces with civil works, access control, drainage, terrain changes, or phased construction. It reduces redesign and procurement uncertainty."],
];

export function FAQList() {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-ink-950/15 border-y border-ink-950/15">
      {faqs.map(([question, answer], index) => {
        const expanded = open === index;
        return (
          <div key={question}>
            <h3>
              <button type="button" className="flex w-full items-center gap-5 py-6 text-left text-base font-semibold md:py-7 md:text-lg" aria-expanded={expanded} aria-controls={`faq-${index}`} onClick={() => setOpen(expanded ? -1 : index)}>
                <span className="font-mono text-xs text-signal-600">0{index + 1}</span>
                <span>{question}</span>
                <ChevronDown aria-hidden="true" className={`ml-auto shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`} size={20} />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div id={`faq-${index}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <p className="max-w-3xl pb-7 pl-10 text-base leading-7 text-slate-700 md:pl-12">{answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
