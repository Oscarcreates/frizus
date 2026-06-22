import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PostCard from "@/components/PostCard";
import CTASection from "@/components/CTASection";
import { posts } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights from the Frizus team on logistics, contracting and real estate across Nigeria and West Africa.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" image="/images/blog-hero.jpg" />

      <section className="bg-ink py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <span className="eyebrow">Our Blog</span>
              <h2 className="heading mt-4 text-3xl text-white sm:text-4xl">
                Insights to help your business advance
              </h2>
            </div>
            <p className="text-base leading-relaxed text-white/65 lg:pb-1">
              Our blog features insights from the Frizus team and consultants,
              sharing best practices across importation, logistics, contracting
              and real estate.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
