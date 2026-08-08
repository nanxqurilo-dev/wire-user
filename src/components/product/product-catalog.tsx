"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Filter, Search, SlidersHorizontal, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

import { ProductCard } from "@/components/product/product-card";
import { productCategories, productMaterials, products } from "@/content/products";

const pageSize = 6;

export function ProductCatalog() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mobileFilters, setMobileFilters] = useState(false);
  const [searchValue, setSearchValue] = useState(searchParams.get("q") ?? "");
  const category = searchParams.get("category") ?? "all";
  const material = searchParams.get("material") ?? "all";
  const sort = searchParams.get("sort") ?? "featured";
  const requestedPage = Math.max(1, Number(searchParams.get("page") ?? 1) || 1);

  function setParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (!value || value === "all" || (key === "sort" && value === "featured")) params.delete(key); else params.set(key, value);
    if (key !== "page") params.delete("page");
    router.replace(`${pathname}${params.size ? `?${params.toString()}` : ""}`, { scroll: false });
  }

  const filtered = useMemo(() => {
    const query = (searchParams.get("q") ?? "").toLowerCase().trim();
    const result = products.filter((product) => {
      const matchesQuery = !query || `${product.name} ${product.model} ${product.category} ${product.shortDescription}`.toLowerCase().includes(query);
      return matchesQuery && (category === "all" || product.category === category) && (material === "all" || product.material.includes(material as never));
    });
    return result.toSorted((a, b) => {
      if (sort === "name-asc") return a.name.localeCompare(b.name);
      if (sort === "name-desc") return b.name.localeCompare(a.name);
      if (sort === "category") return a.category.localeCompare(b.category);
      return products.indexOf(a) - products.indexOf(b);
    });
  }, [category, material, searchParams, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const page = Math.min(requestedPage, totalPages);
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);
  const activeFilters = Number(category !== "all") + Number(material !== "all") + Number(Boolean(searchParams.get("q")));

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-ink-950/15 pb-7 lg:flex-row lg:items-center lg:justify-between">
        <form className="relative w-full lg:max-w-md" onSubmit={(event) => { event.preventDefault(); setParam("q", searchValue.trim()); }} role="search">
          <label className="sr-only" htmlFor="product-search">Search products</label>
          <Search aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={19} />
          <input id="product-search" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} className="h-13 w-full rounded-xl border border-ink-950/15 bg-white pl-12 pr-24 text-sm outline-none transition focus:border-signal-500" placeholder="Search product or system" />
          <button className="absolute right-2 top-2 rounded-lg bg-ink-950 px-4 py-2 text-xs font-semibold text-white" type="submit">Search</button>
        </form>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-500"><strong className="text-ink-950">{filtered.length}</strong> configurations</p>
          <button type="button" className="button border border-ink-950/15 bg-white lg:hidden" onClick={() => setMobileFilters(true)}><Filter aria-hidden="true" size={17} /> Filters {activeFilters > 0 && <span className="rounded-full bg-signal-600 px-2 py-0.5 text-[0.65rem] text-white">{activeFilters}</span>}</button>
          <label className="sr-only" htmlFor="product-sort">Sort products</label>
          <select id="product-sort" className="h-13 min-w-0 flex-1 rounded-xl border border-ink-950/15 bg-white px-3 text-sm font-semibold sm:flex-none sm:px-4" value={sort} onChange={(event) => setParam("sort", event.target.value)}>
            <option value="featured">Featured</option><option value="name-asc">Name A–Z</option><option value="name-desc">Name Z–A</option><option value="category">Category</option>
          </select>
        </div>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[15rem_1fr]">
        <aside className="hidden lg:block"><Filters category={category} material={material} setParam={setParam} /></aside>
        <div>
          {activeFilters > 0 && <div className="mb-6 flex flex-wrap items-center gap-2"><span className="text-xs font-semibold text-slate-500">Active:</span>{searchParams.get("q") && <Chip label={`“${searchParams.get("q")}”`} onClear={() => { setSearchValue(""); setParam("q", ""); }} />}{category !== "all" && <Chip label={category} onClear={() => setParam("category", "all")} />}{material !== "all" && <Chip label={material} onClear={() => setParam("material", "all")} />}</div>}
          {visible.length > 0 ? (
            <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{visible.map((product) => <motion.div layout key={product.slug}><ProductCard product={product} /></motion.div>)}</motion.div>
          ) : (
            <div className="rounded-2xl border border-ink-950/10 bg-white px-6 py-20 text-center"><SlidersHorizontal aria-hidden="true" className="mx-auto text-slate-500" size={32} /><h2 className="mt-5 text-2xl font-semibold">No matching systems</h2><p className="mt-3 text-slate-700">Try a broader search or clear the current filters.</p><button className="button button-primary mt-7" type="button" onClick={() => { setSearchValue(""); router.replace(pathname); }}>Clear filters</button></div>
          )}
          {totalPages > 1 && <nav className="mt-10 grid grid-cols-[1fr_auto_1fr] items-center gap-2 border-t border-ink-950/15 pt-7" aria-label="Product pagination"><button disabled={page === 1} onClick={() => setParam("page", String(page - 1))} className="button justify-self-start border border-ink-950/15 bg-white px-3 disabled:cursor-not-allowed disabled:opacity-40 sm:px-5" type="button"><ChevronLeft aria-hidden="true" size={17} /> <span className="hidden sm:inline">Previous</span></button><span className="font-mono text-[.65rem] text-slate-500 sm:text-xs">Page {page} / {totalPages}</span><button disabled={page === totalPages} onClick={() => setParam("page", String(page + 1))} className="button justify-self-end border border-ink-950/15 bg-white px-3 disabled:cursor-not-allowed disabled:opacity-40 sm:px-5" type="button"><span className="hidden sm:inline">Next</span> <ChevronRight aria-hidden="true" size={17} /></button></nav>}
        </div>
      </div>

      <AnimatePresence>{mobileFilters && <motion.div className="fixed inset-0 z-[70] bg-ink-950/45 backdrop-blur-sm lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileFilters(false)}><motion.div className="absolute bottom-0 left-0 right-0 max-h-[85svh] overflow-auto rounded-t-3xl bg-paper-50 p-6" initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} onClick={(event) => event.stopPropagation()}><div className="mb-7 flex items-center justify-between"><h2 className="text-xl font-semibold">Filter systems</h2><button type="button" onClick={() => setMobileFilters(false)} aria-label="Close filters" className="flex h-11 w-11 items-center justify-center rounded-lg border border-ink-950/15"><X aria-hidden="true" size={20} /></button></div><Filters category={category} material={material} setParam={setParam} /><button className="button button-primary mt-8 w-full" type="button" onClick={() => setMobileFilters(false)}>Show {filtered.length} products</button></motion.div></motion.div>}</AnimatePresence>
    </div>
  );
}

