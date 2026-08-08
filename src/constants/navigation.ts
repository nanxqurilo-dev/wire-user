export type NavigationItem = { label: string; href: string; description?: string };
export type NavigationGroup = {
  label: string;
  href: string;
  featured?: { eyebrow: string; title: string; description: string; href: string };
  groups?: Array<{ heading: string; items: NavigationItem[] }>;
};

export const mainNavigation: NavigationGroup[] = [
  {
    label: "Products", href: "/products",
    featured: { eyebrow: "System finder", title: "Specify with confidence", description: "Navigate by threat profile, site condition, material, and application.", href: "/products" },
    groups: [
      { heading: "Barrier systems", items: [
        { label: "Concertina coil", href: "/products/concertina-coil" },
        { label: "Razor ribbon", href: "/products/razor-ribbon" },
        { label: "Flat-wrap barriers", href: "/products/flat-wrap-barriers" },
        { label: "Barbed wire", href: "/products/barbed-wire" },
      ] },
      { heading: "Fencing & components", items: [
        { label: "Chain-link mesh", href: "/products/chain-link-mesh" },
        { label: "Welded mesh panels", href: "/products/welded-mesh-panels" },
        { label: "Solar perimeter fencing", href: "/products/solar-perimeter-fencing" },
        { label: "Posts & accessories", href: "/products/posts-accessories" },
      ] },
    ],
  },
  {
    label: "Industries", href: "/industries",
    featured: { eyebrow: "Application expertise", title: "Designed around the site", description: "Perimeter strategies shaped by operational risk, environment, and access needs.", href: "/industries" },
    groups: [
      { heading: "Environments", items: [
        { label: "Critical infrastructure", href: "/industries/critical-infrastructure" },
        { label: "Energy & utilities", href: "/industries/energy-utilities" },
        { label: "Transport & logistics", href: "/industries/transport-logistics" },
        { label: "Manufacturing", href: "/industries/manufacturing" },
      ] },
      { heading: "More industries", items: [
        { label: "Data centers", href: "/industries/data-centers" },
        { label: "Government facilities", href: "/industries/government" },
        { label: "Agriculture", href: "/industries/agriculture" },
        { label: "Commercial developments", href: "/industries/commercial" },
      ] },
    ],
  },
  {
    label: "Capabilities", href: "/manufacturing-process",
    groups: [
      { heading: "How we deliver", items: [
        { label: "Manufacturing process", href: "/manufacturing-process", description: "From material control to dispatch." },
        { label: "Infrastructure", href: "/infrastructure", description: "Systems behind scalable production." },
        { label: "Quality assurance", href: "/quality-assurance", description: "Inspection built into every stage." },
      ] },
      { heading: "Building forward", items: [
        { label: "Research & development", href: "/research-development", description: "Custom engineering and testing." },
        { label: "Sustainability", href: "/sustainability", description: "Material and operational responsibility." },
      ] },
    ],
  },
  {
    label: "Company", href: "/about",
    groups: [{ heading: "Corvex", items: [
      { label: "About us", href: "/about" },
      { label: "Certifications", href: "/certifications" },
      { label: "Gallery", href: "/gallery" },
      { label: "Careers", href: "/careers" },
    ] }],
  },
  { label: "Insights", href: "/insights" },
];

export const footerNavigation = [
  { heading: "Explore", items: [
    { label: "Products", href: "/products" }, { label: "Industries", href: "/industries" },
    { label: "Manufacturing", href: "/manufacturing-process" }, { label: "Quality assurance", href: "/quality-assurance" },
  ] },
  { heading: "Company", items: [
    { label: "About", href: "/about" }, { label: "Sustainability", href: "/sustainability" },
    { label: "Careers", href: "/careers" }, { label: "Insights", href: "/insights" },
  ] },
  { heading: "Support", items: [
    { label: "Contact", href: "/contact" }, { label: "Request a quote", href: "/request-a-quote" },
    { label: "FAQ", href: "/faq" }, { label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" },
  ] },
] as const;
