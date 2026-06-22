import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  /** Stack centered (default two-column on large screens when description given). */
  align?: "split" | "center";
  tone?: "dark" | "light";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "split",
  tone = "dark",
}: SectionHeadingProps) {
  const titleColor = tone === "light" ? "text-white" : "text-ink";
  const descColor = tone === "light" ? "text-white/70" : "text-muted";

  if (align === "center") {
    return (
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow justify-center">{eyebrow}</span>
        <h2 className={`heading mt-4 text-3xl sm:text-4xl ${titleColor}`}>{title}</h2>
        {description && (
          <p className={`mt-4 text-base leading-relaxed ${descColor}`}>{description}</p>
        )}
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className={`heading mt-4 text-3xl sm:text-4xl ${titleColor}`}>{title}</h2>
      </div>
      {description && (
        <p className={`text-base leading-relaxed lg:pb-1 ${descColor}`}>{description}</p>
      )}
    </div>
  );
}
