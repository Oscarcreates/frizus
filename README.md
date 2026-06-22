# Frizus — Business Website

Marketing site for **Frizus** — trade, distribution, contracting & real estate in Nigeria.
Built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000  (uses Webpack — see note below)
npm run build    # production build
npm start        # serve production build
```

> **Note:** scripts use `--webpack` because Turbopack's native binary isn't available
> on this machine. Once native `@next/swc` works in your environment you can drop the
> flag in `package.json` for faster builds.

## Pages

| Route        | File                              | Sections |
|--------------|-----------------------------------|----------|
| `/`          | `src/app/page.tsx`                | Hero · Services · Customized band · Expertise · Why Frizus · Testimonials · Blog · CTA |
| `/about`     | `src/app/about/page.tsx`          | Hero · What We Do · Mission & Vision · CTA |
| `/services`  | `src/app/services/page.tsx`       | Hero · 6 service cards · CTA |
| `/blog`      | `src/app/blog/page.tsx`           | Hero · 6 post cards (dark) · CTA |
| `/contact`   | `src/app/contact/page.tsx`        | Hero · Contact details · Form |

Shared components live in `src/components/`. All copy, services, testimonials and
posts live in **`src/data/site.ts`** — edit there to update text site-wide.

## Design tokens

Defined in `src/app/globals.css` under `@theme`:

- `--color-ink` `#0b1437` — headings
- `--color-navy` `#14228c` — footer / CTA
- `--color-accent` `#2d6be5` — labels, links, buttons
- `--color-band` `#eef2fb` — light section bands
- Fonts: **Poppins** (display) + **Inter** (body)

## Images — swap in the real Figma exports

The photos in `public/images/` are **auto-sourced themed placeholders**. To match the
Figma design exactly, export each frame's image from Figma and overwrite these files
(keep the same filenames):

| Filename                    | Used for |
|-----------------------------|----------|
| `hero-containers.jpg`       | Home hero (shipping containers) |
| `contracting.jpg`           | Service: Contracting |
| `importation.jpg`           | Service: Importation & Distribution |
| `merchandise.jpg`           | Service: General Merchandise |
| `warehousing.jpg`           | Service: Warehousing & Inventory |
| `freight.jpg`               | Service: Freight Forwarding |
| `supplychain.jpg`           | Service: Supply Chain Management |
| `expertise.jpg`             | Home "Our Expertise" |
| `about-hero.jpg`            | About hero |
| `about-boxes.jpg`           | About "What We Do" |
| `about-target.jpg`          | About Mission/Vision |
| `services-hero.jpg`         | Services hero |
| `blog-hero.jpg`             | Blog hero |
| `contact-hero.jpg`          | Contact hero |
| `blog-port.jpg` … `blog-towers.jpg` | Blog post thumbnails (6) |

No code changes needed — just replace the files.

## Links & integrations

- **Service clicks → WhatsApp.** Every service card (home + services page) and the
  footer's Services column open a WhatsApp chat to the business line, pre-filled with
  the relevant service. Number is set in `src/data/site.ts` as `whatsappNumber`
  (currently `2347061023656`). Update it there to change everywhere.
- **Blog posts** have full article pages at `/blog/[slug]`, generated from the `posts`
  array in `src/data/site.ts` (each has a `body`). Add a post by adding an entry.

## To finish before launch

- Wire the contact form to a real backend / email service (currently shows a success state only).
- Confirm contact details in `src/data/site.ts` (email, address, socials). Phone is set to the WhatsApp line.
