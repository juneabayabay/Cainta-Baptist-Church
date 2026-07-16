import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Gallery() {
  return (
    <section
      id="photos"
      className="section-shell surface-photos"
      aria-labelledby="photos-heading"
    >
      <div className="section-inner">
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
              Life together
            </p>
            <h2
              id="photos-heading"
              className="mb-4 font-serif text-[1.75rem] leading-tight font-semibold tracking-tight sm:text-[2.1rem] md:text-[2.4rem]"
            >
              A warm welcome{" "}
              <span className="text-accent">you can see</span>
            </h2>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Real moments of worship, friendship, and care. When you visit, you
              will not walk in alone.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 min-[480px]:gap-4 lg:grid-cols-3 lg:gap-5">
          {site.gallery.map((photo, i) => (
            <Reveal key={photo.src} delayMs={i * 60} className="h-full">
              <figure className="group relative h-full overflow-hidden rounded-2xl sm:rounded-3xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 479px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,28,51,0.62)] via-[rgba(18,28,51,0.1)] to-transparent" />
                </div>
                <figcaption className="absolute right-0 bottom-0 left-0 p-3 sm:p-4">
                  <p className="text-sm font-medium text-white sm:text-[0.95rem]">
                    {photo.caption}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={120}>
          <div className="mt-8 flex flex-col items-center gap-3 text-center sm:mt-10">
            <p className="max-w-md text-sm text-muted">
              These are sample photos for now. Real church moments will go here.
            </p>
            <a
              href={site.social.photos}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border-soft bg-white px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-foreground hover:bg-foreground hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              See more on Facebook
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
