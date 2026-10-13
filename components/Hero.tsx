import { site } from "@/lib/content";
import { FacebookIcon, InstagramIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-forest text-sand">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-sand/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold">Charitable Trust</p>
        <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-6xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-sand/85 sm:text-xl">{site.tagline}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#donate" className="rounded-full bg-gold px-7 py-3 font-semibold text-forest-dark transition hover:brightness-110">
            Support Our Work
          </a>
          <a href="#about" className="rounded-full border border-sand/40 px-7 py-3 font-semibold transition hover:bg-sand/10">
            Learn More
          </a>
        </div>

        <div className="mt-12 flex items-center gap-3 text-sm text-sand/80">
          <span>Follow us</span>
          <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full border border-sand/30 p-2 transition hover:bg-sand/10">
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full border border-sand/30 p-2 transition hover:bg-sand/10">
            <FacebookIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
