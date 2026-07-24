import { site } from "@/lib/site";

/** Church schema so Google can show you in local / "near me" results. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: site.name,
    alternateName: site.fullName,
    description: site.description,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    image: `${site.url}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: "Cainta",
      addressRegion: "Rizal",
      postalCode: "1900",
      addressCountry: "PH",
    },
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
      site.social.youtube,
      site.social.instagram,
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
