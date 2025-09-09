export default function Institutional() {
  return (
    <section className="section-y border-t border-b border-border/40">
      <div className="container-x">
        {/* Üst başlık */}
        <div className="text-center">
          <div className="text-[var(--text-xs)] tracking-[0.22em]">
            KURUMSAL YAKLAŞIM
          </div>

          <h2 className="mt-2 text-[34px] md:text-[36px] font-semibold tracking-[-0.01em]">
            Hukuki Yaklaşımımız
          </h2>

          {/* Altın elmas ayraç (global gradyan + tokenlar) */}
          <div className="mt-4 flex items-center justify-center">
            <span className="relative inline-grid h-5 w-5 rotate-45 place-items-center">
              {/* dış altın elmas */}
              <span
                className="absolute inset-0 rounded-[3px] shadow-[0_2px_10px_rgba(0,0,0,.25)]"
                style={{ backgroundImage: "var(--gradient-accent)" }}
              />
              {/* iç koyu elmas + ince altın iç çizgi */}
              <span className="absolute inset-[3px] rounded-[2px] bg-[color:var(--color-bg)] ring-1 ring-[color:var(--color-accent)]/40" />
            </span>
          </div>
        </div>

        {/* İçerik 2 sütun */}
        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
          {/* Sol paragraf */}
          <p className="text-[16.5px] leading-[1.85] text-foreground/85">
            Müvekkillerimizin hedeflerini ve risklerini doğru analiz ederek,
            dosyaya özgü bir stratejiyle ilerleriz. Hazırlık safhasındaki
            titizlik, yargılama sürecindeki etkin savunma ve süreç yönetiminde
            şeffaf iletişim, güçlü sonuçların temelidir.
          </p>

          {/* Sağ liste */}
          <ul className="space-y-6">
            {[
              {
                t: "Sağlam Hazırlık",
                d: "Delil ve mevzuat taraması; risk senaryoları ve alternatif çözüm yolları.",
              },
              {
                t: "Şeffaflık",
                d: "Zaman planı, masraf ve riskler hakkında net, erişilebilir bilgilendirme.",
              },
              {
                t: "Stratejik Temsil",
                d: "Arabuluculuk, uzlaşma ve dava seçeneklerinin objektif değerlendirilmesi.",
              },
              {
                t: "Etik ve Gizlilik",
                d: "Meslek kurallarına bağlılık ve müvekkil bilgilerinin hassas korunması.",
              },
            ].map(({ t, d }) => (
              <li key={t} className="flex gap-3">
                {/* altın madde işareti (küçük + parlak) */}
                <span className="mt-2.5 inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--color-accent)] ring-1 ring-[color:var(--color-accent)]/70 shadow-[0_0_8px_rgba(228,189,99,.55)]" />
                <div>
                  <div className="text-[16px] font-semibold leading-[1.25]">
                    {t}
                  </div>
                  <div className="text-[15px] leading-[1.7] text-[color:var(--color-muted)]">
                    {d}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
