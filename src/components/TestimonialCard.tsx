import type { Testimonial } from "@/data/site";

/** Quote card used in the testimonials row. */
export default function TestimonialCard({ quote, name, role }: Testimonial) {
  return (
    <figure className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-[0_10px_40px_-24px_rgba(11,20,55,0.4)] ring-1 ring-line">
      <svg width="34" height="26" viewBox="0 0 34 26" fill="none" aria-hidden="true" className="mb-5">
        <path
          d="M0 26V14.5C0 6.7 4.9 1.2 13 0l1.3 3.6C9.8 5.1 7.6 7.7 7.4 11.2H13V26H0Zm20 0V14.5C20 6.7 24.9 1.2 33 0l1.3 3.6C29.8 5.1 27.6 7.7 27.4 11.2H33V26H20Z"
          fill="#dbe4fb"
        />
      </svg>
      <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-muted">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6">
        <p className="font-[family-name:var(--font-poppins)] text-sm font-semibold text-ink">
          {name}
        </p>
        <p className="mt-0.5 text-xs text-muted">{role}</p>
      </figcaption>
    </figure>
  );
}
