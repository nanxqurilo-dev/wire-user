import { redirect } from "next/navigation";

const categoryMap: Record<string, string> = {
  "high-security-barriers": "High-security barriers",
  "boundary-fencing": "Boundary fencing",
  "electrified-deterrence": "Electrified deterrence",
  components: "Structural components",
};

export default async function CategoryPage({ params }: PageProps<"/products/category/[category]">) {
  const { category } = await params;
  const label = categoryMap[category];
  redirect(label ? `/products?category=${encodeURIComponent(label)}` : "/products");
}
