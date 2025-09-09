// Credentials.jsx
export default function Credentials() {
  const sections = [
    {
      title: "Eğitim",
      items: [
        "İstanbul Üniversitesi Hukuk Fakültesi (LL.B.)",
        "Ceza Hukuku Yüksek Lisans Seminer Programları",
      ],
    },
    {
      title: "Üyelikler",
      items: ["İstanbul Barosu", "Arabuluculuk Daire Başkanlığı Sicili"],
    },
    {
      title: "Yayınlar",
      items: [
        "Ticari Sözleşmelerde Risk Yönetimi (makale)",
        "Ceza Yargılamasında Delil Serbestisi (kısa not)",
      ],
    },
  ];

  return (
    <section className="section-y border-t border-border/50">
      <div className="container-x">
        {/* Başlık */}
        <header className="mb-10">
          <h2 className="text-[32px] md:text-[34px] font-semibold tracking-[-0.01em]">
            Kredansiyeller
          </h2>
          <p className="mt-2 text-[16.5px] text-foreground/80">
            Eğitim, üyelikler ve yayınlardan seçkiler.
          </p>
        </header>

        {/* 3 Sütun */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map(({ title, items }) => (
            <div
              key={title}
              className="
                rounded-[var(--radius-2xl)]
                border border-border/60
                bg-[color:var(--color-surface-2)]/85
                p-6 shadow-[var(--shadow-soft)]
              "
            >
              <h3 className="mb-4 text-[18px] font-semibold">{title}</h3>

              <ul className="space-y-3">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    {/* Altın nokta (tokenlarla) */}
                    <span
                      className="mt-2 inline-block h-2 w-2 rounded-full ring-1"
                      style={{
                        backgroundColor: "var(--color-accent)",
                        boxShadow: "0 0 6px rgba(228,189,99,.6)",
                        borderColor: "rgba(228,189,99,.55)",
                      }}
                    />
                    <span className="text-[15px] leading-[1.65] text-foreground/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
