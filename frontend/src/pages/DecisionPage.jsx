// src/pages/DecisionPage.jsx
import Decisions from "../components/decisions/Decisions";

export default function DecisionPage() {
  return (
    <section className="section-y">
      <div className="container-x">
        <header className="mb-10 text-center">
          <h1 className="text-[32px] md:text-[36px] font-bold tracking-tight text-[color:var(--color-accent)]">
            Yargıtay Kararları
          </h1>
          <p className="mt-3 text-sm text-muted max-w-2xl mx-auto">
            Güncel Yargıtay içtihatları, özetleri ve tam metinleri.
          </p>
        </header>

        <Decisions />
      </div>
    </section>
  );
}
