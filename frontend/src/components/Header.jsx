import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const nav = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (pathname === "/") {
      // Zaten anasayfadaysak scroll en üste
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Değilsek yönlendir
      nav("/");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/90">
      <div className="container-x flex h-16 items-center justify-between">
        {/* Sol: Logo / İsim */}
        <Link
          to="/"
          onClick={handleLogoClick}
          className="group flex items-center gap-3"
          aria-label="Anasayfa"
        >
          <span className="relative grid h-10 w-10 place-items-center rounded-full bg-bg text-[14px] font-semibold">
            <span className="pointer-events-none absolute inset-0 rounded-full ring-[1.5px] ring-accent/85"></span>
            <span className="pointer-events-none absolute -inset-1 -z-10 rounded-full blur-md bg-[rgba(228,189,99,0.10)]"></span>
            <span className="z-10 text-accent">SV</span>
          </span>
          <span className="leading-[1.05]">
            <span className="block text-[var(--text-lg)] font-semibold tracking-[-0.01em]">
              Suphi Veysanoğlu
            </span>
            <span className="block text-xs text-accent mt-[2px]">Avukat</span>
          </span>
        </Link>

        {/* Orta: Menü */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            to="/#hizmetler"
            className="text-base text-white transition-colors hover:text-[var(--color-foreground)]"
          >
            Hizmetler
          </Link>
          <Link
            to="/#hakkimda"
            className="text-base text-white transition-colors hover:text-[var(--color-foreground)]"
          >
            Hakkımda
          </Link>
          <Link
            to="/#vaka"
            className="text-base text-white transition-colors hover:text-[var(--color-foreground)]"
          >
            Vaka Öne Çıkanları
          </Link>
          <Link
            to="/#referanslar"
            className="text-base text-white transition-colors hover:text-[var(--color-foreground)]"
          >
            Referanslar
          </Link>
          <Link
            to="/#iletisim"
            className="text-base text-white transition-colors hover:text-[var(--color-foreground)]"
          >
            İletişim
          </Link>
          <Link
            to="/makaleler"
            className="text-base text-white transition-colors hover:text-[var(--color-foreground)]"
          >
            Makaleler
          </Link>
        </nav>

        {/* Sağ: CTA */}
        <Link
          to="/#iletisim"
          className="
            hidden md:inline-block
            rounded-md px-3 py-2
            text-sm text-black font-normal
            relative transition-[filter,opacity]
            hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-accent/40
          "
          style={{ backgroundImage: "var(--gradient-accent)" }}
        >
          İletişime Geçin
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-accent/60 shadow-[0_0_15px_rgba(228,189,99,0.6)]"
          />
        </Link>

        {/* Mobil kısa CTA */}
        <Link
          to="/#iletisim"
          className="md:hidden rounded-full px-2.5 py-1 text-xs font-semibold text-black"
          style={{ backgroundImage: "var(--gradient-accent)" }}
        >
          İletişim
        </Link>
      </div>
    </header>
  );
}
