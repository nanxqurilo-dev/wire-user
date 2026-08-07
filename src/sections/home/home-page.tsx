import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Box, Building2, CheckCircle2, CircuitBoard,
  Factory, Fence, FlaskConical, Gauge, Landmark, Leaf, Plane, ScanLine, ShieldCheck,
  Sparkles, TrainFront, Warehouse, Waves,
} from "lucide-react";

import { FAQList, HeroParallax, ProcessExplorer, Reveal, StatsGrid, Timeline } from "./home-interactions";

const products = [
  { number: "01", title: "High-security barriers", copy: "Layered coil, ribbon, and flat-wrap configurations designed for controlled deterrence.", href: "/products/category/high-security-barriers", icon: ShieldCheck },
  { number: "02", title: "Boundary fencing", copy: "Chain-link and welded mesh systems balancing visibility, durability, and project economics.", href: "/products/category/boundary-fencing", icon: Fence },
  { number: "03", title: "Electrified deterrence", copy: "Solar and alarm-ready perimeter configurations for monitored site protection.", href: "/products/category/electrified-deterrence", icon: CircuitBoard },
  { number: "04", title: "Structural components", copy: "Posts, outriggers, brackets, tensioning, and hardware engineered as a coordinated assembly.", href: "/products/category/components", icon: Box },
];

const featured = [
  { name: "HelixGuard C-Series", type: "Concertina barrier system", detail: "Configurable coil geometry · Galvanized or stainless options", icon: Waves },
  { name: "GridLock M-Series", type: "Industrial mesh fencing", detail: "Multiple aperture profiles · Project-ready panels", icon: ScanLine },
  { name: "VectorPost Y-Series", type: "Structural support system", detail: "Engineered angle profiles · Accessory-compatible", icon: Gauge },
];

const industries = [
  { name: "Critical infrastructure", copy: "Layered protection for assets where continuity and access control are non-negotiable.", icon: Landmark },
  { name: "Energy & utilities", copy: "Corrosion-aware systems for generation, transmission, storage, and remote assets.", icon: Sparkles },
  { name: "Transport & logistics", copy: "Long-run boundaries designed around movement, visibility, and complex interfaces.", icon: TrainFront },
  { name: "Manufacturing", copy: "Clear, durable separation for operating plants, warehouses, and industrial campuses.", icon: Factory },
  { name: "Data centers", copy: "A disciplined physical layer for security-led, always-on technology environments.", icon: CircuitBoard },
  { name: "Commercial development", copy: "Architecturally considered perimeter systems for active mixed-use sites.", icon: Building2 },
];

const insights = [
  { tag: "Specification guide", title: "Seven inputs that shape a reliable perimeter specification", read: "6 min read" },
  { tag: "Material note", title: "Galvanized or stainless: selecting for exposure and service conditions", read: "8 min read" },
  { tag: "Project planning", title: "Where perimeter packages interface with civil and access works", read: "5 min read" },
];

