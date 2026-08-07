# Phase 1 — Product, UX, and Design Blueprint

Status: Proposed for approval  
Working brand: **Aegis Grid Systems** (original placeholder brand identity, not reference-derived)  
Product category: Engineered perimeter protection and industrial fencing systems

## 1. Executive direction

Aegis Grid Systems will be positioned as an engineering-led B2B manufacturer, not a commodity wire vendor. The experience should help specifiers, procurement teams, EPC contractors, security consultants, and facility owners move from a risk or application to a suitable system, validate its technical fit, and submit a high-quality RFQ.

The visual idea is **Precision at the Perimeter**: controlled geometry, architectural negative space, close material detail, restrained motion, and a warm safety-orange signal color. The brand should feel dependable, technically exact, and capable of large projects without becoming cold or militaristic.

### Business model understood from the domain

- Manufacture and supply physical perimeter-security systems.
- Serve project, bulk, custom-dimension, and installation-led enquiries.
- Support use cases from general boundary demarcation to high-security access deterrence.
- Sell through technical confidence: material grade, coating, dimensions, compliance, production capacity, delivery reach, and installation support.
- Convert visitors primarily through RFQs, technical consultations, specification downloads, and direct sales contact.

This analysis uses the reference only to understand the business domain and its common product/application relationships. No reference branding, company facts, copy, visuals, or layouts are adopted.

## 2. Audiences and jobs to be done

| Audience | Primary need | Evidence required | Preferred conversion |
| --- | --- | --- | --- |
| Procurement manager | Compare suitable products and obtain commercial terms | Specifications, capacity, lead-time signals, certifications | Request a quote |
| EPC / civil contractor | Specify a complete perimeter package | CAD/data sheets, applications, accessories, installation guidance | Send project requirements |
| Security consultant | Match threat level and site conditions to a system | Performance characteristics, standards, system combinations | Book a technical consultation |
| Plant / facility leader | Upgrade a site with minimal operational risk | Use cases, process, project proof, support model | Schedule a site assessment |
| Government / institutional buyer | Establish eligibility and vendor credibility | Registrations, quality controls, documentation, supply reach | Tender / procurement enquiry |
| Distributor / channel partner | Source consistent, scalable inventory | Product range, packaging, volumes, logistics support | Become a partner |
| Candidate | Understand work, culture, and openings | Values, environment, role expectations | Apply for a role |

## 3. Information architecture

### Primary navigation

1. **Products** — mega menu organized by system family and buying task.
2. **Industries** — entry points based on operating context.
3. **Capabilities** — manufacturing, infrastructure, quality, R&D, and sustainability.
4. **Company** — about, certifications, gallery, careers.
5. **Insights** — blog/resources and FAQ.
6. **Contact** — persistent high-emphasis `Request a quote` action.

### Product taxonomy

The taxonomy is designed around recognizable procurement language while keeping room for future expansion.

- **High-security barriers**
  - Concertina coil systems
  - Razor ribbon systems
  - Flat-wrap barriers
- **Boundary fencing**
  - Chain-link mesh
  - Welded mesh panels
  - Barbed wire
  - PVC-coated mesh
- **Electrified deterrence**
  - Solar perimeter fencing
  - Alarm-ready electric fencing
- **Structural and installation components**
  - Y-angle fence posts
  - Brackets and outriggers
  - Tension wire and binding accessories
  - Gates and project hardware

Each product category must explain selection criteria and each product detail must include variants, specifications, finishes, applications, downloads, related products, and an enquiry path. Claims and exact specifications remain data-backed content fields, never invented in page copy.

### Industry taxonomy

- Critical infrastructure
- Energy and utilities
- Transport and logistics
- Manufacturing and warehousing
- Government and institutional facilities
- Data centers and technology campuses
- Agriculture and land protection
- Commercial and residential developments

## 4. Sitemap and URL model

