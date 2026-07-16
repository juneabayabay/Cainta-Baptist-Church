import Image from "next/image";

type LogoProps = {
  className?: string;
  variant?: "nav" | "footer";
  priority?: boolean;
};

const config = {
  nav: {
    box: "h-8 w-[118px] sm:h-9 sm:w-[132px] md:h-10 md:w-[148px]",
    width: 148,
    height: 52,
    sizes: "148px",
  },
  footer: {
    box: "h-9 w-[130px] sm:h-10 sm:w-[148px]",
    width: 148,
    height: 52,
    sizes: "148px",
  },
} as const;

export function Logo({
  className = "",
  variant = "nav",
  priority = false,
}: LogoProps) {
  const size = config[variant];

  return (
    <span className={`relative inline-block shrink-0 ${size.box} ${className}`}>
      <Image
        src="/logo.png"
        alt="Cainta Baptist Church"
        width={size.width}
        height={size.height}
        priority={priority}
        sizes={size.sizes}
        className="object-contain object-left"
        style={{ width: "100%", height: "100%" }}
      />
    </span>
  );
}

/** Compact logo frame for header/footer */
export function LogoMark({
  variant = "nav",
  priority = false,
  className = "",
}: LogoProps) {
  const padding =
    variant === "footer" ? "px-2 py-1.5 sm:px-2.5 sm:py-2" : "px-2 py-1 sm:px-2.5 sm:py-1.5";

  return (
    <span
      className={`inline-flex items-center justify-center rounded-lg bg-white ${padding} shadow-[0_1px_3px_rgba(44,62,80,0.08)] ring-1 ring-black/[0.05] ${className}`}
    >
      <Logo variant={variant} priority={priority} />
    </span>
  );
}
