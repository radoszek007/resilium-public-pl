type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-4xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow ? (
        <p
          className={`mb-4 text-xs font-extrabold uppercase tracking-[0.24em] ${
            dark ? "text-resilium-orange" : "text-resilium-orange"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-black leading-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-resilium-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-8 sm:text-lg ${
            dark ? "text-white/75" : "text-resilium-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
