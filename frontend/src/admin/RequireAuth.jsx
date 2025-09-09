import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getToken } from "../lib/api";

export default function RequireAuth() {
  const location = useLocation();
  const token = getToken();
  if (!token) {
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }
  return <Outlet />;
}