```text
/
├── /about
├── /products
│   ├── ?category=&application=&material=&sort=&page=
│   ├── /category/[category]
│   └── /[slug]
├── /industries
│   └── /[slug]
├── /manufacturing-process
├── /infrastructure
├── /quality-assurance
├── /research-development
├── /certifications
├── /sustainability
├── /gallery
├── /insights
│   └── /[slug]
├── /faq
├── /careers
│   └── /[slug]
├── /contact
├── /request-a-quote
├── /privacy
├── /terms
├── /sitemap.xml
├── /robots.txt
└── not-found
```

`/request-a-quote` is added as a focused conversion route because a technical B2B enquiry has more fields and intent than a general contact message. Search, filters, sorting, and pagination remain URL-driven so filtered catalogs are shareable and browser navigation works naturally.

## 5. Page responsibilities

| Page | User question answered | Primary action |
| --- | --- | --- |
| Home | Is this a credible manufacturer for my project? | Explore systems / request quote |
| About | Who are they and how do they operate? | Discuss a requirement |
| Products | What solutions are available? | Filter and compare |
| Product detail | Will this exact product fit my specification? | Add product to enquiry |
| Industries | Do they understand my environment? | View relevant systems |
| Manufacturing process | How is consistency controlled? | Tour capabilities |
| Infrastructure | Can they meet scope and volume? | Discuss capacity |
| Quality assurance | How is quality verified? | Request quality documents |
| R&D | Can they engineer a nonstandard need? | Start a custom project |
| Certifications | What independent evidence exists? | View/download credentials |
| Sustainability | How are material and operational impacts managed? | View commitments |
| Gallery | What do facilities and installations look like? | Start a similar project |
| Insights | Can they help me make a better technical decision? | Read / subscribe |
| FAQ | Can I resolve common commercial and technical questions? | Ask a specialist |
| Careers | Why work here? | View roles |
| Contact | How can I reach the right team? | Send message |

## 6. Core user journeys

### Journey A — specification-led buyer

Search/product landing → category filter → product detail → verify specification and finish → download data sheet → add product to RFQ → provide quantity, site, timeline, and attachment → confirmation with response expectation.

### Journey B — problem-led facility owner

Industry landing → identify site risk → review recommended system stack → see process/project proof → book technical consultation → qualification by sales engineer.

### Journey C — procurement validation

Home → company/capabilities → infrastructure → quality assurance → certifications → product detail → request commercial quote.

### Journey D — returning contractor

Global search → exact product → copy/share specifications → add accessories → submit fast repeat enquiry.

### Journey E — candidate

Careers → culture and operating principles → opening detail → accessible application form → success state.

### Conversion principles

- Keep `Request a quote` visible without making every section sales-heavy.
- Preserve selected product and UTM context when entering an enquiry.
- Ask only qualification-critical questions; make drawings/documents optional.
- Use clear success, validation, loading, and error states.
- Offer phone/email as alternatives, never as the only paths.

## 7. Homepage narrative architecture

1. **Hero — engineered confidence:** clear category, differentiated promise, two CTAs, abstract macro-material visual, restrained parallax.
2. **Trust rail:** verified standards/client marks only when supplied.
3. **Company overview:** positioning, short proof statement, facility image reveal.
4. **Why Aegis:** four evidence-led value pillars.
5. **Product systems:** category navigator, not a generic card grid.
6. **Featured products:** technically scannable product cards.
7. **Manufacturing process:** interactive five-stage horizontal/vertical stepper.
8. **Industries:** application-led mosaic with system recommendations.
9. **Infrastructure:** editorial split with capability details and gallery teaser.
10. **Quality standards:** inspection journey and document/certification links.
11. **Statistics:** only verifiable metrics with labels and dates/scope.
12. **Company timeline:** milestones expressed as capability evolution.
13. **Client proof:** permissioned logos and meaningful project categories.
14. **Testimonials:** named, attributable, outcome-oriented quotes only.
15. **Insights preview:** three useful technical resources.
16. **FAQ:** six high-intent questions with link to complete FAQ.
17. **Contact CTA:** project briefing invitation and response expectation.
18. **Footer:** strong navigation, contact, compliance, and newsletter utility.

## 8. Design system

### Color tokens

