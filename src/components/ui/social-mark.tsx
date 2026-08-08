export function SocialMark({ platform }: { platform: "LinkedIn" | "Instagram" | "Facebook" | "YouTube" }) {
  const marks = { LinkedIn: "in", Instagram: "◎", Facebook: "f", YouTube: "▶" } as const;
  return <span aria-hidden="true" className={`font-sans font-bold leading-none ${platform === "LinkedIn" ? "text-[.7rem]" : "text-base"}`}>{marks[platform]}</span>;
}
