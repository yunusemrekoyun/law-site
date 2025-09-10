// ContactSection.jsx
import { IconPhone, IconMail, IconBrandWhatsapp } from "@tabler/icons-react";

export default function ContactSection() {
  return (
    <section className="section-y border-t border-border/50">
      <div className="container-x">
        {/* Başlık */}
        <header className="mb-10">
          <h2 className="text-[32px] md:text-[34px] font-semibold tracking-[-0.01em]">
            İletişime Geçin
          </h2>
          <p className="mt-2 text-[16.5px] text-foreground/80">
            Ön görüşme randevusu için bize ulaşın.
          </p>
        </header>

        {/* Üst 3 kutu */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <InfoCard label="Telefon">
            <a
              href="tel:+905367779545"
              className="text-[17px] font-semibold text-foreground/95"
            >
              +90 (536) 777 95 45
            </a>
          </InfoCard>

          <InfoCard label="E-posta">
            <a
              href="mailto:av.suphiveysanoglu@hotmail.com"
              className="text-[17px] font-semibold text-foreground/95"
            >
              av.suphiveysanoglu@hotmail.com
            </a>
          </InfoCard>

          <InfoCard label="WhatsApp">
            <a
              href="https://wa.me/905367779545"
              className="inline-flex items-center gap-2 text-[17px] font-semibold text-foreground/95"
              aria-label="WhatsApp ile hızlı mesaj gönder"
            >
              <IconBrandWhatsapp className="h-[18px] w-[18px] text-foreground/80" />
              Hızlı Mesaj
            </a>
          </InfoCard>
        </div>

        {/* Alt 2 kutu */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <InfoCard label="Adres">
            <div className="text-[17px] text-foreground/95">
              İhsaniye Mahallesi Bahçeler Cad. Ofis Royal İş Merkezi No:22 K:1/11
              Akdeniz/MERSİN
            </div>
          </InfoCard>

          <InfoCard label="Çalışma Saatleri">
            <div className="text-[17px] text-foreground/95">Hafta içi 09:00 – 18:00</div>
          </InfoCard>
        </div>

        {/* Aksiyonlar */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {/* Primary: altın gradyan */}
          <a
            href="tel:+905367779545"
            className="inline-flex items-center gap-2 rounded-[var(--radius-lg)] px-5 py-3 text-[15px] font-medium text-black shadow-[var(--shadow-soft)] ring-1 transition-[opacity,filter] hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-accent/40"
            style={{ backgroundImage: "var(--gradient-accent)", borderColor: "rgba(228,189,99,.35)" }}
          >
            <IconPhone className="h-[18px] w-[18px]" />
            Hemen Ara
          </a>

          {/* Secondary */}
          <a
            href="mailto:info@veysanoglu.av.tr"
            className="inline-flex items-center gap-2 rounded-[var(--radius-lg)] border border-border/70 bg-[color:var(--color-surface-2)]/60 px-5 py-3 text-[15px] font-medium text-foreground shadow-[var(--shadow-soft)] transition-colors hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-accent/30"
          >
            <IconMail className="h-[18px] w-[18px] text-foreground/85" />
            E-posta Gönder
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Yeniden kullanılabilir kutu ---------- */
function InfoCard({ label, children }) {
  return (
    <div className="rounded-[var(--radius-2xl)] border border-border/60 bg-[color:var(--color-surface-2)]/75 p-6 shadow-[var(--shadow-soft)]">
      <div className="text-[13.5px] text-foreground/70">{label}</div>
      <div className="mt-2">{children}</div>
    </div>
  );
}