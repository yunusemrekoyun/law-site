export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/90">
      <div className="container-x flex h-16 items-center justify-between">
        {/* Sol: Logo / İsim */}
        <a
          href="#"
          className="group flex items-center gap-3"
          aria-label="Anasayfa"
        >
          <span className="relative grid h-10 w-10 place-items-center rounded-full bg-bg text-[14px] font-semibold">
            {/* Altın halka */}
            <span className="pointer-events-none absolute inset-0 rounded-full ring-[1.5px] ring-accent/85"></span>
            {/* Yumuşak altın parıltı */}
            <span className="pointer-events-none absolute -inset-1 -z-10 rounded-full blur-md bg-[rgba(228,189,99,0.10)]"></span>
            {/* SV yazısı altın renkte */}
            <span className="z-10 text-accent">SV</span>
          </span>
          <span className="leading-[1.05]">
            <span className="block text-[var(--text-lg)] font-semibold tracking-[-0.01em]">
              Suphi Veysanoğlu
            </span>
            <span className="block text-xs text-accent mt-[2px]">Avukat</span>{" "}
          </span>
        </a>

        {/* Orta: Menü */}
        <nav className="hidden items-center gap-6 md:flex">
          {[
            "Hizmetler",
            "Hakkımda",
            "Vaka Öne Çıkanları",
            "Referanslar",
            "İletişim",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="text-base text-white transition-colors hover:text-[var(--color-foreground)]"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Sağ: CTA */}
        {/* Sağ: CTA */}
        <a
          href="#"
          className="
    hidden md:inline-block
    rounded-md
    px-3 py-2        /* enini biraz daralt, boyunu biraz büyüt */
    text-sm text-black font-normal
    relative
    transition-[filter,opacity]
    hover:opacity-95
    focus:outline-none focus:ring-2 focus:ring-accent/40
  "
          style={{ backgroundImage: "var(--gradient-accent)" }}
        >
          İletişime Geçin
          {/* Gold parıltı */}
          <span
            aria-hidden="true"
            className="
      pointer-events-none absolute inset-0 rounded-md
      ring-1 ring-accent/60
      shadow-[0_0_15px_rgba(228,189,99,0.6)]
    "
          />
        </a>

        {/* Mobil kısa CTA */}
        <a
          href="#"
          className="md:hidden rounded-full px-2.5 py-1 text-xs font-semibold text-black"
          style={{ backgroundImage: "var(--gradient-accent)" }}
        >
          İletişim
        </a>
      </div>
    </header>
  );
}
