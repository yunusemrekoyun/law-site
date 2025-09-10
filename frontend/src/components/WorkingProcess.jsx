// WorkingProcess.jsx
import {
  IconCalendar,
  IconFileText,
  IconBulb,
  IconScale,
} from "@tabler/icons-react";

export default function WorkingProcess() {
  const steps = [
    {
      title: "Ön Görüşme",
      desc: "Dosyanın ön değerlendirmesi, hedef ve beklentilerin netleştirilmesi.",
      icon: IconCalendar,
    },
    {
      title: "Analiz",
      desc: "Delil, mevzuat ve içtihat taraması; risk senaryolarının belirlenmesi.",
      icon: IconFileText,
    },
    {
      title: "Strateji",
      desc: "Arabuluculuk, uzlaşma veya dava seçeneklerinin stratejik planlanması.",
      icon: IconBulb,
    },
    {
      title: "Temsil",
      desc: "Süreç yönetimi, etkin savunma ve şeffaf bilgilendirme.",
      icon: IconScale,
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
          {steps.map(({ title, desc, icon: Icon }) => (
            <article
              key={title}
              className="
                rounded-[var(--radius-2xl)]
                border border-border/60
                bg-[color:var(--color-surface-2)]/85
                p-6 shadow-[var(--shadow-soft)]
              "
            >
              <div className="flex items-start gap-4">
                {/* Nötr rozet */}
                <span className="relative grid h-10 w-10 shrink-0 place-items-center">
                  <span className="absolute inset-0 rounded-full bg-[color:var(--color-foreground)]/10" />
                  <span className="absolute inset-0 rounded-full ring-1 ring-[color:var(--color-border)]/70" />
                  <Icon className="relative z-10 h-5 w-5 text-[color:var(--color-foreground)]/85" />
                </span>

                <div>
                  <h3 className="text-[18px] font-semibold leading-[1.25]">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-[1.7] text-[color:var(--color-muted)]">
                    {desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}