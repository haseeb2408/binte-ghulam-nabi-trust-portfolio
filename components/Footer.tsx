import { site } from "@/lib/content";
import { FacebookIcon, InstagramIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-forest-dark py-10 text-sand/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <div className="flex items-center gap-3">
          {site.logo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={site.logo} alt="" className="h-10 w-auto object-contain" />
          )}
          <p className="text-sm">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full border border-sand/20 p-2 transition hover:bg-sand/10">
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full border border-sand/20 p-2 transition hover:bg-sand/10">
            <FacebookIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
