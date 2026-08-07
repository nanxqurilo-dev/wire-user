import { Building2, CircuitBoard, Factory, Landmark, Leaf, Shield, Sparkles, TrainFront } from "lucide-react";
import type { IndustryIcon } from "@/content/industries";

export const industryIcons = {
  landmark: Landmark, energy: Sparkles, transport: TrainFront, factory: Factory,
  data: CircuitBoard, government: Shield, agriculture: Leaf, commercial: Building2,
} satisfies Record<IndustryIcon, typeof Landmark>;
