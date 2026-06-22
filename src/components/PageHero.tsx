type PageHeroProps = {
  title: string;
  image: string;
  /** Vertical focus of the background image, e.g. "center", "top". */
  position?: string;
};

/** Full-bleed hero used on inner pages: image + dark overlay + centered title. */
export default function PageHero({
  title,
  image,
  position = "center",
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[clamp(360px,55vh,560px)] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: `url(${image})`, backgroundPosition: position }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/45 to-ink/65" />
      <div className="container-page relative z-10 pt-20 text-center">
        <h1 className="heading text-4xl text-white drop-shadow-sm sm:text-5xl md:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
