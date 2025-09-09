// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="container-x section-y grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
      {/* Sol içerik */}
      <div className="space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[13px] font-medium text-muted">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Premium hukuk danışmanlığı
        </span>

        <h1 className="text-4xl font-bold tracking-tight">Suphi Veysanoğlu</h1>

        <p className="max-w-xl text-lg leading-relaxed text-muted">
          Haklarınızı en üst düzeyde savunan, stratejik ve sonuç odaklı
          yaklaşım. Ceza, Ticaret, İş ve Aile hukuku başta olmak üzere kapsamlı
          temsil.
        </p>

        <div className="flex gap-4">
          <a
            href="#contact"
            className="rounded-[var(--radius-lg)] px-5 py-3 text-[15px] font-semibold text-black shadow-[var(--shadow-soft)] transition-[opacity,filter] hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-accent/40"
            style={{ backgroundImage: "var(--gradient-accent)" }}
          >
            İletişime Geçin
          </a>
          <a
            href="#services"
            className="rounded-[var(--radius-lg)] border border-border bg-surface px-5 py-3 text-[15px] font-semibold text-foreground transition-colors hover:bg-surface-2"
          >
            Hizmetleri Görün
          </a>
        </div>

        <div className="mt-4 flex flex-wrap gap-6 text-muted">
          <span>• 10+ yıl deneyim</span>
          <span>• Şeffaf ücretlendirme</span>
          <span>• Gizlilik ve özen</span>
        </div>
      </div>

      {/* Sağ görsel (yatay kutu) */}
      <div className="relative w-full md:justify-self-end md:w-[440px] lg:w-[550px]">
        {/* Çerçeve: accent ince çizgi + gölge (ARTIK SABİT HEIGHT YOK) */}
        <div
          className="
      relative overflow-hidden rounded-[var(--radius-xl)]
      ring-[1.5px] ring-[color:var(--color-accent)]/95
      shadow-[0_18px_50px_rgba(0,0,0,.35)]
       w-full
    "
        >
          <img
            src="/img/law-office.jpg"
            alt="Law Office"
            className="h-full w-full object-cover object-center transition-transform duration-500 ease-out hover:scale-[1.03]"
          />
        </div>

        {/* Sağ alt rozet: buz-beyaz cam */}
        <div
          className="
      absolute bottom-5 right-5
      rounded-[14px]
      border border-white/25
      bg-white/22 backdrop-blur-md
      px-4 py-2 text-sm
      shadow-[0_12px_28px_rgba(0,0,0,.28)]
      transition-transform duration-300 hover:scale-[1.03]
    "
        >
          <span className="font-semibold text-[color:var(--color-accent)]">
            Ödüllü Hizmet
          </span>
          <div className="text-xs text-foreground/90">Müvekkil memnuniyeti</div>
        </div>
      </div>
    </section>
  );
}
