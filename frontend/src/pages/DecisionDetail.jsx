// src/pages/DecisionDetail.jsx
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { DecisionAPI } from "../lib/api";

export default function DecisionDetail() {
  const { slug } = useParams();
  const nav = useNavigate();

  const [decision, setDecision] = useState(null);
  const [busy, setBusy] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await DecisionAPI.detail(slug);
        if (!alive) return;
        setDecision(data);
        if (data?.title) document.title = `${data.title} | Yargıtay Kararları`;
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (e) {
        if (alive) setErr(e.message || "Karar bulunamadı");
      } finally {
        if (alive) setBusy(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [slug]);

  if (busy) return <div className="p-6">Yükleniyor…</div>;
  if (err || !decision)
    return (
      <div className="p-6">
        <h1 className="text-md font-semibold">İçerik bulunamadı</h1>
        <button onClick={() => nav(-1)} className="mt-3 text-sm underline">
          Geri dön
        </button>
      </div>
    );

  return (
    <article className="section-y">
      <div className="container-x">
        {/* Breadcrumb */}
        <nav className="mb-4 text-xs text-muted">
          <Link to="/" className="hover:underline">
            Ana sayfa
          </Link>
          <span className="mx-2">/</span>
          <Link to="/kararlar" className="hover:underline">
            Yargıtay Kararları
          </Link>
          <span className="mx-2">/</span>
          <span>{decision.title}</span>
        </nav>

        <header className="mb-6">
          <h1 className="text-[28px] md:text-[32px] font-bold">
            {decision.title}
          </h1>
          <p className="mt-2 text-sm text-muted">
            {decision.daire} • Esas {decision.esasNo} • Karar {decision.kararNo}{" "}
            • {new Date(decision.date).toLocaleDateString("tr-TR")}
          </p>
        </header>

        {/* Kapak görseli (varsa) */}
        {decision.image?.url && (
          <div className="mb-6 overflow-hidden rounded-[var(--radius-2xl)] shadow">
            <img
              src={decision.image.url}
              alt={decision.imageAlt || decision.title}
            />
          </div>
        )}

        {/* İçerik */}
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: decision.content || "" }}
        />

        {/* Alt aksiyon */}
        <div className="mt-8 flex gap-4">
          <Link to="/kararlar" className="text-sm underline">
            ← Tüm kararlar
          </Link>
        </div>
      </div>
    </article>
  );
}
