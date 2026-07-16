type IconProps = {
  className?: string;
  "aria-hidden"?: boolean;
};

export function FacebookIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M14 13.5h2.5l.5-3H14V8.5c0-.8.2-1.3 1.4-1.3H17V4.1C16.4 4 15.5 4 14.6 4 12.5 4 11 5.3 11 7.8V10.5H8.5v3H11V20h3v-6.5z" />
    </svg>
  );
}

export function YoutubeIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.8 15.5v-7l6.2 3.5-6.2 3.5z" />
    </svg>
  );
}

export function InstagramIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2z" />
      <circle cx="17.5" cy="6.5" r="1.1" />
      <path d="M12 2.2c-2.7 0-3 .01-4.1.06-2.7.12-4 1.4-4.1 4.1C3.7 7.4 3.7 7.7 3.7 12s.01 4.6.06 5.7c.12 2.7 1.4 4 4.1 4.1 1.1.05 1.4.06 4.1.06s3-.01 4.1-.06c2.7-.12 4-1.4 4.1-4.1.05-1.1.06-1.4.06-5.7s-.01-4.6-.06-5.7c-.12-2.7-1.4-4-4.1-4.1C15 2.21 14.7 2.2 12 2.2zm0 1.6c2.6 0 2.9.01 4 .06 1.9.09 2.8.98 2.9 2.9.05 1 .06 1.3.06 3.9s-.01 2.9-.06 4c-.09 1.9-.98 2.8-2.9 2.9-1 .05-1.3.06-4 .06s-2.9-.01-4-.06c-1.9-.09-2.8-.98-2.9-2.9-.05-1-.06-1.3-.06-4s.01-2.9.06-4c.09-1.9.98-2.8 2.9-2.9 1.1-.05 1.4-.06 4-.06z" />
    </svg>
  );
}
