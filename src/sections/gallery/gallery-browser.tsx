"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { galleryCategories, galleryItems, type GalleryCategory } from "@/content/gallery";

export function GalleryBrowser() {
  const [category, setCategory] = useState<GalleryCategory>("All");
  const [activeId, setActiveId] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const visible = category === "All" ? galleryItems : galleryItems.filter((item) => item.category === category);
  const activeIndex = activeId ? visible.findIndex((item) => item.id === activeId) : -1;
  const active = activeIndex >= 0 ? visible[activeIndex] : null;

  function navigate(direction: 1 | -1) {
    if (!visible.length || activeIndex < 0) return;
    setActiveId(visible[(activeIndex + direction + visible.length) % visible.length].id);
  }

  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
      if (event.key === "ArrowRight") navigate(1);
      if (event.key === "ArrowLeft") navigate(-1);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", onKeyDown); };
  });

  function changeCategory(next: GalleryCategory) {
    setCategory(next);
    setActiveId(null);
  }

  return (
    <div>
      <div className="flex flex-col gap-5 border-b border-ink-950/15 pb-7 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Gallery categories">{galleryCategories.map((item)=><button key={item} type="button" role="tab" aria-selected={category===item} onClick={()=>changeCategory(item)} className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${category===item?"bg-ink-950 text-white":"border border-ink-950/10 bg-white text-slate-700 hover:border-signal-500/50"}`}>{item}</button>)}</div>
        <p className="shrink-0 font-mono text-xs text-slate-500">{visible.length} visual studies</p>
      </div>

      <motion.div layout className="mt-8 grid auto-rows-[12rem] gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((item,index)=><motion.button layout key={item.id} type="button" onClick={()=>setActiveId(item.id)} className={`group relative isolate overflow-hidden rounded-2xl bg-ink-950 text-left ${item.format==="wide"?"sm:col-span-2":item.format==="tall"?"row-span-2":"row-span-2"}`} initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.97}} transition={{delay:(index%4)*.035}} aria-label={`Open ${item.title}`}><Image src={item.image} alt={item.alt} fill sizes="(min-width:1024px) 66vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"/><div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent"/><span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-ink-950/50 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100"><Expand aria-hidden="true" size={18}/></span><div className="absolute bottom-0 left-0 right-0 p-6 text-white"><p className="eyebrow text-signal-500">{item.category}</p><h2 className="mt-3 text-2xl font-semibold tracking-tight">{item.title}</h2></div></motion.button>)}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {active && <motion.div className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-xl md:p-8" role="dialog" aria-modal="true" aria-label={active.title} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setActiveId(null)}><button ref={closeRef} type="button" onClick={()=>setActiveId(null)} className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white" aria-label="Close gallery"><X aria-hidden="true" size={22}/></button><button type="button" onClick={(event)=>{event.stopPropagation();navigate(-1)}} className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-ink-950/65 text-white md:left-8" aria-label="Previous image"><ChevronLeft aria-hidden="true" size={23}/></button><motion.figure key={active.id} className="mx-auto w-full max-w-6xl" initial={{opacity:0,scale:.98}} animate={{opacity:1,scale:1}} onClick={(event)=>event.stopPropagation()}><div className="relative aspect-[16/10] max-h-[72svh] overflow-hidden rounded-2xl bg-black"><Image src={active.image} alt={active.alt} fill sizes="90vw" className="object-contain"/></div><figcaption className="mt-5 flex flex-col gap-3 text-white md:flex-row md:items-end md:justify-between"><div><p className="eyebrow text-signal-500">{active.category} · {String(activeIndex+1).padStart(2,"0")} / {String(visible.length).padStart(2,"0")}</p><h2 className="mt-2 text-2xl font-semibold">{active.title}</h2></div><p className="max-w-lg text-sm leading-6 text-steel-300">{active.note}</p></figcaption></motion.figure><button type="button" onClick={(event)=>{event.stopPropagation();navigate(1)}} className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-ink-950/65 text-white md:right-8" aria-label="Next image"><ChevronRight aria-hidden="true" size={23}/></button></motion.div>}
      </AnimatePresence>
    </div>
  );
}
