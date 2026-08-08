"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Clock3, ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { mainNavigation } from "@/constants/navigation";
import { BrandMark } from "@/components/ui/brand-mark";
import { SocialMark } from "@/components/ui/social-mark";
import { contactDetails } from "@/constants/contact";

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) setOpenMenu(null);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-ink-950/10 bg-paper-50/95 backdrop-blur-xl">
      <div className="hidden border-b border-white/10 bg-ink-950 text-white lg:block">
        <div className="container-shell flex h-10 items-center justify-between gap-8 text-xs">
          <div className="flex items-center gap-6 text-steel-300">
            <a className="flex items-center gap-2 transition-colors hover:text-white" href={contactDetails.phone.href}><Phone aria-hidden="true" className="text-signal-500" size={14} />{contactDetails.phone.label}</a>
            <a className="flex items-center gap-2 transition-colors hover:text-white" href={contactDetails.email.href}><Mail aria-hidden="true" className="text-signal-500" size={14} />{contactDetails.email.label}</a>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2 text-steel-300"><Clock3 aria-hidden="true" className="text-signal-500" size={14} />{contactDetails.hours}</span>
            <nav className="flex items-center gap-1.5" aria-label="Social media">
              {contactDetails.socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={`${social.label}: ${social.handle}`} className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-steel-300 transition hover:border-signal-500 hover:bg-white/5 hover:text-white"><SocialMark platform={social.label} /></a>)}
            </nav>
          </div>
        </div>
      </div>
      <div className="container-shell flex h-20 items-center justify-between gap-8">
        <BrandMark />

        <nav className="hidden h-full items-center lg:flex" aria-label="Primary navigation">
          {mainNavigation.map((item) => {
            const hasMenu = Boolean(item.groups?.length);
            const isOpen = openMenu === item.label;
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return hasMenu ? (
              <button
                key={item.label}
                className={`flex h-full items-center gap-1.5 px-4 text-sm font-semibold transition-colors hover:text-signal-600 ${active || isOpen ? "text-signal-600" : "text-ink-950"}`}
                type="button"
                aria-expanded={isOpen}
                aria-controls={`menu-${item.label.toLowerCase()}`}
                onClick={() => setOpenMenu(isOpen ? null : item.label)}
              >
                {item.label}
                <ChevronDown aria-hidden="true" className={`transition-transform ${isOpen ? "rotate-180" : ""}`} size={15} />
              </button>
            ) : (
              <Link key={item.label} onClick={() => setOpenMenu(null)} className={`flex h-full items-center px-4 text-sm font-semibold transition-colors hover:text-signal-600 ${active ? "text-signal-600" : ""}`} href={item.href}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link className="button button-primary hidden sm:inline-flex" href="/request-a-quote">
            Request a quote <ArrowRight aria-hidden="true" size={17} />
          </Link>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-ink-950/15 text-ink-950 lg:hidden"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {openMenu && (
          <MegaMenu itemLabel={openMenu} onNavigate={() => setOpenMenu(null)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && <MobileNavigation onNavigate={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </header>
  );
}

function MegaMenu({ itemLabel, onNavigate }: { itemLabel: string; onNavigate: () => void }) {
  const item = mainNavigation.find((entry) => entry.label === itemLabel);
  if (!item?.groups) return null;

  return (
    <motion.div
      id={`menu-${item.label.toLowerCase()}`}
      className="absolute inset-x-0 top-full hidden border-y border-ink-950/10 bg-paper-50 shadow-[0_24px_80px_rgba(8,17,28,0.12)] lg:block"
      initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
    >
      <div className={`container-shell grid gap-12 py-12 ${item.featured ? "grid-cols-[0.8fr_1.4fr]" : "grid-cols-1"}`}>
        {item.featured && (
          <Link onClick={onNavigate} className="group relative overflow-hidden rounded-2xl bg-ink-950 p-8 text-white" href={item.featured.href}>
            <div className="industrial-grid absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="relative">
              <p className="eyebrow text-signal-500">{item.featured.eyebrow}</p>
              <p className="mt-8 max-w-sm text-2xl font-semibold tracking-tight">{item.featured.title}</p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-steel-300">{item.featured.description}</p>
              <ArrowRight aria-hidden="true" className="mt-8 transition-transform group-hover:translate-x-1" size={20} />
            </div>
          </Link>
        )}
        <div className={`grid gap-10 ${item.groups.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
          {item.groups.map((group) => (
            <div key={group.heading}>
              <p className="eyebrow mb-5 text-slate-500">{group.heading}</p>
              <ul className="space-y-1">
                {group.items.map((link) => (
                  <li key={link.href}>
                    <Link onClick={onNavigate} className="group block rounded-lg px-3 py-3 transition-colors hover:bg-mist-100" href={link.href}>
                      <span className="font-semibold group-hover:text-signal-600">{link.label}</span>
                      {link.description && <span className="mt-1 block text-sm leading-5 text-slate-500">{link.description}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function MobileNavigation({ onNavigate }: { onNavigate: () => void }) {
  return (
    <motion.nav
      id="mobile-navigation" aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 top-20 overflow-y-auto bg-paper-50 px-5 pb-10 pt-4 lg:hidden"
      initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 24 }}
    >
      <ul className="divide-y divide-ink-950/10">
        {mainNavigation.map((item) => (
          <li key={item.label} className="py-5">
            <Link onClick={onNavigate} className="flex items-center justify-between text-xl font-semibold" href={item.href}>
              {item.label}<ArrowRight aria-hidden="true" size={19} />
            </Link>
            {item.groups && (
              <div className="mt-4 grid gap-x-5 gap-y-2 sm:grid-cols-2">
                {item.groups.flatMap((group) => group.items).map((link) => (
                  <Link onClick={onNavigate} key={link.href} className="py-2 text-sm text-slate-700 hover:text-signal-600" href={link.href}>{link.label}</Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      <Link onClick={onNavigate} className="button button-primary mt-8 w-full" href="/request-a-quote">
        Request a quote <ArrowRight aria-hidden="true" size={18} />
      </Link>
    </motion.nav>
  );
}
