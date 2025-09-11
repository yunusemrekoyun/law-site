// src/components/decisions/DecisionItem.jsx
import { Link } from "react-router-dom";

export default function DecisionItem({ item }) {
  return (
    <article className="rounded-[var(--radius-2xl)] border border-border/60 bg-surface shadow hover:shadow-lg transition-shadow">
      <div className="p-5">
        <div className="flex justify-between items-center text-xs text-muted mb-2">
          <span>{item.daire}</span>
          <time dateTime={item.date}>
            {item.date ? new Date(item.date).toLocaleDateString("tr-TR") : ""}
          </time>
        </div>

        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
        <p className="line-clamp-3 text-sm text-muted">{item.summary}</p>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-xs text-foreground/70">
            Esas: {item.esasNo} • Karar: {item.kararNo}
          </span>
          <Link
            to={`/kararlar/${item.slug}`}
            className="text-sm font-medium text-[color:var(--color-accent)] hover:underline"
          >
            Detay →
          </Link>
        </div>
      </div>
    </article>
  );
}
