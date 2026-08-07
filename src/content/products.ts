export type ProductCategory = "High-security barriers" | "Boundary fencing" | "Electrified deterrence" | "Structural components";
export type ProductMaterial = "Galvanized steel" | "Stainless steel" | "Coated steel";

export type Product = {
  slug: string;
  name: string;
  model: string;
  category: ProductCategory;
  material: ProductMaterial[];
  image: string;
  alt: string;
  shortDescription: string;
  description: string;
  features: string[];
  applications: string[];
  specifications: Array<{ label: string; value: string }>;
  related: string[];
};

export const productCategories: ProductCategory[] = [
  "High-security barriers", "Boundary fencing", "Electrified deterrence", "Structural components",
];
export const productMaterials: ProductMaterial[] = ["Galvanized steel", "Stainless steel", "Coated steel"];

export const products: Product[] = [
  {
    slug: "helixguard-concertina-coil", name: "HelixGuard Concertina Coil", model: "C-Series",
    category: "High-security barriers", material: ["Galvanized steel", "Stainless steel"],
    image: "/images/products/concertina-coil.png", alt: "HelixGuard galvanized concertina coil product configuration",
    shortDescription: "A configurable helical barrier system for layered, high-security perimeter applications.",
    description: "HelixGuard combines formed razor ribbon, core wire, and precision clips into a controlled helical barrier. Coil geometry, material, and deployment format are reviewed against the site, support structure, threat profile, and project schedule.",
    features: ["Consistent helical geometry", "Multiple deployment configurations", "Material options for exposure conditions", "Compatible structural and fixing systems"],
    applications: ["Critical infrastructure", "Utilities and energy", "Restricted industrial sites", "Transport and logistics boundaries"],
    specifications: [
      { label: "Barrier format", value: "Single or coordinated multi-coil configuration" },
      { label: "Material", value: "Galvanized or stainless steel, project-defined" },
      { label: "Coil geometry", value: "Configured to security and installation requirement" },
      { label: "Connection", value: "Precision clipped helical assembly" },
      { label: "Packaging", value: "Compressed and identified for project dispatch" },
    ], related: ["flatguard-flat-wrap-barrier", "vectorpost-y-angle-posts", "razorline-ribbon-wire"],
  },
  {
    slug: "gridlock-chain-link-mesh", name: "GridLock Chain-Link Mesh", model: "M-Series",
    category: "Boundary fencing", material: ["Galvanized steel", "Coated steel"],
    image: "/images/products/chain-link-mesh.png", alt: "GridLock galvanized chain-link fencing mesh roll",
    shortDescription: "Flexible diamond mesh for long-run industrial boundaries and coordinated fencing systems.",
    description: "GridLock is a machine-woven boundary mesh designed for adaptable installation across changing terrain and long perimeter runs. Aperture, wire, finish, selvage, and roll format are configured around performance and installation needs.",
    features: ["Consistent diamond aperture", "Adaptable to terrain transitions", "Galvanized and coated finish options", "Compatible with posts, straining, and deterrent toppings"],
    applications: ["Factories and warehouses", "Commercial developments", "Agricultural boundaries", "Transport corridors"],
    specifications: [
      { label: "Mesh form", value: "Machine-woven diamond aperture" }, { label: "Wire diameter", value: "Project schedule-defined range" },
      { label: "Finish", value: "Galvanized or project-selected coating" }, { label: "Edge treatment", value: "Knuckle or twist configuration by requirement" },
      { label: "Roll format", value: "Height and length configured to installation plan" },
    ], related: ["panelguard-welded-mesh", "vectorpost-y-angle-posts", "anchorline-barbed-wire"],
  },
  {
    slug: "anchorline-barbed-wire", name: "AnchorLine Barbed Wire", model: "B-Series",
    category: "Boundary fencing", material: ["Galvanized steel", "Coated steel"],
    image: "/images/products/barbed-wire.png", alt: "AnchorLine double-strand galvanized barbed wire coil",
    shortDescription: "A controlled double-strand deterrent wire for boundary, topping, and land-protection use.",
    description: "AnchorLine uses twisted line wires and uniformly spaced barbs to create a practical deterrent layer. Wire gauge, barb configuration, coating, and coil format are aligned with the support spacing and intended service environment.",
    features: ["Controlled barb spacing", "Uniform strand twist", "Multiple protective finish options", "Suitable for standalone or topping use"],
    applications: ["Land and agricultural boundaries", "Industrial perimeter topping", "Utility sites", "Temporary project demarcation"],
    specifications: [
      { label: "Construction", value: "Double-strand twisted wire" }, { label: "Barb pattern", value: "Project-selected spacing and point format" },
      { label: "Material", value: "Galvanized or coated steel" }, { label: "Coil size", value: "Selected around handling and installation plan" },
      { label: "Support system", value: "Posts, droppers, and strainers as designed" },
    ], related: ["gridlock-chain-link-mesh", "vectorpost-y-angle-posts", "helixguard-concertina-coil"],
  },
  {
    slug: "vectorpost-y-angle-posts", name: "VectorPost Y-Angle Posts", model: "Y-Series",
    category: "Structural components", material: ["Galvanized steel", "Coated steel"],
    image: "/images/products/fence-posts.png", alt: "VectorPost galvanized Y-angle fence posts and mounting components",
    shortDescription: "Structural post and outrigger profiles designed to coordinate the perimeter assembly.",
    description: "VectorPost profiles provide the structural interface between the ground or civil work and the selected fencing or deterrent layer. Section, length, hole pattern, base condition, and finish are configured around loads and installation strategy.",
    features: ["Coordinated hole and fixing patterns", "Base-plate or embedment configurations", "Compatible with barrier and mesh systems", "Protective finish selected for exposure"],
    applications: ["Chain-link support", "Barrier topping structures", "Industrial fence lines", "Custom perimeter assemblies"],
    specifications: [
      { label: "Profile", value: "Y-angle and project-specific support profiles" }, { label: "Mounting", value: "Embedded or base-plated configuration" },
      { label: "Hole pattern", value: "Coordinated with selected fence and hardware" }, { label: "Finish", value: "Galvanized or protective coating system" },
      { label: "Engineering", value: "Section and spacing require project load review" },
    ], related: ["gridlock-chain-link-mesh", "helixguard-concertina-coil", "panelguard-welded-mesh"],
  },
  {
    slug: "razorline-ribbon-wire", name: "RazorLine Ribbon Wire", model: "R-Series",
    category: "High-security barriers", material: ["Galvanized steel", "Stainless steel"],
    image: "/images/products/concertina-coil.png", alt: "RazorLine steel ribbon wire barrier product",
    shortDescription: "Formed ribbon wire for controlled deterrent topping and barrier assemblies.",
    description: "RazorLine is a formed steel ribbon and core-wire element used within project-specific deterrent configurations. Profile, material, spacing, and structural interface must be selected as part of a complete safety-conscious perimeter design.",
    features: ["Controlled formed profile", "Continuous core-wire support", "Material options for exposure", "Integrates with multiple mounting formats"],
    applications: ["Restricted industrial facilities", "Critical utility compounds", "Barrier topping", "Layered perimeter systems"],
    specifications: [
      { label: "Format", value: "Formed ribbon on continuous core wire" }, { label: "Material", value: "Galvanized or stainless project option" },
      { label: "Profile", value: "Selected to security specification" }, { label: "Supply", value: "Coil or system-integrated format" },
      { label: "Installation", value: "Requires trained, safety-controlled handling" },
    ], related: ["helixguard-concertina-coil", "flatguard-flat-wrap-barrier", "vectorpost-y-angle-posts"],
  },
  {
    slug: "flatguard-flat-wrap-barrier", name: "FlatGuard Barrier", model: "F-Series",
    category: "High-security barriers", material: ["Galvanized steel", "Stainless steel"],
    image: "/images/products/concertina-coil.png", alt: "FlatGuard flat-wrap steel barrier configuration",
    shortDescription: "A lower-profile deterrent geometry for restricted space and structured fence topping.",
    description: "FlatGuard arranges deterrent loops in a compact planar format suited to mounting where projection must be controlled. Loop layout, panel width, support, material, and fixing method are reviewed as a coordinated assembly.",
    features: ["Compact planar geometry", "Controlled projection from fence line", "Modular connection approach", "Galvanized and stainless options"],
    applications: ["Urban infrastructure", "Restricted-space boundaries", "Industrial fence topping", "Institutional facilities"],
    specifications: [
      { label: "Geometry", value: "Planar interconnected loop format" }, { label: "Panel configuration", value: "Project-defined width and loop layout" },
      { label: "Material", value: "Galvanized or stainless steel" }, { label: "Mounting", value: "Bracket or fence-integrated support" },
      { label: "Connection", value: "Coordinated modular joining method" },
    ], related: ["razorline-ribbon-wire", "helixguard-concertina-coil", "vectorpost-y-angle-posts"],
  },
  {
    slug: "panelguard-welded-mesh", name: "PanelGuard Welded Mesh", model: "P-Series",
    category: "Boundary fencing", material: ["Galvanized steel", "Coated steel"],
    image: "/images/products/chain-link-mesh.png", alt: "PanelGuard precision steel mesh fencing product",
    shortDescription: "Rigid welded mesh panels for clean sightlines and controlled industrial boundaries.",
    description: "PanelGuard uses consistently welded wire intersections to create a rigid, modular boundary surface. Aperture, wire combination, profiling, panel width, coating, and post interface are configured to the project need.",
    features: ["Rigid panel format", "Consistent welded intersections", "Clean, open sightlines", "Modular post-and-clamp installation"],
    applications: ["Industrial campuses", "Data centers", "Commercial sites", "Utilities and substations"],
    specifications: [
      { label: "Construction", value: "Resistance-welded wire panel" }, { label: "Aperture", value: "Project-selected mesh geometry" },
      { label: "Panel format", value: "Height and width coordinated with post centers" }, { label: "Finish", value: "Galvanized or coated system" },
      { label: "Fixing", value: "Clamps and anti-tamper hardware as specified" },
    ], related: ["gridlock-chain-link-mesh", "vectorpost-y-angle-posts", "pulseguard-solar-fence"],
  },
  {
    slug: "pulseguard-solar-fence", name: "PulseGuard Solar Fence", model: "S-Series",
    category: "Electrified deterrence", material: ["Galvanized steel", "Stainless steel"],
    image: "/images/products/fence-posts.png", alt: "PulseGuard structural components for solar perimeter fencing",
    shortDescription: "A project-configured pulsed deterrent layer for remote and monitored boundaries.",
    description: "PulseGuard brings structural support, conductive lines, insulation, warning, energizer, earthing, and monitoring interfaces into one design conversation. Electrical and safety design must follow applicable project standards and qualified installation practice.",
    features: ["Solar-ready power architecture", "Configurable monitored zones", "Coordinated structural and insulation components", "Designed around safe controlled pulsing"],
    applications: ["Remote utility assets", "Agricultural land", "Warehousing compounds", "Critical equipment boundaries"],
    specifications: [
      { label: "System type", value: "Pulsed, solar-ready perimeter deterrent" }, { label: "Zone layout", value: "Configured to boundary and monitoring strategy" },
      { label: "Conductors", value: "Project-selected material and line count" }, { label: "Power", value: "Energizer and solar package sized to system" },
      { label: "Compliance", value: "Subject to applicable electrical and safety standards" },
    ], related: ["panelguard-welded-mesh", "gridlock-chain-link-mesh", "vectorpost-y-angle-posts"],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
