import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import PostCard from "@/components/PostCard";
import TestimonialCard from "@/components/TestimonialCard";
import TeamCard from "@/components/TeamCard";
import CTASection from "@/components/CTASection";
import { services, whyFrizus, team, testimonials, posts } from "@/data/site";

const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="11" stroke="#2d6be5" strokeWidth="1.6" />
    <path d="M8 12.5l2.5 2.5L16 9" stroke="#2d6be5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section className="relative flex min-h-[640px] items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/Gemini_Generated_Image_9xwl3z9xwl3z9xwl.png)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/30" />
        <div className="container-page relative z-10 pt-24">
          <div className="max-w-2xl">
            <h1 className="heading text-4xl text-white sm:text-5xl md:text-[3.4rem] md:leading-[1.05]">
              The No. 1 Trusted Procurement Firm
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Frizus is a leading procurement, contracting, construction, and business solutions company, delivering procurement services, project execution, logistics, property solutions/management and strategic product marketing.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/services" className="btn btn-primary">
                Explore Our Services
              </Link>
              <Link href="/contact" className="btn btn-outline-light">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Services ───────────── */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Divisions"
            title={
              <>
                Driving Business Growth
                <br className="hidden sm:block" /> Through Reliable Solutions
              </>
            }
            description="One group, four divisions, spanning trade & contracting, paints, mobility and real estate, built for the realities of the African market."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <ServiceCard
              title={services[0].title}
              image={services[0].image}
              href={`/services/${services[0].slug}`}
              className="min-h-[300px] lg:min-h-[420px]"
            />
            <div className="grid gap-5">
              <ServiceCard
                title={services[1].title}
                image={services[1].image}
                href={`/services/${services[1].slug}`}
                imageFit={services[1].imageFit}
                className="min-h-[200px]"
              />
              <ServiceCard
                title={services[2].title}
                image={services[2].image}
                href={`/services/${services[2].slug}`}
                imageFit={services[2].imageFit}
                className="min-h-[200px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Customized services band ───────────── */}
      <section className="bg-band">
        <div className="container-page py-10">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="heading text-2xl text-ink sm:text-3xl">
              Need customized services?
            </h2>
            <Link href="/contact" className="btn btn-outline-dark shrink-0">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────── Expertise ───────────── */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/images/expertise.jpg)" }}
            />
          </div>
          <div>
            <span className="eyebrow">Our Expertise</span>
            <h2 className="heading mt-4 text-3xl sm:text-4xl">
              Delivering Results Through Smart Solutions
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              At Frizus, we combine market intelligence, logistics expertise and
              deep local knowledge to deliver real results, whether you&apos;re
              breaking into a new market, sourcing goods internationally or
              developing commercial property.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all hover:gap-3"
            >
              Learn more about us
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────── Why Frizus ───────────── */}
      <section className="bg-white pb-20 sm:pb-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Frizus"
            title="Why businesses choose Frizus"
            align="center"
          />
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {whyFrizus.map((f) => (
              <div key={f.title} className="border-t border-line pt-6 sm:border-t-0 sm:pt-0">
                <CheckIcon />
                <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-base font-semibold text-accent">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Leadership / Stakeholders ───────────── */}
      <section className="border-t border-line bg-white py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Leadership"
            title="The People Behind Frizus"
            description="Meet the stakeholders driving our vision across every division."
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-10 sm:grid-cols-3">
            {team.map((member) => (
              <TeamCard key={member.role} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Testimonials ───────────── */}
      <section className="bg-band py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
            description="Real feedback from clients who trust us to deliver quality, reliability and results across every project and partnership."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Blog ───────────── */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Blog</span>
              <h2 className="heading mt-4 max-w-md text-3xl text-navy sm:text-4xl">
                Insights to help your business advance
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden shrink-0 text-sm font-semibold text-accent hover:underline sm:inline-flex"
            >
              View all posts →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
