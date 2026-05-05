import { SectionHeading } from "./SectionHeading";

const programs = [
  {
    name: "Resilium Intro",
    subtitle: "Wprowadzający warsztat praktyczny",
    length: "2-3 godziny",
    text: "Poznanie podstawowych zasad pracy z presją, oddechem, postawą i podejmowaniem decyzji. Dobry wybór jako pierwsze doświadczenie.",
    output: "Zrozumiesz, jak twoje ciało reaguje na stres, i poznasz pierwsze proste techniki do codziennego użycia.",
    cta: "Chcę warsztat wprowadzający"
  },
  {
    name: "Resilium Foundations",
    subtitle: "Podstawowy trening osobistej stabilności",
    length: "1 dzień",
    text: "Praktyczny dzień poświęcony stabilizacji pod presją, pracy z uwagą, granicami, komunikacją i podstawowymi sytuacjami modelowymi.",
    output: "Otrzymasz konkretne protokoły na stres, konflikt, przeciążenie i podejmowanie decyzji.",
    cta: "Chcę program podstawowy"
  },
  {
    name: "Resilium Life Practice",
    subtitle: "Głębsza praca z odpornością w codziennym życiu",
    length: "weekend lub cykl kontynuacyjny",
    text: "Program dla osób, które chcą włączyć zasady Resilium do pracy, relacji, osobistej dyscypliny i długofalowej zmiany życiowej.",
    output: "Zbudujesz osobisty system na presję, decyzje, granice i powrót do wewnętrznej stabilności.",
    cta: "Chcę program pogłębiony"
  }
];

export function ProgramsSection() {
  return (
    <section id="programy" className="bg-resilium-deep py-24 text-white sm:py-32">
      <div className="section-shell">
        <SectionHeading dark align="center" title="Wybierz wejście do systemu Resilium" />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {programs.map((program) => (
            <article key={program.name} className="flex h-full flex-col rounded-[30px] border border-white/[0.14] bg-white/[0.07] p-7 shadow-dark">
              <div className="mb-6 inline-flex w-fit rounded-full border border-white/[0.14] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white/[0.72]">
                {program.length}
              </div>
              <h3 className="text-2xl font-black">{program.name}</h3>
              <p className="mt-2 font-bold text-resilium-orange">{program.subtitle}</p>
              <div className="flex flex-1 flex-col">
                <p className="mt-6 leading-7 text-white/[0.74]">{program.text}</p>
                <p className="mt-6 rounded-2xl border border-white/[0.12] bg-black/10 p-4 text-sm leading-7 text-white/[0.78]">
                  <span className="font-black text-white">Efekt: </span>
                  {program.output}
                </p>
              </div>
              <a href="#poptavka" className="btn-primary mt-8 w-full">
                {program.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
