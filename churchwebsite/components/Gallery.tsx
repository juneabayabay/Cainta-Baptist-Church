import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { imageQuality, sizesGallery } from "@/lib/images";
import { site } from "@/lib/site";

export function Gallery() {
  return (
    <section
      id="photos"
      className="section-shell surface-white"
      aria-labelledby="photos-heading"
    >
      <div className="section-inner">
        <Reveal>
          <SectionHeader
            id="photos-heading"
            eyebrow="Community"
            title={
              <>
                Moments of{" "}
                <span className="text-accent">grace</span>
              </>
            }
          />
        </Reveal>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4 lg:gap-4">
          {site.gallery.map((photo, i) => (
            <Reveal key={photo.src} delayMs={i * 50} variant="scale" className="h-full">
              <figure className="group card overflow-hidden p-0">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    quality={imageQuality.gallery}
                    sizes={sizesGallery}
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--footer)]/85 via-[color:var(--footer)]/20 to-transparent opacity-90 transition group-hover:opacity-95" />
                  <figcaption className="absolute right-0 bottom-0 left-0 p-3 sm:p-4">
                    <p className="text-xs font-medium text-white sm:text-sm">
                      {photo.caption}
                    </p>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={100}>
          <div className="mt-7 flex justify-center">
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
