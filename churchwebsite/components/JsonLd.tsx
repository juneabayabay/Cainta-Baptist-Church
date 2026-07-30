import { site } from "@/lib/site";

/** Church schema so Google can show you in local / "near me" results. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: site.name,
    alternateName: site.fullName,
    description: `${site.description} ${site.heroMeta}`,
    url: site.url,
    email: site.email,
    ...(site.phoneIsPlaceholder ? {} : { telephone: site.phone }),
    image: `${site.url}/hero-come-home.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: "Cainta",
      addressRegion: "Rizal",
      postalCode: "1900",
      addressCountry: "PH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 14.5784,
      longitude: 121.1169,
    },
    areaServed: ["Cainta", "Rizal", "Pasig", "Taytay", "Antipolo"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: site.hours.sunday.open,
        closes: site.hours.sunday.close,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: site.hours.wednesday.open,
        closes: site.hours.wednesday.close,
      },
    ],
    sameAs: [
      site.social.facebook,
      site.googleBusiness.mapsPlaceUrl,
      ...(site.social.youtube ? [site.social.youtube] : []),
      ...(site.social.instagram ? [site.social.instagram] : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
