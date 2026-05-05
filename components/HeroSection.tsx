export function HeroSection() {
  return (
    <section
      id="top"
      className="dark-grid relative flex min-h-[86vh] items-center overflow-hidden bg-resilium-dark pt-28 text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#526F83_0%,#587487_58%,#6F8797_100%)]" />
      <div className="absolute right-[-120px] top-28 h-80 w-80 rounded-full border border-white/10" />
      <div className="absolute bottom-16 left-[-80px] h-52 w-52 rounded-full bg-resilium-orange/10 blur-3xl" />

      <div className="section-shell relative z-10 py-20 sm:py-24">
        <div className="max-w-5xl">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/[0.14] bg-white/[0.08] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-white/[0.82]">
            <span className="h-2 w-2 rounded-full bg-resilium-orange" />
            RESILIUM PUBLIC
          </div>
          <h1 className="max-w-5xl text-5xl font-black leading-[0.98] tracking-normal text-white sm:text-7xl lg:text-8xl">
            Opanuj <span className="text-resilium-orange">presję</span>.
            <br />
            Działaj spokojniej.
            <br />
            Decyduj pewniej.
          </h1>
          <p className="mt-8 max-w-3xl text-lg font-medium leading-9 text-white/[0.78] sm:text-xl">
            Praktyczny system trenowanych reakcji dla osób, które chcą lepiej radzić sobie ze
            stresem, konfliktami, trudnymi decyzjami i codzienną presją. Resilium pomaga zachować
            spokój, jasność myślenia i zdolność działania wtedy, gdy są najbardziej potrzebne.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#prinosy" className="btn-primary w-full sm:w-auto">
              Chcę dowiedzieć się więcej
            </a>
            <a href="#jak-to-funguje" className="btn-secondary-dark w-full sm:w-auto">
              Jak działa Resilium
            </a>
          </div>
          <p className="mt-8 max-w-2xl border-l-2 border-resilium-orange pl-5 text-sm font-semibold leading-7 text-white/[0.72]">
            Praktyczny trening ciała, uwagi, podejmowania decyzji i reakcji pod presją.
          </p>
        </div>
      </div>
    </section>
  );
}
