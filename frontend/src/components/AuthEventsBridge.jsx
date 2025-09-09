// src/components/AuthEventsBridge.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiEvents, AuthAPI } from "../lib/api";

/**
 * Uygulama genelinde API katmanından yayınlanan olayları dinler.
 * - 401 (token expired/invalid) geldiğinde token'ı temizler ve /admin'e yönlendirir.
 */
export default function AuthEventsBridge() {
  const navigate = useNavigate();

  useEffect(() => {
    function onUnauthorized() {
      AuthAPI.logout();
      navigate("/admin", { replace: true });
    }
    apiEvents.addEventListener("auth:unauthorized", onUnauthorized);
    return () =>
      apiEvents.removeEventListener("auth:unauthorized", onUnauthorized);
  }, [navigate]);

  return null;
}
