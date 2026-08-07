import type { Metadata } from "next";

import { AboutPage } from "@/sections/about/about-page";

export const metadata: Metadata = {
  title: "About Corvex Steel Wires",
  description:
    "Discover the engineering principles, manufacturing mindset, and project approach behind Corvex Steel Wires.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Corvex Steel Wires",
    description: "Steel wire and perimeter systems shaped by disciplined engineering and practical project thinking.",
    url: "/about",
  },
};

export default function Page() {
  return <AboutPage />;
}
