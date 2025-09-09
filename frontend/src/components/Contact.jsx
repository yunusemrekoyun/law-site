// ContactSection.jsx
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
              href="tel:+905551112233"
              className="text-[17px] font-semibold text-foreground/95"
            >
              +90 (555) 111 22 33
            </a>
          </InfoCard>

          <InfoCard label="E-posta">
            <a
              href="mailto:info@veysanoglu.av.tr"
              className="text-[17px] font-semibold text-foreground/95"
            >
              info@veysanoglu.av.tr
            </a>
          </InfoCard>

          <InfoCard label="WhatsApp">
            <a
              href="https://wa.me/905551112233"
              className="inline-flex items-center gap-2 text-[17px] font-semibold text-foreground/95"
              aria-label="WhatsApp ile hızlı mesaj gönder"
            >
              <ChatIcon className="h-[18px] w-[18px] text-foreground/80" />
              Hızlı Mesaj
            </a>
          </InfoCard>
        </div>

        {/* Alt 2 kutu */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <InfoCard label="Adres">
            <div className="text-[17px] text-foreground/95">
              Nispetiye Cd., Beşiktaş / İstanbul
            </div>
          </InfoCard>

          <InfoCard label="Çalışma Saatleri">
            <div className="text-[17px] text-foreground/95">
              Hafta içi 09:00 – 18:00
            </div>
          </InfoCard>
        </div>

        {/* Aksiyonlar */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {/* Primary: altın gradyan (global) */}
          <a
            href="tel:+905551112233"
            className="inline-flex items-center gap-2 rounded-[var(--radius-lg)] px-5 py-3 text-[15px] font-medium text-black shadow-[var(--shadow-soft)] ring-1 transition-[opacity,filter] hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-accent/40"
            style={{
              backgroundImage: "var(--gradient-accent)",
              borderColor: "rgba(228,189,99,.35)",
            }}
          >
            <PhoneIcon className="h-[18px] w-[18px]" />
            Hemen Ara
          </a>

          {/* Secondary: koyu panel + ince sınır */}
          <a
            href="mailto:info@veysanoglu.av.tr"
            className="inline-flex items-center gap-2 rounded-[var(--radius-lg)] border border-border/70 bg-[color:var(--color-surface-2)]/60 px-5 py-3 text-[15px] font-medium text-foreground shadow-[var(--shadow-soft)] transition-colors hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-accent/30"
          >
            <MailIcon className="h-[18px] w-[18px] text-foreground/85" />
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

/* ---------- Basit ikonlar ---------- */
function PhoneIcon({ className = "" }) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.64-3.07A19.5 19.5 0 0 1 3.15 8.82 19.8 19.8 0 0 1 .08 0 2 2 0 0 1 2.06 0h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.6 2.62a2 2 0 0 1-.45 2.11L6.1 7.56a16 16 0 0 0 6.34 6.34l1.11-1.11a2 2 0 0 1 2.11-.45c.84.28 1.72.48 2.62.6A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon({ className = "" }) {
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
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

function ChatIcon({ className = "" }) {
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
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z" />
      <path d="M8 9h8M8 13h5" />
    </svg>
  );
}
