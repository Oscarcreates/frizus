import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Frizus helps businesses streamline supply chains through reliable logistics, international sourcing and efficient distribution across Nigeria and West Africa.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" image="/images/about-hero.jpg" />

      {/* What We Do */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">What We Do</span>
            <h2 className="heading mt-4 text-3xl sm:text-4xl">
              Delivering Smarter Global Business Solutions
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              At Frizus, we help businesses streamline their supply chains through
              reliable logistics, international sourcing and efficient
              transportation. Our expertise keeps goods moving seamlessly across
              markets while supporting real growth and dependable operational
              success at every stage.
            </p>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/images/about-boxes.jpg)" }}
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-band py-20 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/images/about-target.jpg)" }}
            />
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="heading text-2xl sm:text-3xl">Our Mission</h3>
              <p className="mt-4 text-base leading-relaxed text-muted">
                To provide dependable trade, distribution, contracting and
                property solutions that help businesses and communities grow
                through quality, integrity and innovation.
              </p>
            </div>
            <div>
              <h3 className="heading text-2xl sm:text-3xl">Our Vision</h3>
              <p className="mt-4 text-base leading-relaxed text-muted">
                To be recognised as a leading partner in commerce and
                development, delivering exceptional value and creating lasting
                impact across every industry we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
