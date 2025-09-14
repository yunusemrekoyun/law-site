export default function AboutMe() {
  return (
    <section
      id="hakkimda"
      className="section-y border-t border-b border-border/40"
      aria-labelledby="aboutme-title"
    >
      <div className="container-x">
        {/* Başlık */}
        <div className="text-center">
          <div className="text-[var(--text-xs)] tracking-[0.22em]">
            HAKKIMDA
          </div>

          <h2
            id="aboutme-title"
            className="mt-2 text-[30px] md:text-[34px] font-semibold tracking-[-0.01em]"
          >
            Mesleki Yolculuğum
          </h2>

          {/* Altın elmas ayraç */}
          <div className="mt-4 flex items-center justify-center">
            <span className="relative inline-grid h-5 w-5 rotate-45 place-items-center">
              <span
                className="absolute inset-0 rounded-[3px] shadow-[0_2px_10px_rgba(0,0,0,.25)]"
                style={{ backgroundImage: "var(--gradient-accent)" }}
              />
              <span className="absolute inset-[3px] rounded-[2px] bg-[color:var(--color-bg)] ring-1 ring-[color:var(--color-accent)]/40" />
            </span>
          </div>
        </div>

        {/* İçerik */}
        <div className="mt-10 md:mt-14 space-y-6 text-[15.5px] md:text-[16px] leading-[1.85] text-foreground/90">
          <p>
            İstanbul Doğuş Üniversitesi Hukuk Fakültesi’nden mezun olduktan sonra,
            İzmir Barosu’na kayıtlı olarak mesleki faaliyetime başladım. Akabinde
            Mersin Barosu’na nakil oldum. Üç yıllık mesleki tecrübem boyunca farklı
            hukuk alanlarında çalışarak geniş bir perspektif kazanma fırsatı buldum.
          </p>

          <p>
            Ağırlıklı olarak gayrimenkul hukuku, iş hukuku, ceza hukuku, aile hukuku,
            borçlar hukuku, icra hukuku, ticaret hukuku, şirketler hukuku ve
            sözleşmeler hukuku alanlarında dava ve danışmanlık süreçlerinde görev
            alıyorum.
          </p>

          <p>
            Özellikle şirketler hukuku kapsamında; şirket kuruluşu, ana sözleşme
            hazırlanması, genel kurul ve yönetim kurulu süreçlerinin hukuka uygun
            yürütülmesi, pay devirleri, sermaye artırımı veya azaltımı işlemleri ile
            birleşme, devralma ve tasfiye süreçlerinde danışmanlık hizmeti
            sunmaktayım. Ayrıca şirketlerin günlük işleyişinde karşılaşabilecekleri
            hukuki sorunlara dair düzenli danışmanlık sağlayarak, risklerin önceden
            tespit edilmesine ve hukuka uygun çözümler geliştirilmesine katkı
            sağlamaktayım.
          </p>

          <p className="mb-0">
            Mesleki yaklaşımımda; etik değerlere bağlılık, güncel hukuki gelişmeleri
            yakından takip etmek ve her dosyayı özenle değerlendirmek temel
            ilkelerimi oluşturuyor.
          </p>
        </div>
      </div>
    </section>
  );
}