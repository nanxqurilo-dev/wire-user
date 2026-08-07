import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { footerNavigation } from "@/constants/navigation";
import { BrandMark } from "@/components/ui/brand-mark";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink-950 text-white">
      <div className="container-shell border-b border-white/10 py-14 md:py-20">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow text-signal-500">Start with the site</p>
            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-balance md:text-5xl">
              Bring us the perimeter challenge. We’ll engineer the way forward.
            </h2>
          </div>
          <Link className="button button-primary" href="/request-a-quote">
            Brief our team <ArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </div>

      <div className="container-shell grid gap-12 py-14 md:grid-cols-[1.2fr_2fr] md:py-20">
        <div>
          <BrandMark inverse />
          <p className="mt-6 max-w-sm text-sm leading-6 text-steel-300">
            Engineered barrier and fencing systems for demanding industrial and infrastructure environments.
          </p>
          <Link className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-signal-500 hover:text-signal-200" href="/contact">
            Contact our team <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
        <nav className="grid grid-cols-2 gap-10 sm:grid-cols-3" aria-label="Footer navigation">
          {footerNavigation.map((group) => (
            <div key={group.heading}>
              <p className="eyebrow text-slate-500">{group.heading}</p>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => <li key={item.href}><Link className="text-sm text-steel-300 transition-colors hover:text-white" href={item.href}>{item.label}</Link></li>)}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-3 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Aegis Grid Systems. All rights reserved.</p>
          <p>Precision at the perimeter.</p>
        </div>
      </div>
    </footer>
  );
}
