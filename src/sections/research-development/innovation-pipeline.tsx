"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Box, CheckCircle2, Compass, Factory, FlaskConical, Gauge, Lightbulb } from "lucide-react";
import { useState } from "react";

const stages = [
  { number: "01", short: "Frame", icon: Compass, title: "Frame the problem worth solving", copy: "Translate the operating environment, user need, installation constraint, performance gap, and commercial context into a clear development brief.", questions: ["What outcome must improve?", "Which constraint is truly fixed?", "How will success be recognized?"], output: "Approved development brief" },
  { number: "02", short: "Explore", icon: Lightbulb, title: "Generate and compare concepts", copy: "Explore geometry, material, connection, finish, installation, packaging, and manufacturing routes without locking onto the first plausible answer.", questions: ["Which principles could solve it?", "What tradeoffs does each introduce?", "What can be reused or simplified?"], output: "Ranked concept directions" },
  { number: "03", short: "Prototype", icon: Box, title: "Make the idea testable", copy: "Create representative samples, fixtures, mockups, or limited builds that expose the highest-risk assumptions before full industrial commitment.", questions: ["What must the prototype represent?", "Which risks need physical evidence?", "What can remain simulated?"], output: "Controlled prototype plan" },
  { number: "04", short: "Validate", icon: FlaskConical, title: "Test against defined intent", copy: "Use fit-for-purpose checks to compare the prototype with the acceptance logic in the development brief, recording both expected and unexpected behavior.", questions: ["Does the method reflect real use?", "Are results repeatable enough?", "What failed, changed, or surprised us?"], output: "Validation evidence and learning" },
  { number: "05", short: "Engineer", icon: Gauge, title: "Resolve the production definition", copy: "Translate a promising concept into controlled geometry, tolerances, materials, tooling needs, inspection characteristics, handling, and supporting documentation.", questions: ["Can production repeat it?", "Can quality verify it?", "Can installation use it reliably?"], output: "Design and process definition" },
  { number: "06", short: "Industrialize", icon: Factory, title: "Move from prototype to controlled flow", copy: "Plan tooling, trial production, first-piece review, process checks, packaging, training, and release criteria before routine manufacture.", questions: ["Is the process capable and clear?", "Are handoffs and status visible?", "Is evidence ready for release?"], output: "Production-readiness decision" },
  { number: "07", short: "Learn", icon: CheckCircle2, title: "Capture feedback and control change", copy: "Monitor early production and application feedback, distinguish correction from improvement, and update controlled definitions through authorized change.", questions: ["What does early use reveal?", "Which change is justified?", "Where should learning be retained?"], output: "Controlled improvement record" },
];

export function InnovationPipeline() {
  const [active, setActive] = useState(0);
  const stage = stages[active];
  const Icon = stage.icon;
  return (
    <div className="grid gap-4 lg:grid-cols-[17rem_1fr]">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-1" role="tablist" aria-label="Innovation stages">
        {stages.map((item,index)=><button key={item.number} type="button" role="tab" aria-selected={active===index} onClick={()=>setActive(index)} className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all ${active===index?"border-signal-500 bg-ink-950 text-white":"border-ink-950/10 bg-white hover:border-signal-500/50"}`}><span className={`font-mono text-xs ${active===index?"text-signal-500":"text-slate-500"}`}>{item.number}</span><span className="text-sm font-semibold">{item.short}</span><span className={`ml-auto hidden h-2 w-2 rounded-full sm:block ${active===index?"bg-signal-500":"bg-steel-300"}`}/></button>)}
      </div>
      <AnimatePresence mode="wait"><motion.div key={stage.number} role="tabpanel" className="grid overflow-hidden rounded-3xl border border-ink-950/10 bg-white md:grid-cols-[.9fr_1.1fr]" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}><div className="relative overflow-hidden bg-ink-950 p-8 text-white md:p-10"><div className="industrial-grid absolute inset-0 opacity-45" aria-hidden="true"/><div className="relative"><div className="flex items-start justify-between"><span className="font-mono text-7xl text-white/10">{stage.number}</span><Icon aria-hidden="true" className="text-signal-500" size={31}/></div><p className="eyebrow mt-12 text-signal-500">{stage.short}</p><h3 className="mt-4 text-3xl font-semibold tracking-tight">{stage.title}</h3><p className="mt-5 leading-7 text-steel-300">{stage.copy}</p></div></div><div className="flex flex-col justify-between p-8 md:p-10"><div><p className="eyebrow text-slate-500">Questions at this gate</p><ul className="mt-6 space-y-4">{stage.questions.map((question)=><li key={question} className="flex gap-3 text-sm leading-6"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-signal-500"/>{question}</li>)}</ul></div><div className="mt-10 border-t border-ink-950/15 pt-6"><p className="eyebrow text-slate-500">Gate output</p><p className="mt-3 font-semibold">{stage.output}</p></div></div></motion.div></AnimatePresence>
    </div>
  );
}
