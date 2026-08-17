import { ArrowRight, ArrowUpRight, Mail, MapPin } from "lucide-react";
import Link from "next/link";

import { footerNavigation } from "@/constants/navigation";
import { BrandMark } from "@/components/ui/brand-mark";
import { contactDetails } from "@/constants/contact";
import { SocialMark, WhatsAppMark } from "@/components/ui/social-mark";

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
          <div className="mt-7 space-y-3 text-sm text-steel-300">
            <a className="flex items-center gap-3 hover:text-white" href="https://wa.me/919315726454" target="_blank" rel="noreferrer"><WhatsAppMark />{contactDetails.phone.label}</a>
            <a className="flex items-start gap-3 break-all hover:text-white" href={contactDetails.email.href}><Mail aria-hidden="true" className="mt-0.5 shrink-0 text-signal-500" size={16} />{contactDetails.email.label}</a>
            <p className="flex max-w-sm items-start gap-3 leading-6"><MapPin aria-hidden="true" className="mt-1 shrink-0 text-signal-500" size={16} />{contactDetails.address}</p>
          </div>
          <div className="mt-6 flex gap-2">
            {contactDetails.socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={`${social.label}: ${social.handle}`} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-steel-300 transition hover:-translate-y-0.5 hover:border-signal-500 hover:text-white"><SocialMark platform={social.label}/></a>)}
          </div>
          <Link className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-signal-500 hover:text-signal-200" href="/contact">
            Contact our team <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
        <nav className="grid grid-cols-1 gap-10 min-[400px]:grid-cols-2 sm:grid-cols-3" aria-label="Footer navigation">
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
          <p>© {year} Corvex Steel Wires. All rights reserved.</p>
          <p>Precision at the perimeter.</p>
        </div>
      </div>
    </footer>
  );
}
