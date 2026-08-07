import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, ArrowRight, Box, CheckCircle2, ChevronRight, Download, FileText,
  Layers3, PackageCheck, ShieldCheck, Wrench,
} from "lucide-react";

import { ProductCard } from "@/components/product/product-card";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductInquiryForm } from "@/components/product/product-inquiry-form";
import { getProduct, products } from "@/content/products";
import { Reveal } from "@/sections/home/home-interactions";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { title: product.name, description: product.shortDescription, url: `/products/${product.slug}`, images: [{ url: product.image, alt: product.alt }] },
  };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = product.related.map(getProduct).filter((item) => item !== undefined);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Product", name: product.name, model: product.model,
    description: product.shortDescription, image: `${baseUrl}${product.image}`, brand: { "@type": "Brand", name: "Corvex Steel Wires" },
    category: product.category, material: product.material.join(", "), url: `${baseUrl}/products/${product.slug}`,
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Products", item: `${baseUrl}/products` },
      { "@type": "ListItem", position: 3, name: product.name, item: `${baseUrl}/products/${product.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />

      <section className="bg-paper-50 pb-20 pt-8 md:pb-28">
        <div className="container-shell">
          <nav className="mb-8 flex items-center gap-2 overflow-x-auto whitespace-nowrap text-xs text-slate-500" aria-label="Breadcrumb">
            <Link className="hover:text-signal-600" href="/">Home</Link><ChevronRight aria-hidden="true" size={13} /><Link className="hover:text-signal-600" href="/products">Products</Link><ChevronRight aria-hidden="true" size={13} /><span aria-current="page" className="text-ink-950">{product.name}</span>
          </nav>
          <div className="grid gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-start lg:gap-16">
            <Reveal><ProductGallery src={product.image} alt={product.alt} /></Reveal>
            <Reveal delay={0.08} className="lg:sticky lg:top-28">
              <Link className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-signal-600" href="/products"><ArrowLeft aria-hidden="true" size={16} /> All products</Link>
              <p className="eyebrow mt-10 text-signal-600">{product.category} · {product.model}</p>
              <h1 className="mt-5 text-5xl font-semibold leading-[1] tracking-[-0.055em] text-balance md:text-7xl">{product.name}</h1>
              <p className="mt-7 text-lg leading-8 text-slate-700">{product.shortDescription}</p>
              <div className="mt-7 flex flex-wrap gap-2">{product.material.map((material) => <span key={material} className="rounded-full border border-ink-950/10 bg-white px-4 py-2 text-xs font-semibold">{material}</span>)}</div>
              <div className="mt-10 flex flex-wrap gap-3"><a className="button button-primary" href="#inquiry">Prepare an enquiry <ArrowRight aria-hidden="true" size={17} /></a><a className="button border border-ink-950/15 bg-white" href="#specifications">View specifications</a></div>
              <p className="mt-6 flex items-center gap-2 text-xs leading-5 text-slate-500"><ShieldCheck aria-hidden="true" className="text-signal-600" size={16} /> Final configuration is confirmed against the approved project requirement.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink-950 py-16 text-white md:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
          <Reveal><p className="eyebrow text-signal-500">System overview</p><h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] md:text-5xl">Configured for context.</h2></Reveal>
          <Reveal delay={0.08}><p className="text-xl leading-9 text-steel-300">{product.description}</p><div className="mt-10 grid gap-4 sm:grid-cols-2">{product.features.map((feature) => <p key={feature} className="flex items-start gap-3 border-t border-white/15 pt-4 text-sm text-steel-300"><CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-signal-500" size={18} />{feature}</p>)}</div></Reveal>
        </div>
      </section>

      <section id="specifications" className="scroll-mt-28 bg-paper-50 py-20 md:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
          <Reveal><p className="eyebrow text-signal-600">Technical profile</p><h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] md:text-5xl">Specification framework</h2><p className="mt-5 max-w-sm text-sm leading-6 text-slate-700">Values shown describe configurable fields, not a certified data sheet. Final dimensions and performance criteria require an approved product schedule.</p></Reveal>
          <Reveal delay={0.08}><dl className="border-t border-ink-950/15">{product.specifications.map((item) => <div key={item.label} className="grid gap-2 border-b border-ink-950/15 py-5 sm:grid-cols-[.65fr_1fr]"><dt className="font-mono text-xs uppercase tracking-[.1em] text-slate-500">{item.label}</dt><dd className="text-sm font-semibold leading-6">{item.value}</dd></div>)}</dl></Reveal>
        </div>
      </section>

      <section className="bg-mist-100 py-20 md:py-28">
        <div className="container-shell"><Reveal className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end"><div><p className="eyebrow text-signal-600">Where it fits</p><h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] md:text-5xl">Applications shaped by the site.</h2></div><p className="max-w-lg leading-7 text-slate-700">The same product family may be configured differently across exposure, access, risk, and installation conditions.</p></Reveal><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{product.applications.map((application, index) => <Reveal key={application} delay={index * .05} className="rounded-2xl border border-ink-950/10 bg-white p-7"><span className="font-mono text-xs text-signal-600">0{index + 1}</span><h3 className="mt-12 text-xl font-semibold">{application}</h3></Reveal>)}</div></div>
      </section>

      <section className="bg-paper-50 py-20 md:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
          <Reveal><p className="eyebrow text-signal-600">Project documents</p><h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] md:text-5xl">Ask for the right technical pack.</h2><p className="mt-5 max-w-sm text-sm leading-6 text-slate-700">Documents are issued against the confirmed configuration so project teams receive relevant—not generic—information.</p></Reveal>
          <Reveal delay={0.08} className="space-y-3">{[[FileText, "Product data sheet", "Configuration, material, dimensions, and supply format"], [Layers3, "Specification schedule", "Fields required to coordinate the approved product"], [Wrench, "Installation guidance", "Handling, support, connection, and safety context"], [PackageCheck, "Dispatch documentation", "Identification, quantities, packaging, and release records"]].map(([Icon, title, copy]) => { const DocIcon = Icon as typeof FileText; return <a key={title as string} href="#inquiry" className="group flex items-center gap-5 rounded-xl border border-ink-950/10 bg-white p-5 transition hover:border-signal-500/50 hover:shadow-[0_12px_35px_rgba(8,17,28,.07)]"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-mist-100 text-signal-600"><DocIcon aria-hidden="true" size={22} /></span><span><strong className="block text-sm">{title as string}</strong><span className="mt-1 block text-xs leading-5 text-slate-500">{copy as string}</span></span><Download aria-hidden="true" className="ml-auto text-slate-500 transition-transform group-hover:translate-y-1" size={18} /></a>; })}</Reveal>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-28 bg-mist-100 py-20 md:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
          <Reveal><p className="eyebrow text-signal-600">Product enquiry</p><h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] md:text-5xl">Prepare a stronger project brief.</h2><p className="mt-5 max-w-sm leading-7 text-slate-700">A useful enquiry includes the site, quantity, conditions, project timing, and any drawings or governing standards.</p><div className="mt-8 flex items-center gap-3 rounded-xl border border-ink-950/10 bg-paper-50 p-4 text-sm"><Box aria-hidden="true" className="text-signal-600" size={21} /><span><strong className="block">Selected product</strong><span className="text-slate-500">{product.name} · {product.model}</span></span></div></Reveal>
          <Reveal delay={0.08}><ProductInquiryForm productName={`${product.name} (${product.model})`} /></Reveal>
        </div>
      </section>

      <section className="bg-paper-50 py-20 md:py-28">
        <div className="container-shell"><div className="flex items-end justify-between gap-6"><div><p className="eyebrow text-signal-600">Related systems</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] md:text-5xl">Complete the assembly.</h2></div><Link className="hidden items-center gap-2 text-sm font-semibold sm:inline-flex" href="/products">All products <ArrowRight aria-hidden="true" size={17} /></Link></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{related.map((item) => <ProductCard key={item.slug} product={item} />)}</div></div>
      </section>
    </>
  );
}
