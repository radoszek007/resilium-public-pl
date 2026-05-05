import { SectionHeading } from "./SectionHeading";

const outcomes = [
  "prosty schemat na pierwsze sekundy stresu",
  "zdolność lepszej pracy z oddechem i napięciem",
  "większą orientację w konfliktach i wymagających sytuacjach",
  "jaśniejszą komunikację własnych granic",
  "praktyczny schemat podejmowania decyzji pod presją",
  "większe zaufanie do własnych reakcji",
  "doświadczenie, że dyskomfort można opanować",
  "konkretne kroki do przeniesienia treningu do pracy, relacji i codziennego życia"
];

export function OutcomesSection() {
  return (
    <section className="bg-resilium-deep py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading title="Co wyniesiesz z treningu" />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {outcomes.map((item) => (
            <div key={item} className="flex items-start gap-4 rounded-2xl border border-[#E5EAF0] bg-resilium-card p-5">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-resilium-orange text-xs font-black text-white">
                ✓
              </span>
              <p className="font-semibold leading-7 text-resilium-ink">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
