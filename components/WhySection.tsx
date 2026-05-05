import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

const cards = [
  {
    title: "Spokój pod presją",
    text: "Nauczysz się szybko stabilizować oddech, postawę i uwagę w chwili napięcia, konfliktu lub przeciążenia.",
    icon: "01"
  },
  {
    title: "Jaśniejsze decyzje",
    text: "Otrzymasz prosty schemat, który pomaga odnaleźć się w trudnej sytuacji i wybrać kolejny krok bez zbędnej paniki.",
    icon: "02"
  },
  {
    title: "Więcej pewności",
    text: "Pewność nie powstaje z pozytywnych haseł. Buduje się ją przez doświadczenie, że potrafisz działać także wtedy, gdy nie jest wygodnie.",
    icon: "03"
  }
];

export function WhySection() {
  return (
    <section id="prinosy" className="bg-resilium-light py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading title="W życiu liczy się nie tylko to, co wiesz. Liczy się to, do czego masz dostęp pod presją." />
        <div className="mt-8 grid gap-8 text-base leading-8 text-resilium-muted lg:grid-cols-2">
          <p>
            W spokojnych warunkach większość osób wie, co należałoby zrobić. Oddychać, mówić
            rzeczowo, podjąć decyzję, nie wybuchnąć, nie przekraczać własnych granic, dokończyć
            ważną sprawę. Pod wpływem stresu ciało przyspiesza, uwaga się zawęża, a człowiek
            zaczyna reagować automatycznie.
          </p>
          <p>
            Resilium Public pomaga stopniowo zastępować automatyczne reakcje trenowanymi
            procedurami. To nie jest teoria. To praktyczne doświadczenie, do którego ciało i umysł
            mogą sięgnąć w realnym życiu.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="rounded-[28px] border border-[#E5EAF0] bg-resilium-card p-7 shadow-soft">
              <Icon>{card.icon}</Icon>
              <h3 className="mt-8 text-xl font-black text-resilium-ink">{card.title}</h3>
              <p className="mt-4 leading-7 text-resilium-muted">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
