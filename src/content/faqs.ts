export const faqCategories = [
  "All",
  "Products & materials",
  "Specification",
  "Orders & delivery",
  "Installation",
  "Quality & documentation",
  "Lifecycle support",
] as const;

export type FaqCategory = Exclude<(typeof faqCategories)[number], "All">;

export type Faq = {
  question: string;
  answer: string;
  category: FaqCategory;
};

export const faqs: Faq[] = [
  {
    category: "Products & materials",
    question: "Which perimeter products does Corvex manufacture?",
    answer: "Corvex manufactures concertina coil, razor ribbon, flat-wrap barriers, barbed wire, chain-link mesh, welded mesh panels, solar perimeter fencing, and compatible posts and accessories. The appropriate system depends on the site risk, boundary geometry, environment, access strategy, and approved project specification.",
  },
  {
    category: "Products & materials",
    question: "How should I choose between galvanized and stainless steel?",
    answer: "The choice should consider exposure severity, target service life, maintenance access, compatibility with adjacent components, appearance, and project economics. Stainless steel can be valuable in aggressive environments, while correctly specified galvanized steel may be appropriate for many inland applications. Corvex reviews the operating context before recommending a material route.",
  },
  {
    category: "Products & materials",
    question: "Can products be supplied in project-specific dimensions?",
    answer: "Selected products can be configured around project requirements such as mesh aperture, wire diameter, coil geometry, panel format, post arrangement, finish, and packing method. Feasibility, tolerances, minimum quantities, testing, and lead time are confirmed during technical review rather than assumed from a preliminary request.",
  },
  {
    category: "Specification",
    question: "What information is needed for an accurate recommendation?",
    answer: "Share the site location, perimeter length, drawings, intended security outcome, environmental exposure, civil interfaces, gate locations, applicable standards, preferred material, programme, and any approved specification. Photographs and details of existing structures are helpful for retrofit projects.",
  },
  {
    category: "Specification",
    question: "Can Corvex review drawings or a bill of quantities?",
    answer: "Yes. The team can review relevant drawings, schedules, and bills of quantities to identify product interfaces, missing inputs, and points requiring clarification. This is a manufacturability and coordination review; final design responsibility remains with the project’s appointed and appropriately qualified professionals unless otherwise agreed in writing.",
  },
  {
    category: "Specification",
    question: "Do you support consultants and EPC teams during specification?",
    answer: "Corvex supports consultants, EPC contractors, procurement teams, and asset owners with product data, configuration discussions, sample coordination, and manufacturing evidence. Early engagement is encouraged where multiple civil, structural, security, and access-control interfaces must be coordinated.",
  },
  {
    category: "Orders & delivery",
    question: "How are lead times determined?",
    answer: "Lead time depends on product configuration, raw-material availability, order volume, required inspections, documentation, packing, and delivery location. A committed schedule is issued only after technical and commercial requirements are aligned and the order is accepted.",
  },
  {
    category: "Orders & delivery",
    question: "Can one order be released in planned batches?",
    answer: "Phased manufacturing and dispatch may be arranged for suitable projects. The release plan should reflect site readiness, safe storage capacity, installation sequence, transport constraints, and inspection hold points. Batch identification can support receiving checks and traceability.",
  },
  {
    category: "Orders & delivery",
    question: "How is material protected for transport and storage?",
    answer: "Packing is selected for the product, handling method, route, and expected storage period. The dispatch documentation identifies relevant handling precautions. On arrival, material should be inspected promptly and stored off the ground in a dry, ventilated, secure area using the issued handling guidance.",
  },
  {
    category: "Installation",
    question: "Does Corvex install perimeter systems?",
    answer: "Installation scope is confirmed project by project and may vary by geography and system. Where installation is performed by others, Corvex can provide product-specific handling and installation information. Site method statements, temporary works, foundations, lifting, electrical safety, and work-at-height controls remain subject to the responsible contractor and approved project documents.",
  },
  {
    category: "Installation",
    question: "What should be checked before installation begins?",
    answer: "Confirm approved drawings, survey control, boundary ownership, underground and overhead services, foundation readiness, post spacing, gate and drainage interfaces, material quantities, storage condition, safe access, and the agreed inspection plan. Resolving these items before mobilisation helps avoid rework and material damage.",
  },
  {
    category: "Quality & documentation",
    question: "What quality documents can accompany an order?",
    answer: "Depending on the agreed order and inspection plan, documentation may include product data, material or coating evidence, dimensional inspection records, batch identification, packing lists, and certificates requested in the approved specification. Required records and acceptance criteria should be agreed before production starts.",
  },
  {
    category: "Quality & documentation",
    question: "Can client or third-party inspections be coordinated?",
    answer: "Yes, when agreed before production. The inspection and test plan should define notification periods, witness or hold points, sampling, acceptance criteria, record format, and release authority. Late inspection requirements may affect cost and programme.",
  },
  {
    category: "Quality & documentation",
    question: "Are samples available before a production order?",
    answer: "Samples or representative product sections may be available for selected systems. Their purpose, configuration, finish, quantity, freight, approval criteria, and relationship to the final production standard should be agreed in advance.",
  },
  {
    category: "Lifecycle support",
    question: "What maintenance does a perimeter system require?",
    answer: "Maintenance frequency depends on environment, system type, vegetation, accidental damage, contamination, and security criticality. A practical programme includes scheduled visual inspections, prompt damage repair, tension and fixing checks, corrosion monitoring, vegetation clearance, and documented actions after storms, impact, or attempted intrusion.",
  },
  {
    category: "Lifecycle support",
    question: "How should damaged material be handled?",
    answer: "Secure the affected area, record the condition, identify the product and batch where possible, and avoid unapproved field modifications. Share clear photographs, dimensions, exposure details, and the event history with Corvex so the appropriate repair or replacement route can be reviewed.",
  },
];
