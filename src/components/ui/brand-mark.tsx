import Image from "next/image";
import Link from "next/link";

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      className={`inline-flex shrink-0 items-center rounded-md ${inverse ? "bg-white px-3 py-2" : ""}`}
      href="/"
      aria-label="Corvex Steel Wires, home"
    >
      <Image
        src="/brand/corvex-steel-wires-logo.png"
        alt="Corvex Steel Wires — Engineered for Strength"
        width={746}
        height={309}
        priority
        className="h-auto w-[8.7rem] sm:w-[10.4rem]"
        sizes="(min-width: 640px) 166px, 140px"
      />
    </Link>
  );
}
