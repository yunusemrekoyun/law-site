import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const nav = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      nav("/");
    }
  };

  const menu = [
    { label: "Hizmetler", to: "/#hizmetler" },
    { label: "Hakkımda", to: "/#hakkimda" },
    { label: "Makaleler", to: "/makaleler" },
    { label: "Vaka Öne Çıkanları", to: "/#vaka" },
    { label: "Referanslar", to: "/#referanslar" },
    { label: "İletişim", to: "/#iletisim" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-surface/90 backdrop-blur supports-[backdrop-filter]:bg-surface/75">
      {/* Büyük header: h-16 ve geniş logo */}
      <div className="container-x flex h-16 items-center justify-between">
        {/* Sol: Logo / İsim (büyük boy) */}
        <Link
          to="/"
          onClick={handleLogoClick}
          className="group flex items-center gap-3"
          aria-label="Anasayfa"
        >
          <span className="relative grid h-10 w-10 place-items-center rounded-full bg-bg text-[14px] font-semibold">
            <span className="pointer-events-none absolute inset-0 rounded-full ring-[1.5px] ring-[color:var(--color-accent)]/85"></span>
            <span className="pointer-events-none absolute -inset-1 -z-10 rounded-full blur-md bg-[rgba(228,189,99,0.10)]"></span>
            <span className="z-10 text-[color:var(--color-accent)]">SV</span>
          </span>
          <span className="leading-[1.05]">
            <span className="block text-[var(--text-lg)] font-semibold tracking-[-0.01em]">
              Suphi Veysanoğlu
            </span>
            <span className="mt-[2px] block text-xs text-[color:var(--color-accent)]">
              Avukat
            </span>
          </span>
        </Link>

        {/* Orta: Menü — daha canlı yazı + altın underline hover */}
        <nav className="hidden items-center gap-6 md:flex">
          {menu.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="
                relative text-sm font-medium text-foreground
                transition-all duration-200 ease-out
                hover:text-foreground
                after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0
                after:bg-[color:var(--color-accent)] after:transition-all after:duration-200
                hover:after:w-full
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Sağ: CTA */}
        <Link
          to="/#iletisim"
          className="
            hidden md:inline-block
            rounded-md px-3 py-2
            text-sm text-black font-semibold
            relative transition-[filter,opacity]
            hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]/40
          "
          style={{ backgroundImage: "var(--gradient-accent)" }}
        >
          İletişime Geçin
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-[color:var(--color-accent)]/60 shadow-[0_0_15px_rgba(228,189,99,0.6)]"
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