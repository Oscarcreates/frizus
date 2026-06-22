import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services, site, waLink } from "@/data/site";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.short,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);
  const contain = service.imageFit === "contain";

  return (
    <>
      <PageHero title={service.title} image="/images/services-hero.jpg" />

      {/* Detail */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            {contain ? (
              <>
                <div
                  className="absolute inset-0 scale-110 bg-cover bg-center blur-2xl"
                  style={{ backgroundImage: `url(${service.image})` }}
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
              </>
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />
            )}
          </div>

          {/* Copy */}
          <div>
            <span className="eyebrow">Frizus Group Division</span>
            <h2 className="heading mt-4 text-3xl sm:text-4xl">{service.short}</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {service.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={waLink(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Chat on WhatsApp
              </a>
              <Link href="/contact" className="btn btn-outline-dark">
                Contact Us
              </Link>
            </div>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all hover:gap-3"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to all services
            </Link>
          </div>
        </div>

        {/* Gallery */}
        {service.gallery?.length ? (
          <div className="container-page mt-14">
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {service.gallery.map((src) => (
                <div
                  key={src}
                  className="relative aspect-square overflow-hidden rounded-2xl bg-band"
                >
                  <div
                    className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${src})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      {/* Other divisions */}
      <section className="bg-band py-16 sm:py-20">
        <div className="container-page">
          <h2 className="heading text-2xl sm:text-3xl">Explore our other divisions</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((s) => (
              <ServiceCard
                key={s.slug}
                title={s.title}
                image={s.image}
                href={`/services/${s.slug}`}
                imageFit={s.imageFit}
                className="min-h-[220px]"
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
