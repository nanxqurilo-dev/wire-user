"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Search, X } from "lucide-react";
import { useId, useMemo, useState } from "react";
import { faqCategories, faqs, type FaqCategory } from "@/content/faqs";

export function FaqBrowser() {
  const [category, setCategory] = useState<"All" | FaqCategory>("All");
  const [query, setQuery] = useState("");
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqs[0].question);
  const headingId = useId();
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = useMemo(
    () => faqs.filter((faq) =>
      (category === "All" || faq.category === category) &&
      (!normalizedQuery || `${faq.question} ${faq.answer} ${faq.category}`.toLowerCase().includes(normalizedQuery)),
    ),
    [category, normalizedQuery],
  );

  function resetFilters() {
    setCategory("All");
    setQuery("");
    setOpenQuestion(faqs[0].question);
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16">
      <aside>
        <div className="lg:sticky lg:top-28">
          <p className="eyebrow text-slate-500">Browse topics</p>
          <div className="mt-5 flex gap-2 overflow-x-auto pb-2 lg:flex-col" aria-label="FAQ categories">
            {faqCategories.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={category === item}
                onClick={() => { setCategory(item); setOpenQuestion(null); }}
                className={`flex min-h-11 shrink-0 items-center justify-between rounded-lg px-4 text-left text-sm font-semibold transition-colors ${category === item ? "bg-ink-950 text-white" : "border border-ink-950/10 bg-white text-slate-700 hover:border-signal-500/60 hover:text-ink-950"}`}
              >
                {item}
                <span className="ml-5 font-mono text-[10px] opacity-60">
                  {item === "All" ? faqs.length : faqs.filter((faq) => faq.category === item).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </aside>

      <div>
        <label className="relative block">
          <span className="sr-only">Search frequently asked questions</span>
          <Search aria-hidden="true" className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="form-input form-input--with-icons h-14"
            placeholder="Search products, delivery, inspections…"
            aria-describedby={headingId}
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-ink-950" aria-label="Clear FAQ search">
              <X aria-hidden="true" size={18} />
            </button>
          )}
        </label>
        <div id={headingId} className="mt-5 flex items-center justify-between border-b border-ink-950/15 pb-5" aria-live="polite">
          <p className="text-sm text-slate-700"><strong className="text-ink-950">{filtered.length}</strong> {filtered.length === 1 ? "answer" : "answers"}</p>
          {(query || category !== "All") && <button type="button" onClick={resetFilters} className="text-sm font-semibold text-signal-600 hover:text-signal-500">Reset filters</button>}
        </div>

        <AnimatePresence mode="popLayout">
          {filtered.length ? (
            <motion.div layout className="divide-y divide-ink-950/15">
              {filtered.map((faq) => {
                const isOpen = openQuestion === faq.question;
                const panelId = `faq-${faqs.indexOf(faq)}`;
                return (
                  <motion.article layout key={faq.question} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
                    <h2>
                      <button
                        type="button"
                        className="group flex w-full items-start justify-between gap-6 py-7 text-left"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenQuestion(isOpen ? null : faq.question)}
                      >
                        <span><span className="eyebrow block text-signal-600">{faq.category}</span><span className="mt-3 block text-xl font-semibold leading-7 tracking-[-.02em] md:text-2xl">{faq.question}</span></span>
                        <span className={`mt-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition ${isOpen ? "rotate-180 border-signal-600 bg-signal-600 text-white" : "border-ink-950/15 group-hover:border-signal-500"}`}><ChevronDown aria-hidden="true" size={17} /></span>
                      </button>
                    </h2>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div id={panelId} role="region" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                          <p className="max-w-3xl pb-8 text-base leading-7 text-slate-700 md:text-lg md:leading-8">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                );
              })}
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 rounded-2xl border border-ink-950/10 bg-white px-6 py-16 text-center">
              <Search aria-hidden="true" className="mx-auto text-slate-500" size={30} />
              <h2 className="mt-5 text-2xl font-semibold">No matching answer</h2>
              <p className="mx-auto mt-3 max-w-md leading-7 text-slate-700">Try a broader term or send the project question directly to our team.</p>
              <button type="button" onClick={resetFilters} className="button button-primary mt-7">Clear filters</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
