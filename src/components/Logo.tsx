import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  /** Height of the logo badge in pixels (image scales to fit). */
  size?: number;
};

/** Frizus brand logo, shown on a white badge so it reads on any background. */
export default function Logo({ size = 40 }: LogoProps) {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Frizus home">
      <span
        className="grid place-items-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-black/5"
        style={{ height: size + 12 }}
      >
        <Image
          src="/frizus-logo.png"
          alt="Frizus"
          width={720}
          height={520}
          priority
          className="w-auto"
          style={{ height: size }}
        />
      </span>
    </Link>
  );
}
