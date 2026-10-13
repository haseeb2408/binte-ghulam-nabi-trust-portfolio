"use client";

import { useCallback, useEffect, useState } from "react";
import { activities, site } from "@/lib/content";
import { FacebookIcon, InstagramIcon } from "./Icons";

function SocialButtons({ label }: { label: string }) {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 font-semibold text-sand transition hover:bg-forest-dark">
        <InstagramIcon className="h-5 w-5" /> {label} Instagram
      </a>
      <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-forest px-6 py-3 font-semibold text-forest transition hover:bg-forest/10">
        <FacebookIcon className="h-5 w-5" /> {label} Facebook
      </a>
    </div>
  );
}

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const activity = activities[active];
  const photos = activity
    ? activity.photos.map((file, i) => ({
        src: `/gallery/${activity.id}/${file}`,
        alt: `${activity.title} – photo ${i + 1}`,
      }))
    : [];
  const clips = activity
    ? activity.videos.map((v) => ({
        src: `/videos/${activity.id}/${v.file}`,
        title: v.title ?? activity.title,
        poster: v.poster ? `/gallery/${activity.id}/${v.poster}` : undefined,
      }))
    : [];

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setLightbox((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close, step]);

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">Gallery</p>
      <h2 className="font-serif text-3xl font-semibold text-forest sm:text-4xl">Moments from our work</h2>

      {activity ? (
        <>
          <div className="mt-8 flex flex-wrap gap-3" role="tablist" aria-label="Activities">
            {activities.map((a, i) => (
              <button
                key={a.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  i === active
                    ? "bg-forest text-sand"
                    : "border border-forest/30 text-forest hover:bg-forest/10"
                }`}
              >
                {a.title}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="font-serif text-2xl font-semibold text-forest">{activity.title}</h3>
            {activity.date && <p className="mt-1 text-sm text-ink/60">{activity.date}</p>}
            {activity.description && (
              <p className="mt-3 max-w-2xl text-lg text-ink/75">{activity.description}</p>
            )}
          </div>

          {photos.length > 0 && (
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {photos.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setLightbox(i)}
                  className="group overflow-hidden rounded-2xl"
                  aria-label={`Open ${img.alt}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          )}

          {clips.length > 0 && (
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {clips.map((v) => (
                <figure key={v.src} className="overflow-hidden rounded-2xl bg-white ring-1 ring-forest/10">
                  <video controls preload="metadata" poster={v.poster} className="aspect-video w-full bg-black">
                    <source src={v.src} type="video/mp4" />
                  </video>
                  <figcaption className="px-4 py-3 text-sm text-ink/75">{v.title}</figcaption>
                </figure>
              ))}
            </div>
          )}

          <SocialButtons label="More on" />

          {lightbox !== null && photos[lightbox] && (
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
              role="dialog"
              aria-modal="true"
              onClick={close}
            >
              <button type="button" onClick={close} aria-label="Close" className="absolute right-4 top-4 rounded-full bg-white/10 px-4 py-2 text-2xl text-white hover:bg-white/20">
                ×
              </button>
              {photos.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous photo"
                    onClick={(e) => { e.stopPropagation(); step(-1); }}
                    className="absolute left-3 rounded-full bg-white/10 px-4 py-3 text-2xl text-white hover:bg-white/20"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    aria-label="Next photo"
                    onClick={(e) => { e.stopPropagation(); step(1); }}
                    className="absolute right-3 rounded-full bg-white/10 px-4 py-3 text-2xl text-white hover:bg-white/20"
                  >
                    ›
                  </button>
                </>
              )}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[90vh] max-w-full rounded-lg object-contain"
              />
            </div>
          )}
        </>
      ) : (
        <div className="mt-10 rounded-3xl border border-dashed border-forest/30 bg-white/50 p-10 text-center">
          <p className="mx-auto max-w-lg text-lg text-ink/75">
            Photos and updates from our activities are shared on our social pages.
          </p>
          <div className="flex justify-center">
            <SocialButtons label="" />
          </div>
        </div>
      )}
    </section>
  );
}
