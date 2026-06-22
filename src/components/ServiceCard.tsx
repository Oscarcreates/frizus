import Link from "next/link";

type ServiceCardProps = {
  title: string;
  image: string;
  href?: string;
  /** Taller card for featured/large placements. */
  className?: string;
  /**
   * How the image sits in the card. "cover" (default) fills and crops;
   * "contain" shows the whole image on a neutral fill (for product shots
   * whose aspect ratio doesn't match the card).
   */
  imageFit?: "cover" | "contain";
};

const isExternal = (href: string) => /^https?:\/\//.test(href);

const ArrowIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Image card with dark gradient overlay, title and arrow, used in service grids. */
export default function ServiceCard({
  title,
  image,
  href = "/services",
  className = "",
  imageFit = "cover",
}: ServiceCardProps) {
  const external = isExternal(href);
  const contain = imageFit === "contain";
  const inner = (
    <>
      {contain ? (
        <>
          {/* Blurred copy fills the card so the whole image can sit on top uncropped. */}
          <div
            className="absolute inset-0 scale-110 bg-cover bg-center blur-2xl"
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
        </>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
      <div className="relative flex h-full items-end justify-between gap-4 p-6">
        <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-white">
          {title}
        </h3>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-white transition-transform duration-300 group-hover:translate-x-1">
          <ArrowIcon />
        </span>
      </div>
    </>
  );

  const classes = `group relative block overflow-hidden rounded-2xl ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
