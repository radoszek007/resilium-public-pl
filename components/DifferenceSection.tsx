import { SectionHeading } from "./SectionHeading";

const common = [
  "dużo teorii",
  "motywacja bez ćwiczenia",
  "ogólne rady",
  "dobry nastrój po seminarium",
  "słabe przeniesienie na sytuacje stresu"
];

const resilium = [
  "praktyczny trening",
  "praca z ciałem i układem nerwowym",
  "sytuacje modelowe",
  "stopniowe oswajanie presji",
  "przeniesienie do realnego życia"
];

export function DifferenceSection() {
  return (
    <section className="bg-resilium-dark py-24 text-white sm:py-32">
      <div className="section-shell">
        <SectionHeading dark align="center" title="Praktyczny rozwój bez pustych frazesów" />
        <div className="mt-14 grid overflow-hidden rounded-[30px] border border-white/[0.14] bg-white/[0.06] shadow-dark lg:grid-cols-2">
          <div className="border-b border-white/[0.12] p-7 lg:border-b-0 lg:border-r">
            <h3 className="text-2xl font-black text-white">Typowy kurs rozwoju osobistego</h3>
            <ul className="mt-8 space-y-4">
              {common.map((item) => (
                <li key={item} className="flex gap-3 text-white/[0.72]">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/[0.35]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/[0.04] p-7">
            <h3 className="text-2xl font-black text-resilium-orange">Resilium Public</h3>
            <ul className="mt-8 space-y-4">
              {resilium.map((item) => (
                <li key={item} className="flex gap-3 text-white/[0.86]">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-resilium-orange text-[11px] font-black">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
