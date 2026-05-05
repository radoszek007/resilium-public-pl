import { SectionHeading } from "./SectionHeading";

const audiences = [
  ["Dla osób pod długotrwałą presją", "Praca, rodzina, odpowiedzialność, zmiany, niepewność. Gdy presja trwa długo, samo wytrzymywanie nie wystarcza. Trzeba umieć wracać do równowagi."],
  ["Dla tych, którzy chcą większej pewności", "Pewność rośnie, gdy człowiek wielokrotnie doświadcza, że potrafi znieść dyskomfort i mimo to działać."],
  ["Dla osób, które chcą lepiej podejmować decyzje", "Resilium pomaga zbudować prosty wewnętrzny system na momenty, gdy głowa jest przeciążona."],
  ["Dla tych, którzy chcą chronić swoje granice", "Nauczysz się lepiej rozpoznawać ryzyko, mówić jaśniej i wychodzić z sytuacji, które niepotrzebnie ci szkodzą."],
  ["Dla osób szukających rozwoju bez iluzji", "Praktyczny rozwój oparty nie na frazesach, ale na doświadczeniu, ciele, uwadze i powtarzalnym treningu."],
  ["Dla rodziców, partnerów i osób w odpowiedzialnych rolach", "Gdy ty jesteś stabilniejszy, często uspokaja się również przestrzeń wokół ciebie."]
];

export function AudienceSection() {
  return (
    <section id="pro-koho" className="bg-resilium-light py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          title="Dla kogo jest Resilium Public"
          description="Program jest przeznaczony dla osób, które nie chcą tylko rozumieć stresu, ale chcą umieć praktycznie z nim pracować."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map(([title, text]) => (
            <article key={title} className="rounded-[26px] border border-[#D9DEE8] bg-white p-7 shadow-soft">
              <h3 className="text-xl font-black text-resilium-ink">{title}</h3>
              <p className="mt-4 leading-7 text-resilium-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
