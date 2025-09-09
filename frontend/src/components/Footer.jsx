// Footer.jsx
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border/60 bg-surface">
      <div className="container-x">
        {/* Üst grid */}
        <div className="grid gap-8 py-7 md:grid-cols-3 md:gap-10">
          {/* Sol blok: logo + açıklama */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              {/* Header ile tutarlı rozet */}
              <span className="relative grid h-7 w-7 place-items-center rounded-full bg-[color:var(--color-bg)] text-[11px] font-semibold">
                <span className="pointer-events-none absolute inset-0 rounded-full ring-[1.5px] ring-[color:var(--color-accent)]/85"></span>
                <span
                  className="pointer-events-none absolute -inset-1 -z-10 rounded-full blur-md"
                  style={{
                    backgroundImage: "var(--gradient-accent)",
                    opacity: 0.18,
                  }}
                ></span>
                <span className="z-10 text-[color:var(--color-accent)]">
                  SV
                </span>
              </span>

              <span className="leading-[1.05]">
                <span className="block text-[var(--text-base)] font-semibold tracking-[-0.01em]">
                  Suphi Veysanoğlu
                </span>
                <span className="block  text-[color:var(--color-accent)]">
                  Avukat
                </span>
              </span>
            </div>

            <p className="max-w-md text-[13.5px] leading-[1.6] text-muted">
              İstanbul merkezli, bireysel ve kurumsal müvekkillere stratejik ve
              sonuç odaklı hukuki danışmanlık.
            </p>
          </div>

          {/* Orta blok: Bağlantılar */}
          <nav aria-label="Alt menü">
            <div className="text-[var(--text-base)] font-semibold">
              Bağlantılar
            </div>
            <ul className="mt-3 space-y-1.5 text-[14.5px] text-foreground/90">
              {[
                "Hizmetler",
                "Hakkımda",
                "Vaka Öne Çıkanları",
                "Referanslar",
                "İletişim",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition-colors hover:text-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sağ blok: İletişim */}
          <div>
            <div className="text-[var(--text-base)] font-semibold">
              İletişim
            </div>
            <ul className="mt-3 space-y-1.5 text-[14.5px] text-foreground/90">
              <li>T: +90 (555) 111 22 33</li>
              <li>E: info@veysanoglu.av.tr</li>
              <li>Nispetiye Cd., Beşiktaş / İstanbul</li>
            </ul>
          </div>
        </div>

        {/* Alt bar */}
        <div className="pb-6">
          <div className="rounded-[var(--radius-lg)] border border-border/60 bg-surface-2 px-4 py-2.5 text-center text-[12px] text-muted shadow-[var(--shadow-soft)]">
            © 2025 Suphi Veysanoğlu. Tüm hakları saklıdır.
          </div>
        </div>
      </div>
    </footer>
  );
}
