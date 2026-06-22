import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import PostCard from "@/components/PostCard";
import { posts } from "@/data/site";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Banner */}
      <section className="relative flex min-h-[clamp(340px,48vh,460px)] items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/55 to-ink/35" />
        <div className="container-page relative z-10 pb-12 pt-24">
          <span className="inline-flex rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
            {post.category}
          </span>
          <h1 className="heading mt-4 max-w-3xl text-3xl text-white sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm font-medium text-white/75">{post.date}</p>
        </div>
      </section>

      {/* Article */}
      <article className="bg-white py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <p className="text-lg font-medium leading-relaxed text-ink">
            {post.excerpt}
          </p>
          <div className="mt-8 space-y-6">
            {post.body.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-muted">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-12 border-t border-line pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all hover:gap-3"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to all posts
            </Link>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="bg-band py-16 sm:py-20">
        <div className="container-page">
          <h2 className="heading text-2xl sm:text-3xl">Keep reading</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
