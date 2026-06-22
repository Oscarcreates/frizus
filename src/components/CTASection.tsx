import Link from "next/link";

type CTASectionProps = {
  title?: string;
  buttonLabel?: string;
  href?: string;
};

/** The recurring "Ready to advance your business?" navy band above the footer. */
export default function CTASection({
  title = "Ready to advance your business?",
  buttonLabel = "Contact Us",
  href = "/contact",
}: CTASectionProps) {
  return (
    <section className="bg-navy">
      <div className="container-page py-14">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="heading text-2xl text-white sm:text-3xl">{title}</h2>
          <Link href={href} className="btn btn-outline-light shrink-0">
            {buttonLabel}
          </Link>
        </div>
        <div className="mt-10 h-px w-full bg-white/15" />
      </div>
    </section>
  );
}
