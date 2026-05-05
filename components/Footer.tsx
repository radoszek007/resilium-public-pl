import Image from "next/image";

const links = [
  ["Korzyści", "#prinosy"],
  ["Jak to działa", "#jak-to-funguje"],
  ["Programy", "#programy"],
  ["FAQ", "#faq"],
  ["Kontakt", "#poptavka"]
];

export function Footer() {
  return (
    <footer className="bg-[#3F5870] py-12 text-white">
      <div className="section-shell">
        <div className="grid gap-10 border-b border-white/[0.12] pb-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex flex-wrap items-end gap-2.5">
              <span className="relative block h-12 w-[132px] shrink-0">
                <Image
                  src="/logo-resilium-cele-square.png"
                  alt="Resilium"
                  fill
                  sizes="132px"
                  className="object-contain"
                />
              </span>
              <span className="pb-2 text-[10px] font-extrabold uppercase tracking-[0.3em] text-resilium-orange/90">
                PUBLIC
              </span>
            </div>
            <p className="mt-4 max-w-md leading-7 text-white/[0.66]">
              System trenowanych reakcji.
            </p>
          </div>
          <nav className="flex flex-col gap-3">
            {links.map(([label, href]) => (
              <a key={href} href={href} className="font-semibold text-white/70 transition hover:text-white">
                {label}
              </a>
            ))}
          </nav>
          <div>
            <p className="font-black">Kontakt</p>
            <a href="mailto:info@resilium.cz" className="mt-3 inline-block font-semibold text-resilium-orange">
              info@resilium.cz
            </a>
          </div>
        </div>
        <p className="pt-8 text-sm leading-7 text-white/[0.52]">
          Resilium jest częścią szerszego systemu praktycznego treningu odporności, podejmowania decyzji i bezpieczeństwa osobistego.
        </p>
      </div>
    </footer>
  );
}
