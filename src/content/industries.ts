export type IndustryIcon = "landmark" | "energy" | "transport" | "factory" | "data" | "government" | "agriculture" | "commercial";

export type Industry = {
  slug: string;
  name: string;
  eyebrow: string;
  icon: IndustryIcon;
  image: string;
  alt: string;
  summary: string;
  statement: string;
  context: string;
  challenges: Array<{ title: string; copy: string }>;
  priorities: string[];
  designInputs: Array<{ label: string; value: string }>;
  recommendedProducts: string[];
  related: string[];
};

export const industries: Industry[] = [
  {
    slug: "critical-infrastructure", name: "Critical Infrastructure", eyebrow: "Continuity at the boundary", icon: "landmark",
    image: "/images/industries/critical-infrastructure.png", alt: "Controlled perimeter surrounding a critical water and utility complex at blue hour",
    summary: "Layered perimeter thinking for assets where interruption, uncontrolled access, and unclear responsibility carry outsized consequences.",
    statement: "The perimeter must delay, define, and communicate—without creating new operating risks.",
    context: "Water, communications, public utilities, and other essential assets require more than a product-led boundary. The design must consider threat profile, visibility, controlled entry, maintenance access, civil interfaces, adjacent public space, and the operational response that follows an event.",
    challenges: [
      { title: "Continuity under pressure", copy: "Protection measures must support uninterrupted operations and controlled maintenance access." },
      { title: "Layered deterrence", copy: "The outer boundary, topping, clear zones, gates, and monitoring interfaces must act as one strategy." },
      { title: "Evidence and governance", copy: "Technical submittals, quality records, and scope boundaries need to stand up to formal review." },
    ],
    priorities: ["Defined security layering", "Tamper-aware fixing strategy", "Clear surveillance sightlines", "Corrosion and drainage context", "Controlled emergency access", "Documented configuration"],
    designInputs: [{ label: "Security posture", value: "Site threat and consequence classification" }, { label: "Boundary context", value: "Public interface, terrain, water, and access points" }, { label: "Integration", value: "Gates, lighting, surveillance, detection, and response" }, { label: "Governance", value: "Applicable client, project, and statutory requirements" }],
    recommendedProducts: ["panelguard-welded-mesh", "helixguard-concertina-coil", "vectorpost-y-angle-posts"], related: ["energy-utilities", "government", "data-centers"],
  },
  {
    slug: "energy-utilities", name: "Energy & Utilities", eyebrow: "Protection across exposure", icon: "energy",
    image: "/images/industries/energy-utilities.png", alt: "Solar energy substation and utility compound with a defined perimeter",
    summary: "Perimeter systems configured for remote locations, electrical interfaces, difficult exposure, and long service expectations.",
    statement: "Remote does not mean simple. Every kilometer adds environment, access, and maintenance decisions.",
    context: "Generation, transmission, storage, and distribution sites combine exposed equipment with wide geographies and varied access patterns. A reliable boundary accounts for electrical safety, earthing strategy, corrosion, vegetation, inspection routes, emergency entry, and the practicalities of remote maintenance.",
    challenges: [{ title: "Environmental exposure", copy: "Heat, dust, moisture, coastal conditions, and vegetation influence material and finish selection." }, { title: "Electrical interfaces", copy: "Conductive perimeter elements require coordination with earthing, clearances, and applicable standards." }, { title: "Remote upkeep", copy: "Components and layouts should support inspection, repair, and controlled replacement." }],
    priorities: ["Exposure-led material selection", "Electrical and earthing coordination", "Long-run installation logic", "Vegetation and fire clearance", "Remote monitoring readiness", "Maintainable access points"],
    designInputs: [{ label: "Environment", value: "Corrosion category, dust, temperature, and vegetation" }, { label: "Electrical", value: "Clearance, earthing, induced voltage, and equipment zones" }, { label: "Operations", value: "Inspection frequency, access routes, and response time" }, { label: "Deployment", value: "Terrain, logistics, local installation, and phasing" }],
    recommendedProducts: ["pulseguard-solar-fence", "gridlock-chain-link-mesh", "anchorline-barbed-wire"], related: ["critical-infrastructure", "agriculture", "transport-logistics"],
  },
  {
    slug: "transport-logistics", name: "Transport & Logistics", eyebrow: "Boundaries in motion", icon: "transport",
    image: "/images/industries/transport-logistics.png", alt: "Intermodal rail freight and logistics terminal with a controlled perimeter at dusk",
    summary: "Long-run systems shaped around moving assets, public interfaces, visibility, operational gates, and phased expansion.",
    statement: "A transport perimeter must protect movement without becoming an obstacle to it.",
    context: "Rail, logistics, aviation support, depots, and distribution environments combine long boundaries with high-frequency access and changing operating zones. System design must distinguish secure lines from operational interfaces and allow maintenance without disrupting flow.",
    challenges: [{ title: "Long linear assets", copy: "Repeated details must remain practical across terrain changes, crossings, and large distances." }, { title: "High access frequency", copy: "Gates and interfaces experience more use, more handoffs, and more operational pressure." }, { title: "Phased development", copy: "The perimeter may need to expand, relocate, or interface with temporary works." }],
    priorities: ["Clear sightlines", "Repeatable long-run details", "Robust gate interfaces", "Anti-climb strategy", "Phased construction planning", "Rapid repair approach"],
    designInputs: [{ label: "Movement", value: "Vehicle, rail, people, goods, and emergency routes" }, { label: "Alignment", value: "Terrain, crossings, drainage, and public interfaces" }, { label: "Phasing", value: "Temporary boundaries and future expansion" }, { label: "Operations", value: "Gate cycles, inspection, incident response, and repair" }],
    recommendedProducts: ["gridlock-chain-link-mesh", "panelguard-welded-mesh", "vectorpost-y-angle-posts"], related: ["manufacturing", "critical-infrastructure", "commercial"],
  },
  {
    slug: "manufacturing", name: "Manufacturing & Warehousing", eyebrow: "Secure productive space", icon: "factory",
    image: "/images/industries/data-manufacturing.png", alt: "Modern manufacturing and warehouse facility behind a clean architectural perimeter",
    summary: "Durable, visible boundaries that support workforce access, logistics movement, safety zoning, and changing site layouts.",
    statement: "The strongest industrial boundary understands the rhythm of the plant behind it.",
    context: "Operating plants and warehouses need perimeter protection that works alongside shift changes, loading operations, contractor access, fire routes, visitor movement, and internal safety zones. The design should be strong without creating blind spots or operational friction.",
    challenges: [{ title: "Mixed movement", copy: "People, heavy vehicles, visitors, and goods create different access and separation needs." }, { title: "Operational visibility", copy: "Security and safety teams need clear views across active boundaries and gates." }, { title: "Site change", copy: "Expansions, new yards, and revised flows require systems that can be adapted logically." }],
    priorities: ["Visible boundary definition", "Shift and contractor access", "Vehicle impact context", "Fire and emergency routes", "Internal zoning", "Expansion-ready details"],
    designInputs: [{ label: "Site flow", value: "Workforce, visitor, freight, and contractor movement" }, { label: "Safety", value: "Emergency routes, hazardous zones, and vehicle interfaces" }, { label: "Security", value: "Assets, visibility, access control, and operating hours" }, { label: "Change", value: "Expansion plans, temporary works, and future gates" }],
    recommendedProducts: ["panelguard-welded-mesh", "gridlock-chain-link-mesh", "vectorpost-y-angle-posts"], related: ["transport-logistics", "data-centers", "commercial"],
  },
  {
    slug: "data-centers", name: "Data Centers", eyebrow: "Physical confidence for digital continuity", icon: "data",
    image: "/images/industries/data-manufacturing.png", alt: "Contemporary data center campus with an integrated secure perimeter",
    summary: "Architecturally disciplined perimeter layers for high-availability campuses with controlled, auditable access.",
    statement: "Digital resilience still begins with physical layers that are visible, controlled, and maintainable.",
    context: "Data center campuses combine stringent access control, uptime expectations, surveillance, vehicle management, and a growing need for discreet architectural integration. The physical boundary must support detection and response while remaining maintainable across continuous operations.",
    challenges: [{ title: "Layered access", copy: "Outer boundary, vehicle control, pedestrian entry, and secure zones need clear separation." }, { title: "Always-on operations", copy: "Inspection and maintenance cannot introduce uncontrolled downtime or access." }, { title: "Architectural expectation", copy: "High security must coexist with campus design, planning, and neighboring context." }],
    priorities: ["Anti-climb boundary", "Surveillance-compatible sightlines", "Auditable gate interfaces", "Vehicle approach strategy", "Maintenance continuity", "Architectural coordination"],
    designInputs: [{ label: "Layering", value: "Campus edge, secure core, utilities, and controlled approaches" }, { label: "Monitoring", value: "Detection, cameras, lighting, and response zones" }, { label: "Access", value: "Staff, visitors, deliveries, contractors, and emergency teams" }, { label: "Availability", value: "Maintenance method and continuous-operation constraints" }],
    recommendedProducts: ["panelguard-welded-mesh", "helixguard-concertina-coil", "vectorpost-y-angle-posts"], related: ["critical-infrastructure", "manufacturing", "government"],
  },
  {
    slug: "government", name: "Government & Institutions", eyebrow: "Security with civic context", icon: "government",
    image: "/images/industries/critical-infrastructure.png", alt: "Institutional utility facility protected by a controlled perimeter",
    summary: "Clear, reviewable systems balancing security posture, public interface, controlled access, and formal procurement needs.",
    statement: "A civic perimeter should communicate control without losing sight of people, place, and purpose.",
    context: "Administrative campuses, education, research, and restricted public facilities sit at the intersection of security and civic access. Designs must manage visitors, staff, public edges, events, emergency response, and documentation within a coherent system.",
    challenges: [{ title: "Public interface", copy: "The boundary must support wayfinding and legitimate access while maintaining control." }, { title: "Changing occupancy", copy: "Visitors, events, staff cycles, and public programs create variable demand." }, { title: "Formal approval", copy: "Specifications, substitutions, evidence, and records require structured review." }],
    priorities: ["Legible access points", "Appropriate security layering", "Public-realm coordination", "Emergency access", "Reviewable technical submittals", "Maintainable finishes"],
    designInputs: [{ label: "Users", value: "Staff, public, visitors, service providers, and events" }, { label: "Context", value: "Roads, public space, neighboring use, and architecture" }, { label: "Governance", value: "Tender, approval, accessibility, and statutory requirements" }, { label: "Operations", value: "Hours, screening, emergency response, and maintenance" }],
    recommendedProducts: ["panelguard-welded-mesh", "flatguard-flat-wrap-barrier", "vectorpost-y-angle-posts"], related: ["critical-infrastructure", "commercial", "data-centers"],
  },
  {
    slug: "agriculture", name: "Agriculture & Land", eyebrow: "Protection over distance", icon: "agriculture",
    image: "/images/industries/energy-utilities.png", alt: "Large remote land and energy site with a long defined perimeter",
    summary: "Practical long-run boundaries configured around terrain, livestock, wildlife, crops, remote upkeep, and project economics.",
    statement: "A land boundary must work with the terrain, not just cross it.",
    context: "Agricultural and land-protection applications demand a different balance of visibility, cost, adaptability, access, animal safety, and maintenance. Terrain and vegetation usually matter as much as the chosen wire or mesh.",
    challenges: [{ title: "Variable terrain", copy: "Changes in level, soil, drainage, and vegetation influence support and tensioning." }, { title: "Animal interaction", copy: "Livestock and wildlife behavior affect visibility, aperture, deterrence, and safety." }, { title: "Distributed maintenance", copy: "Long remote boundaries need repairable details and practical component availability." }],
    priorities: ["Terrain-following alignment", "Animal-appropriate configuration", "Maintainable tensioning", "Gate and farm access", "Vegetation management", "Cost across lifecycle"],
    designInputs: [{ label: "Land", value: "Terrain, soil, drainage, vegetation, and water crossings" }, { label: "Animals", value: "Livestock, wildlife, behavior, visibility, and safety" }, { label: "Access", value: "Farm equipment, service tracks, gates, and seasonal use" }, { label: "Maintenance", value: "Inspection reach, repair skills, and component availability" }],
    recommendedProducts: ["anchorline-barbed-wire", "gridlock-chain-link-mesh", "pulseguard-solar-fence"], related: ["energy-utilities", "commercial", "transport-logistics"],
  },
  {
    slug: "commercial", name: "Commercial Developments", eyebrow: "Protection with presence", icon: "commercial",
    image: "/images/industries/data-manufacturing.png", alt: "Modern commercial campus with a coordinated architectural boundary",
    summary: "Architecturally considered boundaries for active campuses, mixed-use sites, residential developments, and public-facing assets.",
    statement: "A commercial perimeter is part security layer, part arrival experience, and part long-term asset.",
    context: "Commercial and residential developments need boundaries that support identity, visibility, privacy, daily access, landscape, safety, and maintenance. System selection must align security intent with architecture and the experience of legitimate users.",
    challenges: [{ title: "Visual integration", copy: "Materials, rhythm, finish, and height influence the architecture and public realm." }, { title: "Daily interaction", copy: "Residents, visitors, deliveries, staff, and maintenance teams use the boundary continuously." }, { title: "Lifecycle appearance", copy: "Coating, cleaning, vegetation, and repair affect long-term perception and value." }],
    priorities: ["Architectural rhythm", "Clear entry experience", "Privacy and sightlines", "Landscape coordination", "Safe public edges", "Finish durability"],
    designInputs: [{ label: "Design intent", value: "Architecture, landscape, privacy, and public interface" }, { label: "Users", value: "Residents, visitors, deliveries, staff, and services" }, { label: "Security", value: "Access control, sightlines, lighting, and response" }, { label: "Lifecycle", value: "Cleaning, coating, landscape growth, and repair" }],
    recommendedProducts: ["panelguard-welded-mesh", "gridlock-chain-link-mesh", "vectorpost-y-angle-posts"], related: ["government", "manufacturing", "agriculture"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