function Filters({ category, material, setParam }: { category: string; material: string; setParam: (key: string, value: string) => void }) {
  return <div className="space-y-9"><fieldset><legend className="eyebrow mb-4 text-slate-500">Category</legend><div className="space-y-1"><FilterButton label="All systems" active={category === "all"} onClick={() => setParam("category", "all")} />{productCategories.map((item) => <FilterButton key={item} label={item} active={category === item} onClick={() => setParam("category", item)} />)}</div></fieldset><fieldset><legend className="eyebrow mb-4 text-slate-500">Material</legend><div className="space-y-1"><FilterButton label="All materials" active={material === "all"} onClick={() => setParam("material", "all")} />{productMaterials.map((item) => <FilterButton key={item} label={item} active={material === item} onClick={() => setParam("material", item)} />)}</div></fieldset></div>;
}
function FilterButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) { return <button type="button" onClick={onClick} className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${active ? "bg-ink-950 font-semibold text-white" : "text-slate-700 hover:bg-white"}`}><span>{label}</span><span className={`h-2 w-2 rounded-full ${active ? "bg-signal-500" : "bg-steel-300"}`} /></button>; }
function Chip({ label, onClear }: { label: string; onClear: () => void }) { return <button type="button" onClick={onClear} className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-3 py-1.5 text-xs text-white">{label}<X aria-hidden="true" size={13} /></button>; }
