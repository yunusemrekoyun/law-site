import Hero from "../components/Hero";
import Institutional from "../components/Institutional";
import Services from "../components/Services";
import Highlights from "../components/Highlights";
import WorkingProcess from "../components/WorkingProcess";
import Credentials from "../components/Credentials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      {/* Hero (üst) */}
      <Hero />

      {/* Hakkımda */}
      <div id="hakkimda">
        <Institutional />
      </div>

      {/* Hizmetler */}
      <div id="hizmetler">
        <Services />
      </div>

      {/* Makaleler teaser alanı */}
      <section className="section-y border-t border-border/50">
        <div className="container-x">
          <header className="mb-6">
            <div className="text-[12px] tracking-[0.18em] text-muted">
              YAYIN / BLOG
            </div>
            <h2 className="mt-1 text-[30px] md:text-[32px] font-semibold tracking-[-0.01em]">
              Güncel Makaleler
            </h2>
            <p className="mt-2 text-[14.5px] text-foreground/80 max-w-2xl">
              Uygulamadaki güncel gelişmeler ve pratik rehberler. Tümü için
              aşağıdaki bağlantıyı kullanabilirsiniz.
            </p>
          </header>

          <div className="rounded-[var(--radius-2xl)] border border-border/60 bg-[color:var(--color-surface-2)]/75 p-5 shadow-[var(--shadow-soft)] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-[14.5px] text-foreground/85">
              En son yayınlanan makaleleri inceleyin.
            </div>
            <Link
              to="/makaleler"
              className="inline-flex items-center gap-2 rounded-[var(--radius-lg)] border border-border bg-surface px-4 py-2 text-[14px] font-medium hover:bg-surface-2"
            >
              Tüm Makaleler
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>


      {/* Çalışma Süreci */}
      <WorkingProcess />

   

      {/* SSS */}
      <FAQ />

      {/* İletişim + Form */}
      <div id="iletisim">
        <Contact />
      </div>
      <ContactForm />
    
    </>
  );
};

export default HomePage;
