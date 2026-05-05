type IconProps = {
  children: React.ReactNode;
  dark?: boolean;
};

export function Icon({ children, dark = false }: IconProps) {
  return (
    <div
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-lg font-black ${
        dark
          ? "border border-white/[0.12] bg-white/[0.08] text-resilium-orange"
          : "border border-[#E5EAF0] bg-resilium-slate text-resilium-orange shadow-sm"
      }`}
    >
      {children}
    </div>
  );
}
