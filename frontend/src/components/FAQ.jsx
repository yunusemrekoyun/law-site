// FAQ.jsx
export default function FAQ() {
  const items = [
    "Ön görüşme nasıl gerçekleşiyor?",
    "Ücretlendirme nasıl belirleniyor?",
    "Gizlilik nasıl korunuyor?",
    "Dava dışı çözüm yöntemleri değerlendiriliyor mu?",
  ];

  return (
    <section className="section-y border-t border-border/50">
      <div className="container-x">
        {/* Başlık */}
        <header className="mb-10">
          <h2 className="text-[32px] md:text-[34px] font-semibold tracking-[-0.01em]">
            Sıkça Sorulan Sorular
          </h2>
          <p className="mt-2 text-[16.5px] text-foreground/80">
            Süreç, ücretlendirme ve gizlilik hakkında temel bilgiler.
          </p>
        </header>

        {/* Kutu */}
        <div
          className="
            overflow-hidden
            rounded-[var(--radius-2xl)]
            border border-border/60
            bg-[color:var(--color-surface-2)]/65
            shadow-[var(--shadow-soft)]
          "
        >
          <ul className="divide-y divide-border/50">
            {items.map((q, i) => (
              <li
                key={q}
                className={[
                  "flex items-center justify-between px-6 py-5",
                  i === 0
                    ? "bg-[color:var(--color-foreground)]/[0.05]"
                    : "bg-transparent",
                  "hover:bg-[color:var(--color-foreground)]/[0.045] transition-colors",
                ].join(" ")}
              >
                <span className="text-[16px] font-semibold text-foreground/95">
                  {q}
                </span>

                {/* sağ tarafta minimal chevron */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-foreground/60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
