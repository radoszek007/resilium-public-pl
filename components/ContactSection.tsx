import { SectionHeading } from "./SectionHeading";

export function ContactSection() {
  return (
    <section id="poptavka" className="bg-resilium-dark py-24 text-white sm:py-32">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              dark
              title="Zacznij trenować reakcję, której będziesz potrzebować w realnym życiu."
              description="Spokój, pewność i odporność nie powstają przypadkiem. Powstają przez powtarzanie właściwych procedur w dobrze ustawionym treningu."
            />
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact-form" className="btn-primary w-full sm:w-auto">
                Chcę zacząć
              </a>
              <a href="mailto:info@resilium.cz" className="btn-secondary-dark w-full sm:w-auto">
                Mam pytanie
              </a>
            </div>
            <p className="mt-8 max-w-xl leading-8 text-white/[0.72]">
              Wypełnij krótki formularz, a odezwiemy się z najbliższą możliwością udziału w programie.
            </p>
          </div>

          <form
            id="contact-form"
            className="rounded-[30px] border border-white/[0.14] bg-white/[0.07] p-6 shadow-dark sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-white/[0.78]">Imię i nazwisko</span>
                <input className="w-full rounded-2xl border border-white/[0.14] bg-white/95 px-4 py-3 text-resilium-ink outline-none focus:border-resilium-orange" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-white/[0.78]">E-mail</span>
                <input type="email" className="w-full rounded-2xl border border-white/[0.14] bg-white/95 px-4 py-3 text-resilium-ink outline-none focus:border-resilium-orange" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-white/[0.78]">Telefon</span>
                <input type="tel" className="w-full rounded-2xl border border-white/[0.14] bg-white/95 px-4 py-3 text-resilium-ink outline-none focus:border-resilium-orange" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-white/[0.78]">Program</span>
                <select className="w-full rounded-2xl border border-white/[0.14] bg-white/95 px-4 py-3 text-resilium-ink outline-none focus:border-resilium-orange">
                  <option>Resilium Intro</option>
                  <option>Resilium Foundations</option>
                  <option>Resilium Life Practice</option>
                  <option>Nie wiem, potrzebuję rekomendacji</option>
                </select>
              </label>
            </div>
            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-bold text-white/[0.78]">Wiadomość</span>
              <textarea rows={5} className="w-full resize-none rounded-2xl border border-white/[0.14] bg-white/95 px-4 py-3 text-resilium-ink outline-none focus:border-resilium-orange" />
            </label>
            <button type="button" className="btn-primary mt-6 w-full">
              Wyślij zapytanie
            </button>
            <p className="mt-4 text-sm leading-6 text-white/[0.58]">
              Wysłanie formularza nie tworzy żadnego zobowiązania. Służy wyłącznie ustaleniu kolejnego kroku.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
