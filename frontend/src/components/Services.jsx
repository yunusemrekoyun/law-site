// Services.jsx
export default function Services() {
  const items = [
    {
      title: "Ceza Hukuku",
      desc: "Soruşturma ve kovuşturmada etkin savunma, tutukluluğa itiraz, itibar koruma.",
      icon: ScalesIcon,
    },
    {
      title: "Ticaret Hukuku",
      desc: "Sözleşmeler, ihtilaf yönetimi, şirketler hukuku ve uyum süreçleri.",
      icon: BriefcaseIcon,
    },
    {
      title: "Gayrimenkul",
      desc: "İmar, tapu, iskan süreçleri ve uyuşmazlık çözümü.",
      icon: BuildingIcon,
    },
    {
      title: "Aile Hukuku",
      desc: "Boşanma, velayet, nafaka, mal rejimi ve koruma tedbirleri.",
      icon: GavelIcon,
    },
    {
      title: "İş Hukuku",
      desc: "Kıdem-ihbar, işe iade, iş güvenliği ve arabuluculuk.",
      icon: ShieldIcon,
    },
    {
      title: "Tahkim & Arabuluculuk",
      desc: "Hızlı ve gizli alternatif uyuşmazlık çözümü.",
      icon: CourtIcon,
    },
  ];

  return (
    <section className="section-y border-t border-border/50">
      <div className="container-x">
        {/* Başlık */}
        <header className="mb-10">
          <h2 className="text-[32px] md:text-[34px] font-semibold tracking-[-0.01em]">
            Hizmet Alanları
          </h2>
          <p className="mt-2 text-[16.5px] text-foreground/80">
            İhtiyacınıza uygun, stratejik ve sonuç odaklı hukuki danışmanlık.
          </p>
        </header>

        {/* Kartlar */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="
                  rounded-[var(--radius-2xl)]
                  border border-border/60
                  bg-[color:var(--color-surface-2)]/85
                  p-6 shadow-[var(--shadow-soft)]
                "
              >
                <div className="flex items-start gap-4">
                  {/* Altın rozet (global accent + iç koyu yüzey) */}
                  <span className="relative grid h-12 w-12 shrink-0 place-items-center text-[color:var(--color-accent)]">
                    {/* dış halka */}
                    <span className="pointer-events-none absolute inset-0 rounded-full ring-[1.6px] ring-[color:var(--color-accent)]/90" />
                    {/* iç yüzey */}
                    <span className="pointer-events-none absolute inset-[6px] rounded-full bg-[color:var(--color-surface)] ring-1 ring-[color:var(--color-accent)]/35" />
                    {/* yumuşak parıltı */}
                    <span
                      className="pointer-events-none absolute -inset-1 -z-10 rounded-full blur-md"
                      style={{
                        backgroundImage: "var(--gradient-accent)",
                        opacity: 0.22,
                      }}
                    />
                    {/* ikon */}
                    <Icon className="relative z-10 h-5 w-5" />
                  </span>

                  <div>
                    <h3 className="text-[18px] font-semibold leading-[1.25]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[15px] leading-[1.65] text-[color:var(--color-muted)]">
                      {item.desc}
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
    >
      <path d="M12 3v3" />
      <path d="M5 7h14" />
      <path d="M7 7l-3 6h6l-3-6z" />
      <path d="M17 7l-3 6h6l-3-6z" />
      <path d="M12 21V6" />
    </svg>
  );
}
function BriefcaseIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 10h18v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8z" />
      <path d="M9 10V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3" />
      <path d="M3 13h18" />
    </svg>
  );
}
function BuildingIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="3" width="10" height="18" rx="1" />
      <path d="M14 8h6v13H8" />
      <path d="M7 7h2M7 11h2M7 15h2" />
    </svg>
  );
}
function GavelIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 10l-4-4 2-2 4 4-2 2z" />
      <path d="M7 16l-2 2" />
      <path d="M3 21l5-5" />
      <path d="M14 9l7 7" />
    </svg>
  );
}
function ShieldIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
      <path d="M12 11v6" />
      <path d="M9 14h6" />
    </svg>
  );
}
function CourtIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 10h18" />
      <path d="M5 10V7l7-4 7 4v3" />
      <path d="M6 10v8M10 10v8M14 10v8M18 10v8" />
      <path d="M3 18h18" />
    </svg>
  );
}