| Token | Hex | Use |
| --- | --- | --- |
| `ink-950` | `#08111C` | Primary dark canvas, footer |
| `navy-900` | `#0C1A29` | Elevated dark surfaces |
| `navy-800` | `#13283C` | Dark cards and navigation states |
| `slate-700` | `#33485D` | Secondary text on light |
| `slate-500` | `#66788A` | Muted text and metadata |
| `steel-300` | `#B7C1CA` | Borders on dark / technical lines |
| `mist-100` | `#EEF2F4` | Alternate section background |
| `paper-50` | `#F8F9F7` | Main warm-neutral background |
| `white` | `#FFFFFF` | Cards and inverse text |
| `signal-600` | `#D94E16` | Accessible accent text/buttons on light |
| `signal-500` | `#F06424` | Accent on dark, highlights |
| `signal-200` | `#FFC3A6` | Soft accent surfaces |
| `success-600` | `#287A56` | Form success and verified status |
| `danger-600` | `#B93838` | Errors only |

The orange is a functional signal, capped visually at roughly 8–10% of a viewport. Gradients combine navy tones or a small signal glow; body copy never uses low-contrast gradient text. Final token pairs will be programmatically checked to WCAG 2.2 AA.

### Typography

- **Primary:** Manrope Variable — headings and body; geometric but humane.
- **Technical:** Geist Mono — specifications, dimensions, eyebrow labels, counters.
- Font delivery: `next/font` with variable subsets and display swap behavior.
- Heading tracking tightens with size; body remains neutral with 1.55–1.7 line height.

| Role | Fluid size | Weight / line height |
| --- | --- | --- |
| Display XL | `clamp(3.25rem, 7vw, 7.5rem)` | 600 / 0.95 |
| Display | `clamp(2.75rem, 5vw, 5.5rem)` | 600 / 1.0 |
| H1 | `clamp(2.5rem, 4vw, 4.5rem)` | 600 / 1.05 |
| H2 | `clamp(2rem, 3vw, 3.5rem)` | 600 / 1.1 |
| H3 | `clamp(1.4rem, 2vw, 2rem)` | 600 / 1.2 |
| Lead | `clamp(1.125rem, 1.5vw, 1.375rem)` | 400 / 1.55 |
| Body | `1rem` | 400 / 1.65 |
| Small | `0.875rem` | 500 / 1.5 |
| Label | `0.75rem` | 600 / 1.3, uppercase, tracked |

### Spacing and layout

- Base unit: 4px.
- Spacing scale: `4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128, 160`.
- Section block spacing: mobile `72–96px`; tablet `96–128px`; desktop `128–160px`.
- Content container: maximum `1440px`, readable text measure `65–72ch`.
- Grid: 4 columns mobile, 8 tablet, 12 desktop; 16/24/32px gutters.
- Border radii: 8px controls, 16px cards, 24px editorial media, pill only for tags/actions that benefit from it.
- Borders: 1px low-contrast rules; shadows are broad and subtle rather than glossy.

### Imagery and art direction

- Macro metal textures, production details, architectural perimeters, testing, and people at work.
- Mix documentary wide frames with precision close-ups; cool neutral grade plus natural orange sparks/safety details.
- Avoid generic handshake imagery, staged office teams, military conflict, and fear-based security imagery.
- Product cutouts use consistent three-quarter angle, neutral background, scale cue, and real alt text.
- Abstract hero visual may use original procedural grid/line artwork; no copied photography or assets.

### Iconography and graphic language

- Lucide icons at 1.75–2px stroke with consistent 20/24px sizes.
- Original diagrams use fine engineering lines, coordinate marks, mesh geometry, and signal-orange nodes.
- Icons supplement labels; they do not replace navigation text.

## 9. Motion strategy

Motion communicates assembly, inspection, and progression. Framer Motion is the default; GSAP is excluded unless a later interaction cannot be delivered performantly with native scroll behavior and Framer Motion.

