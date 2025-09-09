import { Link } from "react-router-dom";

function normalize(item) {
  return {
    id: item.id || item._id || cryptoId(item),
    title: item.title || item.heading || "Başlık",
    excerpt: item.summary || item.excerpt || "",
    date: item.date || item.publishedAt || "",
    tags: item.tags || item.categories || [],
    slug:
      item.slug || item.url || slugify(item.title || item.heading || "icerik"),
    image: item.image || item.cover || null,
    imageAlt: item.imageAlt || item.alt || "",
  };
}

function slugify(s) {
  return String(s)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
function cryptoId(item) {
  const raw = JSON.stringify(item);
  let h = 0;
  for (let i = 0; i < raw.length; i++) h = (h * 31 + raw.charCodeAt(i)) >>> 0;
  return String(h);
}

export default function ArticleItem({ item }) {
  const a = normalize(item);

  return (
    <article
      className="
        overflow-hidden
        rounded-[var(--radius-2xl)]
        border border-border/60
        bg-[color:var(--color-surface-2)]/80
        shadow-[var(--shadow-soft)]
        transition-colors hover:bg-[color:var(--color-surface-2)]/95
      "
    >
      {/* Görsel alanı */}
      <Link to={`/makaleler/${a.slug}`} className="block">
        <div className="relative aspect-[16/9] w-full">
          {/* Görsel varsa */}
          {a.image ? (
            <img
              src={a.image}
              alt={a.imageAlt || a.title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center transition-transform duration-500 ease-out hover:scale-[1.03]"
            />
          ) : (
            // Placeholder (altın kenarlı koyu yüzey)
            <div className="h-full w-full">
              <div className="absolute inset-0 rounded-t-[var(--radius-2xl)] bg-[color:var(--color-surface)]" />
              <div className="absolute inset-0 rounded-t-[var(--radius-2xl)] ring-1 ring-[color:var(--color-accent)]/35" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(60% 60% at 70% 30%, rgba(228,189,99,.18) 0%, rgba(228,189,99,0) 70%)",
                }}
              />
            </div>
          )}

          {/* Üst sağ köşe: tarih chip’i */}
          <div className="pointer-events-none absolute right-3 top-3">
            <time
              dateTime={a.date}
              className="rounded border border-border/60 bg-surface/90 px-2 py-0.5 text-xs text-muted backdrop-blur"
            >
              {a.date
                ? new Date(a.date).toLocaleDateString("tr-TR")
                : "Tarih yakında"}
            </time>
          </div>
        </div>
      </Link>

      {/* İçerik */}
      <div className="p-5">
        {/* Etiketler */}
        {a.tags.length > 0 && (
          <ul className="flex flex-wrap gap-2 text-xs text-muted">
            {a.tags.map((t) => (
              <li
                key={t}
                className="rounded border border-border/60 bg-surface px-2 py-0.5"
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        {/* Başlık */}
        <h3 className="mt-3 text-md font-semibold leading-[1.25]">
          <Link to={`/makaleler/${a.slug}`} className="hover:underline">
            {a.title}
          </Link>
        </h3>

        {/* Özet */}
        {a.excerpt && (
          <p className="mt-2 text-sm leading-[1.7] text-[color:var(--color-muted)]">
            {a.excerpt}
          </p>
        )}

        {/* Devam butonu */}
        <div className="mt-4">
          <Link
            to={`/makaleler/${a.slug}`}
            className="inline-flex items-center gap-2 rounded-[var(--radius-lg)] border border-border bg-surface px-3 py-1.5 text-sm font-medium text-foreground hover:bg-surface-2"
          >
            Devamını oku
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
    </article>
  );
}
