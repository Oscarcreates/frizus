// Central content + copy for the Frizus website.
// Copy here has been polished and enhanced from the original design.

export const site = {
  name: "Frizus",
  tagline: "Let's Advance Together",
  // Production URL — used for metadata, sitemap and robots.
  // Update this to your live domain before submitting to Google.
  url: "https://frizus.com",
  blurb:
    "An integrated group spanning trade & contracting, paints, mobility and real estate, advancing businesses and communities across Africa.",
  email: "frizusgroup@gmail.com",
  phone: "+234 708 740 5238",
  address: "Suite 8, No 38 Seaman Avenue Awka, Along secretariat road and adjacent to Anambra State government house (Light house) Awka.",
  socials: {
    whatsapp: "https://wa.me/2347087405238",
    tiktok: "https://www.tiktok.com/@frizus",
    linkedin: "https://www.linkedin.com/company/frizus",
    instagram: "https://www.instagram.com/frizus",
    twitter: "https://twitter.com/frizus",
    facebook: "https://www.facebook.com/frizus",
  },
};

// WhatsApp business line (international format, no "+" or spaces).
export const whatsappNumber = "2347087405238";

/** Build a WhatsApp click-to-chat link, optionally pre-filled for a service. */
export function waLink(service?: string) {
  const base = `https://wa.me/${whatsappNumber}`;
  if (!service) return base;
  const msg = `Hi Frizus, I'm interested in your ${service} service. Please share more details.`;
  return `${base}?text=${encodeURIComponent(msg)}`;
}

export type NavItem = {
  label: string;
  href: string;
  /** Dropdown items shown under this nav entry. */
  children?: { label: string; href: string }[];
};

// `nav` is declared after the `services` array below so the Services
// dropdown can be generated from the list of divisions.

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  /** Set to "contain" for product shots that shouldn't be cropped. */
  imageFit?: "cover" | "contain";
  /** Extra images shown at the bottom of the service's detail page. */
  gallery?: string[];
};

// The four Frizus group divisions (Services page).
// The Home page features the first three.
export const services: Service[] = [
  {
    slug: "integrated-services",
    title: "Frizus Integrated Services",
    short:
      "Contracting, distribution and supply chain, delivered end to end.",
    description:
      "Our flagship division and the engine of the Frizus group. Frizus Integrated Services handles contracting, general merchandise, logistics consultancy and coordinating suppliers so your projects and inventory move on spec, on budget and on time.",
    image: "/images/supplychain.jpg",
  },
  {
    slug: "aejis-paints",
    title: "Aejis Paints",
    short: "Quality paints and coatings for homes, businesses and projects.",
    description:
      "Aejis Paints is our paints and coatings brand colours that transform. We produce durable, vibrant, value-for-money finishes for residential, commercial and industrial use. From wall primers and ultra-durable exterior protective coatings to high-gloss finishes, Aejis delivers colour that lasts and a finish you can trust.",
    image: "/images/aejis-paints.png",
    gallery: ["/images/aejis-bucket.png"],
  },
  {
    slug: "fri-ride",
    title: "Fri-Ride",
    short: "Reliable mobility and transport you can count on.",
    description:
      "Fri-Ride is our mobility and transport service, connecting people and goods with safe, affordable and dependable rides. From executive sedans and limousines to vans for groups and cargo, Fri-Ride keeps you moving with a well-kept fleet and drivers you can rely on, every trip, every time.",
    image: "/images/fri-ride.png",
    imageFit: "contain",
  },
  {
    slug: "frizus-properties",
    title: "Frizus Properties",
    short: "Acquire, develop and manage real estate with confidence.",
    description:
      "Frizus Properties is our real estate arm, helping clients identify, acquire, develop and manage residential and commercial property. Backed by deep local market knowledge, we turn land and buildings into lasting value, from sound investments to well-built, well-located developments.",
    image: "/images/frizus-properties.webp",
    imageFit: "contain",
  },
];

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({
      label: s.title,
      href: `/services/${s.slug}`,
    })),
  },
  { label: "Blog", href: "/blog" },
];

export type Feature = { title: string; description: string };

