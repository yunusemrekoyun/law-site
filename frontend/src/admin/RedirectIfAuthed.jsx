import { Navigate } from "react-router-dom";
import { getToken } from "../lib/api";

export default function RedirectIfAuthed({ children }) {
  const token = getToken();
  if (token) return <Navigate to="/admin/home" replace />;
  return children;
}
