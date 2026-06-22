import Link from "next/link";
import Logo from "./Logo";
import { site, footerLinks } from "@/data/site";

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.19-.24-.57-.48-.5-.66-.5l-.56-.01c-.2 0-.51.07-.78.37-.27.3-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.2 3.03.15.2 2.07 3.16 5.01 4.43.7.3 1.25.48 1.67.62.7.22 1.34.19 1.85.12.56-.08 1.74-.71 1.98-1.4.24-.69.24-1.28.17-1.4-.07-.12-.27-.2-.57-.35M12.04 21.5h-.01a9.42 9.42 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.36 9.36 0 0 1 2.76 6.67c0 5.2-4.23 9.43-9.43 9.43m8.03-17.46A11.32 11.32 0 0 0 12.04 0C5.8 0 .72 5.08.72 11.32c0 2 .52 3.95 1.52 5.67L.62 24l7.17-1.88a11.3 11.3 0 0 0 5.41 1.38h.01c6.24 0 11.32-5.08 11.32-11.32 0-3.03-1.18-5.87-3.32-8.01" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .59.04.86.12V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 5.5 20.7a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.54-.7" />
  </svg>
);

const socialLinks = [
  { label: "WhatsApp", href: site.socials.whatsapp, Icon: WhatsAppIcon },
  { label: "TikTok", href: site.socials.tiktok, Icon: TikTokIcon },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => {
          const external = /^https?:\/\//.test(l.href);
          return (
            <li key={l.label}>
              {external ? (
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  href={l.href}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <Logo size={48} />
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-white/80">
              {site.tagline}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {site.blurb}
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Pages" links={footerLinks.pages} />
          <FooterColumn title="Services" links={footerLinks.services} />
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-medium text-white/70">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
