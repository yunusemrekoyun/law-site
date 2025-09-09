// ContactForm.jsx
export default function ContactForm() {
  return (
    <section className="section-y border-t border-border/50" id="contact">
      <div className="container-x">
        {/* Başlık */}
        <header className="mb-10">
          <h2 className="text-[32px] md:text-[34px] font-semibold tracking-[-0.01em]">
            İletişim Formu
          </h2>
          <p className="mt-2 text-[16.5px] text-foreground/80">
            Kısa bir not bırakın, size dönüş yapalım.
          </p>
        </header>

        {/* KART */}
        <div className="rounded-[var(--radius-2xl)] border border-border/60 bg-[color:var(--color-surface-2)]/70 p-6 shadow-[var(--shadow-soft)] md:p-7">
          <form className="grid grid-cols-1 gap-6" aria-label="İletişim formu">
            {/* 2 kolon: isim / e-posta */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Field label="İsim Soyisim">
                <input
                  type="text"
                  className="inp"
                  name="name"
                  autoComplete="name"
                />
              </Field>

              <Field label="E-posta">
                <input
                  type="email"
                  className="inp"
                  name="email"
                  autoComplete="email"
                />
              </Field>
            </div>

            {/* 2 kolon: telefon / konu */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Field label="Telefon (opsiyonel)">
                <input
                  type="tel"
                  className="inp"
                  name="phone"
                  autoComplete="tel"
                />
              </Field>

              <Field label="Konu">
                <input type="text" className="inp" name="subject" />
              </Field>
            </div>

            {/* Mesaj */}
            <Field label="Mesaj">
              <textarea rows={6} className="inp resize-none" name="message" />
            </Field>

            {/* Gönder butonu (sağ altta altın) */}
            <div className="mt-2 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-[var(--radius-lg)] px-5 py-3 text-[15px] font-medium text-black shadow-[var(--shadow-soft)] ring-1 transition-[opacity,filter] hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-accent/40"
                style={{
                  backgroundImage: "var(--gradient-accent)",
                  borderColor: "rgba(228,189,99,.35)",
                }}
              >
                <MailIcon className="h-[18px] w-[18px]" />
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* --------- Ortak Field sarmalayıcı --------- */
function Field({ label, children }) {
  return (
    <label className="block">
      <div className="mb-2 text-[13.5px] text-foreground/70">{label}</div>
      {children}
    </label>
  );
}

/* --------- Basit mail ikonu --------- */
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
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}
