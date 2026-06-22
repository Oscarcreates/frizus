"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/data/site";
import Logo from "./Logo";

const ChevronIcon = ({ className = "" }: { className?: string }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-white shadow-[0_8px_30px_-12px_rgba(11,20,55,0.25)]" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            const linkClasses = `text-sm font-medium transition-colors ${
              solid
                ? active
                  ? "text-accent"
                  : "text-ink/80 hover:text-accent"
                : active
                  ? "text-white"
                  : "text-white/85 hover:text-white"
            }`;

            if (item.children?.length) {
              return (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1.5 ${linkClasses}`}
                  >
                    {item.label}
                    <ChevronIcon className="transition-transform duration-200 group-hover:rotate-180" />
                  </Link>

                  {/* Dropdown panel */}
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="min-w-[270px] rounded-2xl border border-line bg-white p-2 shadow-[0_20px_50px_-20px_rgba(11,20,55,0.35)]">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-xl px-4 py-2.5 text-sm font-medium text-ink/80 transition-colors hover:bg-band hover:text-accent"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }

            return (
              <Link key={item.href} href={item.href} className={linkClasses}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={`hidden rounded-full border px-6 py-2.5 text-sm font-semibold transition-colors md:inline-flex ${
              solid
                ? "border-ink/15 text-ink hover:border-accent hover:text-accent"
                : "border-white/60 text-white hover:bg-white/10"
            }`}
          >
            Contact
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className={`grid h-10 w-10 place-items-center rounded-lg md:hidden ${
              solid ? "text-ink" : "text-white"
            }`}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-white md:hidden">
          <nav className="container-page flex flex-col py-4">
            {nav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-ink/90 hover:text-accent"
                >
                  {item.label}
                </Link>
                {item.children?.length ? (
                  <div className="mb-1 ml-3 flex flex-col border-l border-line pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="py-2 text-sm font-medium text-muted hover:text-accent"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-3 w-full"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
