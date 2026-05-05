import { SectionHeading } from "./SectionHeading";

const scenarios = [
  ["Wymagający dzień pracy", "Gdy kumulują się zadania, terminy i presja otoczenia."],
  ["Konflikt z drugą osobą", "Gdy potrzebujesz zachować spokój, mówić jasno i nie eskalować sytuacji."],
  ["Osobista decyzja", "Gdy trzeba podjąć decyzję mimo strachu lub niepewności."],
  ["Obciążenie rodzinne", "Gdy chcesz reagować dojrzalej w sytuacjach, które szybko uruchamiają emocje."],
  ["Poczucie przeciążenia", "Gdy wszystkiego jest za dużo i potrzebujesz wrócić do pierwszego możliwego kroku."],
  ["Ochrona granic", "Gdy potrzebujesz powiedzieć nie, odejść albo stanąć po swojej stronie bez zbędnej agresji."]
];

export function ScenariosSection() {
  return (
    <section className="bg-resilium-light py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading title="Gdzie wykorzystasz Resilium" />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {scenarios.map(([title, text]) => (
            <article key={title} className="rounded-[26px] border border-[#D9DEE8] bg-white p-7">
              <h3 className="text-xl font-black text-resilium-ink">{title}</h3>
              <p className="mt-4 leading-7 text-resilium-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
