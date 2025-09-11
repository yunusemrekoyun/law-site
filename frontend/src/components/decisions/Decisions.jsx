// src/components/decisions/Decisions.jsx
import { useEffect, useState, useMemo } from "react";
import { DecisionAPI } from "../../lib/api";
import DecisionItem from "./DecisionItem";

export default function Decisions() {
  const [items, setItems] = useState([]);
  const [busy, setBusy] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await DecisionAPI.list();
        if (alive) setItems(Array.isArray(data) ? data : []);
      } catch (e) {
        if (alive) setErr(e.message || "Kararlar yüklenemedi");
      } finally {
        if (alive) setBusy(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const sorted = useMemo(
    () => [...items].sort((a, b) => new Date(b.date) - new Date(a.date)),
    [items]
  );

  if (busy)
    return (
      <div className="p-6 border rounded-lg bg-surface/70">Yükleniyor…</div>
    );
  if (err)
    return (
      <div className="p-6 border rounded-lg bg-red-500/10 text-red-200">
        {err}
      </div>
    );
  if (!sorted.length)
    return (
      <div className="p-6 border rounded-lg bg-surface/70">
        Henüz karar eklenmemiş.
      </div>
    );

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {sorted.map((d) => (
        <DecisionItem key={d._id || d.slug} item={d} />
      ))}
    </div>
  );
}
