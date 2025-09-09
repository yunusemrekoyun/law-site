import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthAPI } from "../lib/api";

export default function AdminHome() {
  const nav = useNavigate();
  const [me, setMe] = useState(null);

  useEffect(() => {
    AuthAPI.me()
      .then((r) => setMe(r.user))
      .catch(() => {
        // 401 halinde api katmanı zaten yönetecek; yine de güvenlik için:
        nav("/admin", { replace: true });
      });
  }, [nav]);

  return (
    <div className="min-h-dvh bg-bg text-foreground">
      <div className="container-x section-y">
        <div className="rounded-[var(--radius-2xl)] border border-border/60 bg-surface/80 p-6 shadow-[var(--shadow-soft)]">
          <h1 className="text-[24px] font-semibold">
            Hoş geldin, {me?.email || "Admin"} 👋
          </h1>

          <p className="mt-2 text-muted">
            Burası yönetim ana ekranı. (Sonra Article oluşturma/güncelleme
            ekranlarını ekleriz.)
          </p>

          <div className="mt-6">
            <button
              onClick={() => {
                AuthAPI.logout();
                nav("/admin", { replace: true });
              }}
              className="rounded-[var(--radius-lg)] border border-border bg-surface px-4 py-2 text-sm hover:bg-surface-2"
            >
              Çıkış Yap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
