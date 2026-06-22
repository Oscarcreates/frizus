import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "The four divisions of the Frizus group: Frizus Procurement, Aejis Paints, Fri-Ride and Frizus Properties. Solutions designed to move your business forward.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Services" image="/images/services-hero.jpg" />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Divisions"
            title={
              <>
                Solutions Designed to Move
                <br className="hidden sm:block" /> Your Business Forward
              </>
            }
            description="The Frizus group spans four divisions, trade & contracting, paints, mobility and real estate, each built to deliver quality and reliability you can count on."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.slug} id={s.slug} className="scroll-mt-28">
                <ServiceCard
                  title={s.title}
                  image={s.image}
                  href={`/services/${s.slug}`}
                  imageFit={s.imageFit}
                  className="min-h-[240px]"
                />
                <p className="mt-4 px-1 text-sm font-semibold leading-relaxed text-ink">
                  {s.short}
                </p>
                <p className="mt-2 px-1 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