export function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-ink-950 text-white">
        <HeroParallax>
          <Image src="/images/home/hero-perimeter.png" alt="Precision-formed steel mesh and barrier coil in a controlled manufacturing environment" fill priority sizes="100vw" className="object-cover object-[62%_center]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#08111c_0%,rgba(8,17,28,.92)_34%,rgba(8,17,28,.2)_72%,rgba(8,17,28,.55)_100%)]" />
          <div className="industrial-grid absolute inset-0 opacity-30" aria-hidden="true" />
        </HeroParallax>
        <div className="container-shell relative flex min-h-[calc(100svh-5rem)] flex-col justify-between pb-8 pt-16 md:pb-10 md:pt-24">
          <div className="flex items-center gap-3 self-start rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs text-steel-300 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-signal-500 shadow-[0_0_0_5px_rgba(240,100,36,.13)]" />
            Built around the requirement, not the catalog
          </div>
          <div className="max-w-5xl py-14">
            <Reveal>
              <p className="eyebrow mb-7 text-signal-500">Precision at the perimeter</p>
              <h1 className="text-display max-w-5xl font-semibold tracking-[-0.06em] text-balance">Protection,<br /><span className="text-steel-300">engineered in.</span></h1>
            </Reveal>
            <Reveal delay={0.1} className="mt-9 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-2xl text-lg leading-8 text-steel-300 md:text-xl">Purpose-built fencing and barrier systems shaped around site risk, operating conditions, and the realities of project delivery.</p>
              <div className="flex flex-wrap gap-3">
                <Link className="button button-primary" href="/request-a-quote">Discuss your project <ArrowRight aria-hidden="true" size={18} /></Link>
                <Link className="button button-inverse" href="/products">Explore systems</Link>
              </div>
            </Reveal>
          </div>
          <div className="flex items-center justify-between border-t border-white/15 pt-6 text-xs text-steel-300">
            <span className="font-mono uppercase tracking-[0.14em]">Scroll to examine</span>
            <ArrowDown aria-hidden="true" className="animate-bounce text-signal-500" size={18} />
          </div>
        </div>
      </section>

      <section className="bg-paper-50 py-20 md:py-32">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <Reveal><p className="eyebrow text-signal-600">One perimeter. Many interfaces.</p></Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-balance md:text-6xl">Security systems work best when every component works as one.</h2>
            <div className="mt-10 grid gap-8 border-t border-ink-950/15 pt-8 md:grid-cols-2">
              <p className="leading-7 text-slate-700">Corvex approaches the perimeter as an engineered assembly—from material and barrier geometry to support structures, site interfaces, documentation, and dispatch sequencing.</p>
              <p className="leading-7 text-slate-700">That gives project teams a clearer path from an operating need to a system that can be specified, procured, installed, and maintained with confidence.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist-100 py-20 md:py-32">
        <div className="container-shell">
          <SectionHeading eyebrow="The Corvex standard" title="Confidence is designed into the process." copy="Four principles connect the factory floor to dependable project outcomes." />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-ink-950/10 md:grid-cols-2 lg:grid-cols-4">
            {[
              [ShieldCheck, "Specification first", "System choices begin with operating needs, exposure, and the project standard."],
              [Factory, "Controlled production", "Defined inputs and production stages support consistent, repeatable output."],
              [FlaskConical, "Quality evidence", "Inspection points are planned around the characteristics that matter to the scope."],
              [Warehouse, "Project readiness", "Packaging, documentation, accessories, and logistics are considered as one delivery."],
            ].map(([Icon, title, copy], index) => {
              const FeatureIcon = Icon as typeof ShieldCheck;
              return <Reveal key={title as string} delay={index * 0.06} className="group bg-paper-50 p-7 transition-colors hover:bg-white md:p-9">
                <FeatureIcon aria-hidden="true" className="text-signal-600 transition-transform group-hover:-translate-y-1" size={28} />
                <h3 className="mt-12 text-xl font-semibold">{title as string}</h3><p className="mt-4 text-sm leading-6 text-slate-700">{copy as string}</p>
              </Reveal>;
            })}
          </div>
        </div>
      </section>

      <section className="bg-paper-50 py-20 md:py-36">
        <div className="container-shell">
          <SectionHeading eyebrow="System portfolio" title="Start with the protection layer." copy="Navigate the portfolio by system role, then refine material, geometry, finish, and supporting components." action="View all products" href="/products" />
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {products.map((product, index) => {
              const Icon = product.icon;
              return <Reveal key={product.title} delay={index * 0.05}>
                <Link href={product.href} className="product-card group relative flex min-h-80 flex-col overflow-hidden rounded-2xl border border-ink-950/10 bg-white p-7 md:p-9">
                  <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full border border-ink-950/10 transition-all duration-500 group-hover:scale-125 group-hover:border-signal-500/40" aria-hidden="true" />
                  <div className="flex items-start justify-between"><span className="font-mono text-xs text-slate-500">{product.number}</span><Icon aria-hidden="true" className="text-signal-600 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" size={34} /></div>
                  <div className="mt-auto"><h3 className="text-3xl font-semibold tracking-tight">{product.title}</h3><p className="mt-4 max-w-lg leading-7 text-slate-700">{product.copy}</p><span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">Explore category <ArrowUpRight aria-hidden="true" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={17} /></span></div>
                </Link>
              </Reveal>;
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink-950 py-20 text-white md:py-32">
        <div className="container-shell">
          <SectionHeading dark eyebrow="Featured configurations" title="Technical clarity at a glance." copy="A product interface designed to make variant, application, and supporting information easier to compare." />
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {featured.map((item, index) => {
              const Icon = item.icon;
              return <Reveal key={item.name} delay={index * 0.07} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all hover:-translate-y-1 hover:border-signal-500/60 hover:bg-white/[0.07]">
                <div className="flex h-48 items-center justify-center rounded-xl border border-white/10 bg-[radial-gradient(circle,rgba(240,100,36,.12),transparent_62%)]"><Icon aria-hidden="true" className="text-steel-300 transition-transform duration-500 group-hover:scale-110 group-hover:text-signal-500" strokeWidth={1} size={92} /></div>
                <p className="eyebrow mt-7 text-signal-500">{item.type}</p><h3 className="mt-3 text-2xl font-semibold">{item.name}</h3><p className="mt-4 text-sm leading-6 text-steel-300">{item.detail}</p>
                <Link className="mt-7 inline-flex items-center gap-2 text-sm font-semibold" href="/products">View configuration <ArrowRight aria-hidden="true" size={16} /></Link>
              </Reveal>;
            })}
          </div>
        </div>
      </section>

      <section className="bg-mist-100 py-20 md:py-32">
        <div className="container-shell">
          <SectionHeading eyebrow="From brief to boundary" title="A visible, controlled manufacturing journey." copy="Explore each stage to see how project information becomes a production-ready system." action="See our process" href="/manufacturing-process" />
          <div className="mt-14"><ProcessExplorer /></div>
        </div>
      </section>

      <section className="bg-paper-50 py-20 md:py-36">
        <div className="container-shell">
          <SectionHeading eyebrow="Industry context" title="Engineered for where it operates." copy="Different sites create different risk, access, exposure, and continuity demands. The system should reflect them." action="Explore industries" href="/industries" />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return <Reveal key={industry.name} delay={index * 0.04}><Link href="/industries" className="group block h-full rounded-2xl border border-ink-950/10 p-7 transition-all hover:-translate-y-1 hover:border-signal-500/50 hover:bg-white hover:shadow-[0_18px_50px_rgba(8,17,28,.08)]"><div className="flex items-center justify-between"><Icon aria-hidden="true" className="text-signal-600" size={26} /><ArrowUpRight aria-hidden="true" className="text-slate-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={18} /></div><h3 className="mt-12 text-xl font-semibold">{industry.name}</h3><p className="mt-3 text-sm leading-6 text-slate-700">{industry.copy}</p></Link></Reveal>;
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink-950 text-white">
        <div className="grid min-h-[42rem] lg:grid-cols-2">
          <div className="relative min-h-[28rem] overflow-hidden lg:min-h-full">
            <Image src="/images/home/manufacturing-floor.png" alt="Engineer inspecting welded steel mesh on a modern production line" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-1000 hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/55 to-transparent" />
          </div>
          <div className="flex items-center px-6 py-16 md:px-14 lg:px-20">
            <Reveal>
              <p className="eyebrow text-signal-500">Infrastructure</p>
              <h2 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] md:text-6xl">Capability you can see. Control you can trace.</h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-steel-300">Production cells, inspection routines, material handling, and dispatch planning are connected around one objective: deliver the agreed system clearly and consistently.</p>
              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 text-sm"><p><span className="block font-mono text-signal-500">01</span><span className="mt-2 block text-steel-300">Dedicated forming and mesh workflows</span></p><p><span className="block font-mono text-signal-500">02</span><span className="mt-2 block text-steel-300">Inspection integrated with production</span></p></div>
              <Link className="button button-inverse mt-10" href="/infrastructure">Explore infrastructure <ArrowRight aria-hidden="true" size={17} /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper-50 py-20 md:py-32">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <Reveal><p className="eyebrow text-signal-600">Quality, made visible</p><h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] md:text-5xl">Release decisions backed by evidence.</h2></Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-px overflow-hidden rounded-2xl bg-ink-950/10 sm:grid-cols-2">
              {[["Material identity", "Confirm inputs against the agreed material and finish."], ["Dimensional control", "Check geometry and critical dimensions through production."], ["Finish integrity", "Review coating, surface condition, and fabrication quality."], ["Dispatch release", "Verify configuration, quantity, packaging, and documentation."]].map(([title, copy], index) => <div key={title} className="bg-mist-100 p-7"><span className="font-mono text-xs text-signal-600">0{index + 1}</span><h3 className="mt-6 font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-700">{copy}</p></div>)}
            </div>
            <Link className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-signal-600" href="/quality-assurance">See the quality framework <ArrowRight aria-hidden="true" size={17} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-900 py-20 text-white md:py-28"><div className="container-shell"><div className="mb-12 flex items-end justify-between gap-8"><div><p className="eyebrow text-signal-500">Designed as one system</p><h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">A focused model for accountable delivery.</h2></div><p className="hidden max-w-sm text-sm leading-6 text-steel-300 md:block">These figures describe our working model—not unverified capacity or customer claims.</p></div><StatsGrid /></div></section>

      <section className="bg-paper-50 py-20 md:py-32"><div className="container-shell"><SectionHeading eyebrow="Capability evolution" title="Build discipline. Add intelligence." copy="Our roadmap keeps the fundamentals visible while evolving the perimeter as a connected, lifecycle-aware system." /><div className="mt-16"><Timeline /></div></div></section>

      <section className="overflow-hidden bg-signal-600 py-6 text-white" aria-label="Markets served"><div className="flex min-w-max animate-[marquee_26s_linear_infinite] gap-12 font-mono text-sm uppercase tracking-[0.18em] motion-reduce:animate-none">{[Factory, Warehouse, Plane, TrainFront, Landmark, Leaf, Factory, Warehouse, Plane, TrainFront, Landmark, Leaf].map((Icon, index) => <span key={index} className="flex items-center gap-4"><Icon aria-hidden="true" size={18} />{["Manufacturing", "Logistics", "Aviation", "Transport", "Institutions", "Agriculture"][index % 6]}</span>)}</div></section>

      <section className="bg-mist-100 py-20 md:py-32"><div className="container-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24"><Reveal><p className="eyebrow text-signal-600">A useful project partner</p><h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] md:text-5xl">What good collaboration should feel like.</h2></Reveal><Reveal delay={0.08}><blockquote className="border-l-2 border-signal-500 pl-7 text-2xl font-medium leading-[1.45] tracking-tight md:pl-10 md:text-4xl">“Clear enough to specify. Controlled enough to trust. Practical enough to deliver.”</blockquote><p className="mt-7 pl-7 text-sm text-slate-500 md:pl-10">The operating standard we set for every project conversation</p><div className="mt-12 grid gap-5 sm:grid-cols-3">{[[CheckCircle2,"Responsive technical review"],[CheckCircle2,"Transparent scope decisions"],[CheckCircle2,"Documentation that travels"]].map(([Icon,text]) => { const Check = Icon as typeof CheckCircle2; return <p key={text as string} className="flex gap-3 text-sm font-semibold"><Check aria-hidden="true" className="shrink-0 text-signal-600" size={19}/>{text as string}</p>;})}</div></Reveal></div></section>

      <section className="bg-paper-50 py-20 md:py-32"><div className="container-shell"><SectionHeading eyebrow="Field notes" title="Better decisions start with better questions." copy="Practical guidance for specifiers, project teams, and procurement leaders." action="View all insights" href="/insights" /><div className="mt-14 grid gap-4 lg:grid-cols-3">{insights.map((item,index)=><Reveal key={item.title} delay={index*.06}><Link href="/insights" className="group flex min-h-80 flex-col rounded-2xl border border-ink-950/10 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(8,17,28,.08)]"><p className="eyebrow text-signal-600">{item.tag}</p><h3 className="mt-8 text-2xl font-semibold leading-snug tracking-tight">{item.title}</h3><div className="mt-auto flex items-center justify-between border-t border-ink-950/10 pt-6 text-xs text-slate-500"><span>{item.read}</span><ArrowUpRight aria-hidden="true" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={18}/></div></Link></Reveal>)}</div></div></section>

      <section className="bg-mist-100 py-20 md:py-32"><div className="container-shell grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24"><Reveal><p className="eyebrow text-signal-600">Common questions</p><h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] md:text-5xl">Clarity before the quote.</h2><p className="mt-6 max-w-sm leading-7 text-slate-700">The strongest enquiry starts with a shared understanding of the site, scope, and system interfaces.</p><Link className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-signal-600" href="/faq">Visit the FAQ <ArrowRight aria-hidden="true" size={17}/></Link></Reveal><Reveal delay={0.08}><FAQList /></Reveal></div></section>

      <section className="relative overflow-hidden bg-ink-950 py-24 text-white md:py-36"><div className="industrial-grid absolute inset-0 opacity-45" aria-hidden="true"/><div className="container-shell relative text-center"><Reveal><p className="eyebrow text-signal-500">Bring us the boundary</p><h2 className="mx-auto mt-7 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-balance md:text-7xl">Turn site constraints into a system you can build.</h2><p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-steel-300">Share the project stage, drawings, environment, quantity, and timeline. We’ll help organize the next technical conversation.</p><div className="mt-10 flex flex-wrap justify-center gap-3"><Link className="button button-primary" href="/request-a-quote">Start a project brief <ArrowRight aria-hidden="true" size={18}/></Link><Link className="button button-inverse" href="/contact">Contact the team</Link></div></Reveal></div></section>
    </>
  );
}

function SectionHeading({ eyebrow, title, copy, action, href, dark = false }: { eyebrow: string; title: string; copy: string; action?: string; href?: string; dark?: boolean }) {
  return (
    <Reveal className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
      <div><p className="eyebrow text-signal-600">{eyebrow}</p><h2 className={`mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-balance md:text-6xl ${dark ? "text-white" : "text-ink-950"}`}>{title}</h2></div>
      <div className="lg:justify-self-end"><p className={`max-w-lg leading-7 ${dark ? "text-steel-300" : "text-slate-700"}`}>{copy}</p>{action && href && <Link className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${dark ? "text-signal-500" : "text-signal-600"}`} href={href}>{action}<ArrowRight aria-hidden="true" size={17}/></Link>}</div>
    </Reveal>
  );
}
