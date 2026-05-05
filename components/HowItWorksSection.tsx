import { SectionHeading } from "./SectionHeading";

const steps = [
  ["Stabilizuj", "Uspokojenie ciała, oddechu i postawy. Ciało jest pierwszą drogą powrotu do kontroli."],
  ["Zorientuj się", "Co się dzieje? Jakie jest ryzyko? Co jest teraz najważniejsze?"],
  ["Zdecyduj", "Wybierz kolejny krok zgodnie z sytuacją, wartościami i realnymi możliwościami."],
  ["Działaj", "Zamień decyzję w konkretną akcję: słowo, granicę, ruch, wybór albo zakończenie sytuacji."]
];

export function HowItWorksSection() {
  return (
    <section id="jak-to-funguje" className="bg-resilium-dark py-24 text-white sm:py-32">
      <div className="section-shell">
        <SectionHeading
          dark
          title="Prosty proces na trudne momenty"
          description="Resilium trenuje reakcję stopniowo. Najpierw w prostych ćwiczeniach, potem w sytuacjach modelowych, a następnie w scenariuszach zbliżonych do codziennego życia."
        />
        <div className="mt-16 grid gap-5 lg:grid-cols-4">
          {steps.map(([title, text], index) => (
            <article key={title} className="relative rounded-[28px] border border-[#E5EAF0] bg-resilium-card p-7 shadow-soft">
              <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-full bg-resilium-orange text-sm font-black text-white">
                {index + 1}
              </div>
              <h3 className="text-2xl font-black text-resilium-ink">{title}</h3>
              <p className="mt-4 leading-7 text-resilium-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
