// WorkingProcess.jsx
export default function WorkingProcess() {
  const steps = [
    {
      title: "Ön Görüşme",
      desc: "Dosyanın ön değerlendirmesi, hedef ve beklentilerin netleştirilmesi.",
      icon: CalendarIcon,
    },
    {
      title: "Analiz",
      desc: "Delil, mevzuat ve içtihat taraması; risk senaryolarının belirlenmesi.",
      icon: DocIcon,
    },
    {
      title: "Strateji",
      desc: "Arabuluculuk, uzlaşma veya dava seçeneklerinin stratejik planlanması.",
      icon: BulbIcon,
    },
    {
      title: "Temsil",
      desc: "Süreç yönetimi, etkin savunma ve şeffaf bilgilendirme.",
      icon: ScalesIcon,
    },
  ];

  return (
    <section className="section-y border-t border-border/50">
      <div className="container-x">
        {/* Başlık */}
        <header className="mb-10">
          <h2 className="text-[32px] md:text-[34px] font-semibold tracking-[-0.01em]">
            Çalışma Süreci
          </h2>
          <p className="mt-2 text-[16.5px] text-foreground/80">
            Ön görüşmeden nihai sonuca kadar şeffaf ve planlı ilerleyiş.
          </p>
        </header>

        {/* 4 Adım Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon; // eslint-friendly: içeride atama
            return (
              <article
                key={step.title}
                className="
                  rounded-[var(--radius-2xl)]
                  border border-border/60
                  bg-[color:var(--color-surface-2)]/85
                  p-6 shadow-[var(--shadow-soft)]
                "
              >
                <div className="flex items-start gap-4">
                  {/* Gri rozet (token tabanlı) */}
                  <span className="relative grid h-10 w-10 shrink-0 place-items-center">
                    {/* yüzey: foreground'dan hafif bir film */}
                    <span className="absolute inset-0 rounded-full bg-[color:var(--color-foreground)]/10" />
                    {/* ince halka: border token */}
                    <span className="absolute inset-0 rounded-full ring-1 ring-[color:var(--color-border)]/70" />
                    {/* ikon */}
                    <Icon className="relative z-10 h-5 w-5 text-[color:var(--color-foreground)]/85" />
                  </span>

                  <div>
                    <h3 className="text-[18px] font-semibold leading-[1.25]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-[1.7] text-[color:var(--color-muted)]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------- Basit, net SVG ikonları ------- */
function CalendarIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M8 2v4M16 2v4M3 9h18" />
    </svg>
  );
}
function DocIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 2h8l4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
      <path d="M14 2v6h6" />
      <path d="M8 12h8M8 16h8" />
    </svg>
  );
}
function BulbIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2a7 7 0 0 0-4 12v2h8v-2a7 7 0 0 0-4-12z" />
      <path d="M9 20h6M10 22h4" />
    </svg>
  );
}
function ScalesIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v3M5 7h14" />
      <path d="M7 7l-3 6h6l-3-6z" />
      <path d="M17 7l-3 6h6l-3-6z" />
      <path d="M12 21V6" />
    </svg>
  );
}