| Pattern | Behavior | Duration |
| --- | --- | --- |
| Page entrance | Small opacity/translate transition on page content, nav remains stable | 300–450ms |
| Section reveal | 16–28px rise with opacity, once per section | 450–650ms |
| Stagger | 50–80ms between related cards | Max 400ms total |
| Image reveal | Clip/mask reveal followed by ≤1.03 settling scale | 650–900ms |
| Card hover | 4–6px lift, border/accent response, image ≤1.04 zoom | 180–240ms |
| Counter | Viewport-triggered interpolation with static accessible value | 800–1200ms |
| Timeline | Progress line tied to scroll; active milestone state | Spring / scroll-linked |
| Accordion | Height/opacity with rotating indicator | 220–300ms |
| Button | Highlight sweep/pressed scale; no uncontrolled ripple DOM | 140–220ms |
| Hero parallax | Separate visual layers, maximum 4–6% displacement | Scroll-linked |

Rules:

- Honor `prefers-reduced-motion` with instant state changes and no parallax.
- Animate transform and opacity; avoid layout-thrashing properties.
- No scroll hijacking, perpetual decorative loops, or delayed access to content.
- Client motion islands wrap server-rendered content; avoid turning full pages into client components.
- Mobile motion is reduced in distance and layer count.

## 10. Reusable component inventory

### Foundations

- `Container`, `Section`, `Stack`, `Cluster`, `Grid`
- `Heading`, `Text`, `Eyebrow`, `Metric`, `Prose`
- `Button`, `IconButton`, `TextLink`, `Tag`, `Badge`
- `Surface`, `Divider`, `AspectMedia`, `OptimizedImage`
- `VisuallyHidden`, `SkipLink`, `FocusRing`

### Navigation and layout

- `SiteHeader`, `DesktopNav`, `MegaMenu`, `MobileNav`, `SearchDialog`
- `Breadcrumbs`, `Subnav`, `Pagination`, `SiteFooter`
- `PageHero`, `SectionHeader`, `ContactBand`, `CookieNotice`

### Content and marketing

- `ProductCard`, `ProductCategoryCard`, `IndustryCard`, `InsightCard`
- `FeatureCard`, `CapabilityPanel`, `StatCounter`, `LogoCloud`
- `TestimonialCard`, `Timeline`, `ProcessStepper`, `FAQAccordion`
- `CertificateCard`, `DownloadCard`, `GalleryGrid`, `Lightbox`
- `TechnicalDiagram`, `QuoteBlock`, `Callout`, `EmptyState`

### Product system

- `ProductSearch`, `ProductFilters`, `ActiveFilterChips`, `SortSelect`
- `ProductGrid`, `ProductGallery`, `SpecificationTable`
- `ApplicationList`, `VariantSelector`, `RelatedProducts`
- `DownloadList`, `AddToInquiry`, `InquirySummary`

### Forms and feedback

- `Field`, `Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`
- `FileUpload`, `FormError`, `FormStatus`, `Toast`
- `ContactForm`, `QuoteForm`, `CareerApplicationForm`, `NewsletterForm`

Interactive components use React Hook Form and shared Zod schemas. Every control has visible labels, descriptions where needed, keyboard states, inline errors, and server-side validation.

## 11. Proposed code architecture

The current repository is a minimal App Router project. The implementation will move application code under `src/`, retain `public/` for static assets, and use route groups without changing public URLs.

```text
src/
├── app/
│   ├── (marketing)/
│   │   ├── about/
│   │   ├── careers/[slug]/
│   │   ├── certifications/
│   │   ├── contact/
│   │   ├── faq/
│   │   ├── gallery/
│   │   ├── industries/[slug]/
│   │   ├── infrastructure/
│   │   ├── insights/[slug]/
│   │   ├── manufacturing-process/
│   │   ├── products/category/[category]/
│   │   ├── products/[slug]/
│   │   ├── quality-assurance/
│   │   ├── research-development/
│   │   ├── request-a-quote/
│   │   ├── sustainability/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── (legal)/privacy/
│   ├── (legal)/terms/
│   ├── api/inquiries/route.ts
│   ├── not-found.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   ├── layout/
│   ├── navigation/
│   ├── forms/
│   ├── product/
│   ├── motion/
│   └── seo/
├── sections/
│   ├── home/
│   └── shared/
├── content/
│   ├── products/
│   ├── industries/
│   ├── insights/
│   └── site.ts
├── lib/
│   ├── metadata.ts
│   ├── structured-data.ts
│   ├── validation.ts
│   └── env.ts
├── services/
│   ├── content.ts
│   └── inquiries.ts
├── hooks/
├── constants/
├── types/
├── utils/
└── providers/
public/
├── images/
├── documents/
└── brand/
```

