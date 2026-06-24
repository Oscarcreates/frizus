import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Frizus for contracting, importation, distribution, merchandise and real estate solutions across Nigeria.",
};

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="#2d6be5" strokeWidth="1.7" />
    <path d="m4 7 8 6 8-6" stroke="#2d6be5" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" stroke="#2d6be5" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);
const PinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" stroke="#2d6be5" strokeWidth="1.7" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.5" stroke="#2d6be5" strokeWidth="1.7" />
  </svg>
);

export default function ContactPage() {
  const details = [
    { icon: <MailIcon />, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: <PhoneIcon />, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { icon: <PinIcon />, label: "Office", value: site.address, href: undefined },
  ];

  return (
    <>
      <PageHero title="Contact Us" image="/images/contact-hero.jpg" />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          {/* Info */}
          <div>
            <span className="eyebrow">Get In Touch</span>
            <h2 className="heading mt-4 text-3xl sm:text-4xl">
              Let&apos;s advance your business together
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Whether you&apos;re planning a project or
              exploring property, our team is ready to help. Reach out and
              we&apos;ll respond promptly.
            </p>

            <ul className="mt-10 space-y-6">
              {details.map((d) => (
                <li key={d.label} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10">
                    {d.icon}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a href={d.href} className="mt-1 block text-base font-medium text-ink hover:text-accent">
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-base font-medium text-ink">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-line bg-white p-7 shadow-[0_20px_60px_-30px_rgba(11,20,55,0.4)] sm:p-9">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
