import { SectionHeading } from "./SectionHeading";
import Image from "next/image";

export function InstructorSection() {
  return (
    <section className="bg-resilium-deep py-24 sm:py-32">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex justify-center lg:justify-start">
          <div className="relative aspect-square w-full max-w-[460px] rounded-full border border-resilium-orange/25 bg-gradient-to-br from-resilium-dark to-resilium-card p-3 shadow-soft">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-[#A8B7C5]">
              <Image
                src="/radim-koncitek.png"
                alt="Radim Končítek"
                fill
                sizes="(min-width: 1024px) 460px, 90vw"
                className="object-contain"
                priority={false}
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />
            </div>
            <div className="absolute bottom-8 left-1/2 w-[78%] -translate-x-1/2 rounded-full border border-white/[0.16] bg-resilium-dark/86 px-5 py-3 text-center backdrop-blur-md">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-white/[0.62]">
                Radim Končítek
              </p>
              <p className="mt-1 text-lg font-black text-white">Resilium</p>
            </div>
          </div>
        </div>
        <div>
          <SectionHeading title="Kto stoi za Resilium" />
          <div className="mt-8 space-y-6 text-base leading-8 text-resilium-muted">
            <p>
              Resilium stworzył Radim Končítek, specjalista od bezpieczeństwa osobistego,
              odporności psychofizycznej i komunikacji kryzysowej. W swojej pracy łączy wieloletnią
              praktykę samoobrony, pracę z ciałem, komunikację, NLP, podejmowanie decyzji pod presją
              i trening odporności.
            </p>
            <p>
              Jego podejście jest praktyczne, bezpośrednie i oparte na doświadczeniu: człowiek nie
              uczy się radzić sobie z presją przez samo słuchanie o niej. Uczy się wtedy, gdy w
              bezpiecznym środowisku doświadcza napięcia, uczy się je regulować i stopniowo buduje
              zaufanie do własnej reakcji.
            </p>
          </div>
          <a href="#poptavka" className="btn-primary mt-9 w-full sm:w-auto">
            Poznaj Resilium
          </a>
        </div>
      </div>
    </section>
  );
}
