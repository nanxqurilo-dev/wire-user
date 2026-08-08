export type GalleryCategory = "All" | "Manufacturing" | "Products" | "Infrastructure" | "Engineering";

export type GalleryItem = {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  image: string;
  alt: string;
  format: "wide" | "square" | "tall";
  note: string;
};

export const galleryCategories: GalleryCategory[] = ["All", "Manufacturing", "Products", "Infrastructure", "Engineering"];

export const galleryItems: GalleryItem[] = [
  { id: "controlled-production", title: "Controlled production", category: "Manufacturing", image: "/images/home/manufacturing-floor.png", alt: "Engineer inspecting steel mesh on a modern production line", format: "wide", note: "Editorial visualization of a process-led production environment." },
  { id: "perimeter-material", title: "Material at the perimeter", category: "Products", image: "/images/home/hero-perimeter.png", alt: "Close view of formed steel mesh and barrier coil", format: "wide", note: "Material and geometry study for the Corvex visual system." },
  { id: "concertina-system", title: "Helical barrier geometry", category: "Products", image: "/images/products/concertina-coil.png", alt: "Galvanized helical concertina barrier product", format: "square", note: "Catalog visualization showing controlled coil form and connection rhythm." },
  { id: "mesh-system", title: "Woven boundary mesh", category: "Products", image: "/images/products/chain-link-mesh.png", alt: "Rolled galvanized chain-link mesh with visible diamond pattern", format: "tall", note: "Catalog visualization of flexible woven boundary mesh." },
  { id: "wire-system", title: "Double-strand deterrent wire", category: "Products", image: "/images/products/barbed-wire.png", alt: "Coil of galvanized double-strand barbed wire", format: "square", note: "Catalog visualization focused on twist and barb consistency." },
  { id: "structural-system", title: "Structural interfaces", category: "Products", image: "/images/products/fence-posts.png", alt: "Galvanized Y-angle posts and structural mounting components", format: "tall", note: "Catalog visualization of posts, outriggers, and fixing interfaces." },
  { id: "critical-site", title: "Continuity at the boundary", category: "Infrastructure", image: "/images/industries/critical-infrastructure.png", alt: "Critical water and utility complex with controlled perimeter at blue hour", format: "wide", note: "Editorial environment study for critical-infrastructure applications." },
  { id: "energy-site", title: "Protection across exposure", category: "Infrastructure", image: "/images/industries/energy-utilities.png", alt: "Solar energy and electrical utility site in a dry landscape", format: "wide", note: "Editorial environment study for remote energy and utility sites." },
  { id: "logistics-site", title: "Boundaries in motion", category: "Infrastructure", image: "/images/industries/transport-logistics.png", alt: "Intermodal rail and logistics terminal at dusk", format: "wide", note: "Editorial environment study for transport and logistics operations." },
  { id: "data-site", title: "Physical layers for digital continuity", category: "Infrastructure", image: "/images/industries/data-manufacturing.png", alt: "Contemporary data center and manufacturing campus perimeter", format: "wide", note: "Editorial environment study for data and manufacturing campuses." },
  { id: "development-lab", title: "Questions made testable", category: "Engineering", image: "/images/research-development/engineering-lab.png", alt: "Engineers evaluating a steel mesh prototype in a development lab", format: "wide", note: "Editorial visualization of collaborative product development." },
];
