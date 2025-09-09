// frontend/src/lib/api.js
// Global API katmanı: tek yerden fetch, token yönetimi, hata standardizasyonu

const BASE = import.meta.env.VITE_API ?? "http://localhost:5000/api";
const TOKEN_KEY = "auth_token";

// Uygulama genelinde 401 yakalamak için basit event bus
export const apiEvents = new EventTarget();

// ----- Token helpers -----
export function getToken() {
  return localStorage.getItem(TOKEN_KEY) || "";
}
export function setToken(token) {
  if (token) localStorage.setItem(TOKEN_KEY, token);
}
export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

// ----- Core fetch wrapper -----
// options: { method, headers, body, withAuth=true, raw=false }
export async function api(path, options = {}) {
  const {
    withAuth = false,
    raw = false, // raw= true -> JSON parse etme, Response döndür
    ...rest
  } = options;

  const headers = {
    "Content-Type": "application/json",
    ...(rest.headers || {}),
  };

  // yetkili isteklerde Bearer ekle
  if (withAuth) {
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE}${path}`, {
    ...rest,
    headers,
  });

  if (raw) return res;

  let payload = null;
  const text = await res.text().catch(() => "");
  try {
    payload = text ? JSON.parse(text) : null;
  } catch {
    // text JSON değilse payload null kalır
  }

  if (!res.ok) {
    if (res.status === 401) {
      // Token geçersiz/expired → uygulamaya haber ver
      apiEvents.dispatchEvent(new CustomEvent("auth:unauthorized"));
    }
    const msg =
      (payload && (payload.error || payload.message)) ||
      text ||
      res.statusText ||
      "Request failed";
    const err = new Error(msg);
    err.status = res.status;
    err.payload = payload;
    throw err;
  }

  return payload;
}

// ----- Domain APIs -----

export const AuthAPI = {
  async register({ name, email, password }) {
    const data = await api("/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });
    // İstersen otomatik login gibi token kaydı:
    if (data?.token) setToken(data.token);
    return data;
  },
  async login({ email, password }) {
    const data = await api("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    if (data?.token) setToken(data.token);
    return data;
  },
  async me() {
    return api("/auth/me", { withAuth: true });
  },
  logout() {
    clearToken();
  },
};

export const ArticleAPI = {
  // Public
  list(params = {}) {
    const qs = new URLSearchParams(params).toString();
    return api(`/articles${qs ? `?${qs}` : ""}`);
  },
  detail(slug) {
    return api(`/articles/${slug}`);
  },

  // Admin – backend’de korumayı açınca withAuth:true göndereceğiz
  create(article) {
    return api("/articles", {
      method: "POST",
      withAuth: true,
      body: JSON.stringify(article),
    });
  },
  update(slug, patch) {
    return api(`/articles/${slug}`, {
      method: "PUT",
      withAuth: true,
      body: JSON.stringify(patch),
    });
  },
  remove(slug) {
    return api(`/articles/${slug}`, {
      method: "DELETE",
      withAuth: true,
    });
  },
};
