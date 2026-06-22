import Link from "next/link";
import type { Post } from "@/data/site";

type PostCardProps = {
  post: Post;
  tone?: "light" | "dark";
};

/** Blog post card: image, date, title. White on light sections, white card on dark. */
export default function PostCard({ post, tone = "light" }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_-20px_rgba(11,20,55,0.35)] ring-1 ring-line transition-shadow hover:shadow-[0_18px_50px_-20px_rgba(11,20,55,0.45)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${post.image})` }}
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {post.date}
        </p>
        <h3 className="mt-3 font-[family-name:var(--font-poppins)] text-base font-semibold leading-snug text-ink group-hover:text-accent">
          {post.title}
        </h3>
      </div>
    </Link>
  );
}
