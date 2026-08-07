import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <section className="relative isolate min-h-[72svh] overflow-hidden bg-ink-950 text-white">
      <div className="industrial-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="container-shell relative flex min-h-[72svh] flex-col justify-end pb-16 pt-40 md:pb-24 md:pt-52">
        <p className="eyebrow mb-7 text-signal-500">Engineered perimeter systems</p>
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_22rem]">
          <h1 className="max-w-5xl text-display font-semibold tracking-[-0.055em] text-balance">
            Precision that holds the line.
          </h1>
          <div className="space-y-8 border-l border-white/15 pl-6">
            <p className="text-lg leading-8 text-steel-300">
              Purpose-built barrier and fencing systems for complex industrial,
              infrastructure, and high-security environments.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link className="button button-primary" href="/request-a-quote">
                Discuss a project <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link className="button button-inverse" href="/products">
                Explore systems <ArrowDownRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
