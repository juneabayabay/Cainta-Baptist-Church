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
      className={`mb-10 sm:mb-12 ${centered ? "mx-auto max-w-2xl text-center" : "max-w-xl"}`}
    >
      <p
        className={`section-eyebrow mb-3 ${centered ? "section-eyebrow-center" : ""}`}
      >
        {eyebrow}
      </p>
      <h2 id={id} className="section-title mb-3">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
