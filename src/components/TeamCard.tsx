import type { TeamMember } from "@/data/site";

/** Derive up to two initials from a name for the avatar fallback. */
function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

/** Stakeholder card: headshot (or initials avatar), name and role. */
export default function TeamCard({ name, role, image, imagePosition }: TeamMember) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative h-40 w-40 overflow-hidden rounded-full ring-4 ring-band sm:h-44 sm:w-44">
        {image ? (
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: imagePosition ?? "center",
            }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent to-navy font-[family-name:var(--font-poppins)] text-3xl font-bold text-white">
            {initials(name) || "?"}
          </div>
        )}
      </div>
      <h3 className="mt-5 font-[family-name:var(--font-poppins)] text-lg font-semibold text-ink">
        {name}
      </h3>
      <p className="mt-1 text-sm font-medium text-accent">{role}</p>
    </div>
  );
}
