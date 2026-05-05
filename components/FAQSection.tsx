"use client";

import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  ["Czy Resilium jest terapią?", "Nie. Resilium nie jest terapią ani usługą medyczną. To praktyczny trening pracy z presją, reakcją, uwagą i podejmowaniem decyzji. Jeśli ktoś mierzy się z poważnymi trudnościami psychicznymi, warto skorzystać z pomocy specjalisty."],
  ["Czy muszę być sprawny fizycznie?", "Nie. Program jest ustawiony tak, aby był dostępny dla zwykłych osób. Nie chodzi o wynik, rywalizację ani trening walki. Pracujemy z prostymi ćwiczeniami ruchowymi i sytuacyjnymi."],
  ["Czy to jest samoobrona?", "Resilium korzysta z niektórych zasad bezpieczeństwa osobistego, ale jego celem jest szersza odporność w życiu. Pracuje z ciałem, stresem, granicami, komunikacją i podejmowaniem decyzji."],
  ["Co jeśli obawiam się ćwiczeń stresowych?", "Trening jest prowadzony stopniowo i bezpiecznie. Celem nie jest przełamanie człowieka, ale poszerzenie jego zdolności radzenia sobie z presją. Intensywność dopasowuje się do grupy."],
  ["Czy pomoże mi to w pracy i życiu osobistym?", "Tak. Zasady Resilium można przenieść do sytuacji zawodowych, relacji, konfliktów, decyzji i codziennego radzenia sobie ze stresem."],
  ["Czy program jest odpowiedni dla początkujących?", "Tak. Resilium Intro i Resilium Foundations są zaprojektowane jako programy wejściowe bez konieczności wcześniejszego doświadczenia."]
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-resilium-light py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading align="center" title="Najczęstsze pytania" />
        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {faqs.map(([question, answer], index) => {
            const open = openIndex === index;
            return (
              <div key={question} className="rounded-[24px] border border-[#E5EAF0] bg-resilium-card">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                >
                  <span className="text-lg font-black text-resilium-ink">{question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-resilium-slate text-xl font-black text-resilium-orange">
                    {open ? "-" : "+"}
                  </span>
                </button>
                {open ? <p className="px-6 pb-6 leading-8 text-resilium-muted">{answer}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
