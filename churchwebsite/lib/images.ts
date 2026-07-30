/** Shared Next/Image defaults — keeps photos sharp on retina screens. */
export const imageQuality = {
  hero: 100,
  fullBleed: 95,
  gallery: 90,
  avatar: 90,
} as const;

/** Full-width heroes / banners (covers 3× mobile DPR up to desktop). */
export const sizesFullWidth =
  "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px";

/** Gallery grid: 2 cols mobile, 4 cols desktop. */
export const sizesGallery =
  "(max-width: 639px) 50vw, (max-width: 1023px) 50vw, 25vw";

/** Side-by-side feature image. */
export const sizesFeature =
  "(max-width: 1023px) 100vw, (max-width: 1280px) 55vw, 600px";
