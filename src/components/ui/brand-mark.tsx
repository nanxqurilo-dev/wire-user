import Link from "next/link";

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className="group inline-flex items-center gap-3 rounded-sm" href="/" aria-label="Aegis Grid Systems, home">
      <svg aria-hidden="true" className="h-9 w-9 shrink-0" viewBox="0 0 36 36" fill="none">
        <path d="M3 3H33V33H3V3Z" stroke={inverse ? "white" : "#08111C"} strokeWidth="2" />
        <path d="M10 27L18 8L26 27" stroke="#F06424" strokeWidth="2.5" strokeLinejoin="bevel" />
        <path d="M13 21H23" stroke={inverse ? "white" : "#08111C"} strokeWidth="2" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`text-[0.93rem] font-extrabold tracking-[-0.025em] ${inverse ? "text-white" : "text-ink-950"}`}>AEGIS GRID</span>
        <span className={`mt-1 font-mono text-[0.54rem] tracking-[0.2em] ${inverse ? "text-steel-300" : "text-slate-500"}`}>SYSTEMS</span>
      </span>
    </Link>
  );
}
