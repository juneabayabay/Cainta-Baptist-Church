import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  id?: string;
  align?: "center" | "left";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  id,
  align = "center",
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <header
      className={`mb-8 sm:mb-10 ${centered ? "mx-auto max-w-xl text-center" : "max-w-lg"}`}
    >
      <p
        className={`section-eyebrow mb-2.5 ${centered ? "section-eyebrow-center" : ""}`}
      >
        {eyebrow}
      </p>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {description ? (
        <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted sm:text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
}