Architectural constraints:

- Pages, layouts, and content-heavy sections are Server Components by default.
- Client boundaries exist only for menus, filters, forms, lightbox, and motion behavior.
- Product/industry content begins as typed local data behind a service interface, allowing a future CMS without rewriting pages.
- Metadata and JSON-LD builders are centralized and typed.
- Shared components remain domain-aware enough to avoid prop soup, but presentation primitives stay generic.
- Query parameters are the source of truth for catalog state.

## 12. SEO, accessibility, and performance contracts

### SEO

- Unique metadata, canonical, Open Graph, and social cards per indexable route.
- Organization schema at the root; Product schema on valid products; BreadcrumbList on interior pages; Article on insights; FAQPage only where content and eligibility warrant it.
- Product URLs are stable slugs; filters default to canonical catalog/category URLs to avoid index bloat.
- XML sitemap includes only canonical, public routes.
- Descriptive filenames, dimensions, captions where useful, and accurate alt text for images.

### Accessibility

- WCAG 2.2 AA baseline, including 4.5:1 normal text contrast and visible focus.
- Full keyboard mega menu/dialog/accordion/lightbox behavior.
- Semantic landmarks, single logical H1, ordered headings, skip link, and live regions for form/filter results.
- Touch targets at least 44×44px; error state never communicated by color alone.
- Motion preferences and zoom/reflow through 400% supported.

### Performance

- Lighthouse target ≥95 on representative production builds, treated as a budget rather than a guarantee before real assets/hosting.
- Server-first rendering and minimal hydration.
- `next/image` sizing, modern formats, responsive sources, and priority limited to the true LCP image.
- Font subsets and no unnecessary weights.
- Dynamic import only for heavy below-fold interactions such as lightbox or advanced gallery.
- No GSAP, carousel library, or global animation provider by default.
- Initial JavaScript goal: ≤120KB compressed per typical marketing route, reviewed during implementation.

## 13. Content principles

Tone: assured, precise, plain-spoken, and engineering-literate. Avoid superlatives without proof, SEO repetition, fear language, and vague claims such as “world-class quality.”

Working message pillars:

1. **Engineered for the site** — systems selected around risk, terrain, environment, and operating need.
2. **Controlled in production** — materials, forming, coating, inspection, and traceability presented clearly.
3. **Ready for project realities** — documentation, custom configurations, packaging, logistics, and installation coordination.
4. **Built for long service** — durability and lifecycle thinking without unsupported lifetime claims.

All company statistics, certifications, customer logos, testimonials, addresses, production capacity, geographic claims, and product specifications require stakeholder-supplied evidence before publication.

## 14. Phase 2 decision gate

The workspace currently declares Next.js `16.3.0`, React `19.2.8`, and Tailwind CSS 4, while the brief requests Next.js 15. Before Phase 2, approve one of these paths:

- **Recommended:** retain the installed Next.js 16.3.0 and implement against its bundled current documentation. This avoids an unnecessary downgrade while preserving the requested App Router/React architecture.
- **Strict brief:** pin a compatible Next.js 15 release and align React, ESLint config, and lockfile accordingly.

Also confirm whether **Aegis Grid Systems** should remain the working fictional brand or be replaced with the real company name and supplied brand facts. No Phase 2 code should embed unverified company claims.

## 15. Phase boundaries

- **Phase 1 (this document):** research, IA, journeys, design system, architecture, and component plan.
- **Phase 2:** dependencies decision, global shell, theme tokens, navigation/mega menu, footer, providers, and responsive foundations.
- **Phase 3:** complete homepage only.
- Later phases: page modules in approved sequence, product system, content/SEO hardening, and final QA.

Phase 1 is complete when this blueprint and its two Phase 2 decisions are approved. No production UI has been implemented in this phase.
