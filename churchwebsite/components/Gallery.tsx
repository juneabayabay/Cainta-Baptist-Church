import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export function Gallery() {
  return (
    <section
      id="photos"
      className="section-shell surface-soft"
      aria-labelledby="photos-heading"
    >
      <div className="section-inner">
        <Reveal>
          <SectionHeader
            id="photos-heading"
            eyebrow="Community"
            title={
              <>
                Life together at{" "}
                <span className="text-accent">CBC</span>
              </>
            }
            description="Worship, friendship, and care — a glimpse of our church family."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {site.gallery.map((photo, i) => (
            <Reveal key={photo.src} delayMs={i * 50} className="h-full">
              <figure className="group card overflow-hidden p-0">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(46,107,173,0.55)] via-transparent to-transparent" />
                  <figcaption className="absolute right-0 bottom-0 left-0 p-4">
                    <p className="text-sm font-medium text-white">
                      {photo.caption}
                    </p>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={100}>
          <div className="mt-8 flex justify-center">
            <a
              href={site.social.photos}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary text-sm"
            >
              More on Facebook
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
