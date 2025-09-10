import { IconMail } from "@tabler/icons-react";

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

        {/* İçerik: Sol form + Sağ harita */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* FORM KARTI */}
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
                  <IconMail className="h-[18px] w-[18px]" />
                  Gönder
                </button>
              </div>
            </form>
          </div>

          {/* HARİTA KARTI */}
          <div className="rounded-[var(--radius-2xl)] border border-border/60 bg-[color:var(--color-surface-2)]/70 p-4 md:p-5 shadow-[var(--shadow-soft)]">
            <h3 className="px-1 pb-3 text-[18px] font-semibold">Ofis Konumu</h3>
            <div className="w-full h-[360px] md:h-[420px] rounded-xl overflow-hidden border border-border/60 shadow">
              <iframe
                title="Ofis Konumu"
                src="https://www.google.com/maps?q=%C4%B0hsaniye+Mahallesi+Bah%C3%A7eler+Cad.+Ofis+Royal+%C4%B0%C5%9F+Merkezi+No:22+K:1/11+Akdeniz/MERS%C4%B0N&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <p className="mt-3 px-1 text-sm text-foreground/80">
              İhsaniye Mahallesi Bahçeler Cad. Ofis Royal İş Merkezi No:22 K:1/11 Akdeniz / Mersin
            </p>
          </div>
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