export const whyFrizus: Feature[] = [
  {
    title: "End-to-End Delivery",
    description:
      "From sourcing to final delivery, we handle every step of the supply chain so nothing falls through the cracks.",
  },
  {
    title: "Local Expertise, Global Reach",
    description:
      "Deep roots in the Nigerian market paired with international sourcing networks that open doors abroad.",
  },
  {
    title: "Trusted & Transparent",
    description:
      "Long-term partnerships built on integrity, clear communication and measurable, accountable results.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  /** Headshot path under /public. Falls back to an initials avatar when omitted. */
  image?: string;
  /** CSS background-position for the headshot (e.g. "center 20%"). Defaults to "center". */
  imagePosition?: string;
};

// Company stakeholders shown on the landing page.
// TODO: replace placeholder names and add headshots under /public/images.
export const team: TeamMember[] = [
  { name: "Izuchukwu Francis Ejikeme", role: "Chief Executive Officer", image: "/images/team-ceo.jpg", imagePosition: "center top" },
  { name: "Chisom Egbuna", role: "Managing Director", image: "/images/team-md.jpg" },
  { name: "Ebuka Benjamin Nwafor", role: "Operations Manager", image: "/images/nwafor.jpg", imagePosition: "center top" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "What impressed us most was their responsiveness and attention to detail. They delivered exactly what was promised, and we'll gladly work with them again.",
    name: "Ada Adeyemi",
    role: "Operations Lead, MerciGroup West Africa",
  },
  {
    quote:
      "The team was professional, easy to communicate with, and genuinely committed to getting the job done right the first time.",
    name: "Grace Okafor",
    role: "Director, Pinnacle Enterprises",
  },
  {
    quote:
      "The quality of service exceeded our expectations. They've become a partner we rely on, and we look forward to future collaborations.",
    name: "Chioma Nwosu",
    role: "Procurement Lead, Crestline Ventures",
  },
  {
    quote:
      "Frizus took the time to understand our needs and provided solutions that genuinely added value to our operations.",
    name: "Ibrahim Hassan",
    role: "Managing Director, Horizon Commercial Services",
  },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  /** Article body, one string per paragraph. */
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "navigate-customs-importation-nigeria",
    title: "How to Navigate Customs in Nigeria (2024 Guide)",
    date: "May 12, 2025",
    category: "Importation",
    image: "/images/blog-port.jpg",
    excerpt:
      "A practical, step-by-step walkthrough of clearing goods through Nigerian customs: paperwork, duties, common pitfalls and how to avoid costly delays.",
    body: [
      "Importing into Nigeria can be straightforward when you understand the process and prepare your paperwork in advance. The delays that frustrate most businesses are rarely about the goods themselves; they come down to incomplete documentation, misclassified items and avoidable errors at the point of clearance.",
      "Start with the essentials. Every shipment needs a Form M, a Pre-Arrival Assessment Report (PAAR), a commercial invoice, a packing list and a bill of lading. Getting these right and consistent with one another is the single biggest factor in a smooth clearance. Discrepancies between documents are the most common reason goods are held.",
      "Classification matters just as much. Each product has an HS code that determines the duty payable, and getting it wrong can mean overpaying, underpaying or triggering an inspection. When in doubt, confirm the correct code before the goods ship rather than after they arrive.",
      "Finally, budget realistically for duties, levies and terminal charges, and build a few days of buffer into your timeline. Working with an experienced clearing partner removes most of the guesswork, keeps your costs predictable and gets your inventory moving without surprises.",
      "At Frizus, we handle importation and customs clearance end to end, so your goods arrive where they need to be, when they need to be there.",
    ],
  },
  {
    slug: "commercial-real-estate-booming-abuja",
    title: "Why Commercial Real Estate is Booming in Abuja",
    date: "April 28, 2025",
    category: "Real Estate",
    image: "/images/blog-building.jpg",
    excerpt:
      "Demand for commercial property in Abuja is surging. Here's what's driving the boom and where the smartest opportunities are emerging.",
    body: [
      "Abuja's commercial property market is in one of its strongest stretches in years. As businesses expand and relocate to the capital, demand for quality office space, retail units and mixed-use developments continues to outpace supply.",
      "Several forces are driving the boom. A growing population of professionals, steady government and institutional activity, and improving infrastructure have all made the city more attractive to investors. Districts that were quiet a decade ago are now sought-after business addresses.",
      "For investors, the opportunity lies in well-located, well-built assets that meet modern tenant expectations: reliable power, good access, secure parking and flexible layouts. These are the properties that lease quickly and hold their value.",
      "The key, as always, is local knowledge. Understanding which districts are appreciating, how titles and approvals work, and what tenants actually want is the difference between a sound investment and a costly mistake.",
      "Frizus helps clients identify, acquire and develop commercial property with confidence, backed by deep insight into the Nigerian market.",
    ],
  },
  {
    slug: "contracting-best-practices-west-africa",
    title: "Building Smarter: Contracting Best Practices for West African Projects",
    date: "March 15, 2025",
    category: "Contracting",
    image: "/images/blog-blueprint.jpg",
    excerpt:
      "The contracting habits that separate projects that finish on time from those that stall, drawn from real West African builds.",
    body: [
      "Every project that finishes on time and on budget shares the same handful of habits. The ones that stall usually fail for predictable reasons: unclear scope, weak supplier coordination and decisions made too late.",
      "It starts with planning. A clear scope, a realistic schedule and a transparent budget agreed upfront prevent the disputes and rework that quietly drain projects. The hour spent aligning everyone at the start saves weeks later.",
      "Procurement is the next pressure point. In West African markets, lead times and material availability can vary, so ordering early and keeping reliable supplier relationships is essential. The best contractors treat their supply chain as part of the project plan, not an afterthought.",
      "Communication ties it all together. Regular site updates, a single point of accountability and quick escalation when issues arise keep small problems from becoming expensive ones.",
      "At Frizus, we manage contracting projects with this discipline built in, coordinating suppliers, labour and logistics so your build finishes on spec, on budget and on time.",
    ],
  },
  {
    slug: "optimizing-supply-chains-faster-delivery",
    title: "Optimizing Supply Chains for Faster Delivery",
    date: "May 12, 2025",
    category: "Logistics",
    image: "/images/blog-port2.jpg",
    excerpt:
      "Small changes in routing, inventory and supplier coordination can shave days off delivery. Here's where to start.",
    body: [
      "Faster delivery rarely comes from one big change. It comes from tightening several small things at once: how you route shipments, how you hold inventory and how well your suppliers coordinate with you.",
      "Start with visibility. You cannot improve what you cannot see. Knowing where your stock is, what is in transit and when it will arrive lets you make better decisions and spot delays before they cascade.",
      "Next, look at inventory placement. Holding the right goods closer to demand cuts the final leg of delivery dramatically. A little forecasting goes a long way toward avoiding both stockouts and overstock.",
      "Finally, consolidate your partners. Fewer, stronger supplier and carrier relationships mean better rates, clearer accountability and fewer handoffs where things go wrong.",
      "Frizus optimises every link in the chain, from sourcing to final delivery, so you spend less and move faster.",
    ],
  },
  {
    slug: "future-container-shipping-nigeria",
    title: "The Future of Container Shipping in Nigeria",
    date: "April 28, 2025",
    category: "Shipping",
    image: "/images/blog-vision.jpg",
    excerpt:
      "Port upgrades, digital clearance and new trade routes are reshaping container shipping in Nigeria. What it means for importers.",
    body: [
      "Container shipping in Nigeria is changing fast. Port upgrades, digital clearance systems and new trade routes are reshaping how goods move in and out of the country, and importers who adapt early will have a real edge.",
      "Port modernisation is the headline. Investment in terminal capacity and equipment is steadily reducing congestion at key gateways, which means shorter dwell times and more predictable schedules for shippers.",
      "Digitisation is the quieter revolution. As clearance and documentation move online, the paperwork that once caused days of delay is becoming faster and more transparent, lowering the cost and uncertainty of importing.",
      "New and diversified trade routes are also giving importers more options, reducing reliance on any single corridor and improving resilience when disruptions hit.",
      "Frizus stays ahead of these shifts so our clients always move their containers through the fastest, most reliable channels available.",
    ],
  },
  {
    slug: "sustainable-building-trends",
    title: "Sustainable Building Trends Shaping Modern Development",
    date: "March 15, 2025",
    category: "Real Estate",
    image: "/images/blog-towers.jpg",
    excerpt:
      "From green materials to energy-smart design, sustainability is rewriting the rules of modern development. Here are the trends that matter.",
    body: [
      "Sustainability is no longer a nice-to-have in development; it is becoming the standard buyers, tenants and regulators expect. The good news is that greener buildings are also cheaper to run and easier to lease.",
      "Energy-smart design leads the way. Better insulation, natural ventilation and efficient cooling cut running costs significantly in our climate, and they make spaces more comfortable for the people who use them.",
      "Materials matter too. Locally sourced and lower-impact materials reduce both the carbon footprint and the cost of a project, while often improving durability in local conditions.",
      "On-site power, water harvesting and smart building systems round out the picture, turning sustainability from a marketing line into measurable savings over a building's life.",
      "Frizus brings these principles into the projects we contract and develop, building value that lasts.",
    ],
  },
];

// Footer link columns
export const footerLinks = {
  company: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
  ],
  pages: [
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  // Each division links to its own service page.
  services: services.map((s) => ({
    label: s.title,
    href: `/services/${s.slug}`,
  })),
};
