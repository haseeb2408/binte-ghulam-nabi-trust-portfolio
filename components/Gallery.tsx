import { gallery, site } from "@/lib/content";
import { FacebookIcon, InstagramIcon } from "./Icons";

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">Gallery</p>
      <h2 className="font-serif text-3xl font-semibold text-forest sm:text-4xl">Moments from our work</h2>

      {gallery.length > 0 ? (
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {gallery.map((img) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={img.src} src={img.src} alt={img.alt} loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-3xl border border-dashed border-forest/30 bg-white/50 p-10 text-center">
          <p className="mx-auto max-w-lg text-lg text-ink/75">
            Photos and updates from our activities are shared on our social pages.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 font-semibold text-sand transition hover:bg-forest-dark">
              <InstagramIcon className="h-5 w-5" /> Instagram
            </a>
            <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-forest px-6 py-3 font-semibold text-forest transition hover:bg-forest/10">
              <FacebookIcon className="h-5 w-5" /> Facebook
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
