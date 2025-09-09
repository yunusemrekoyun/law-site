import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import ArticleDetail from "./pages/ArticleDetails";

import AdminLogin from "./admin/AdminLogin";
import AdminHome from "./admin/AdminHome";
import RequireAuth from "./admin/RequireAuth";
import RedirectIfAuthed from "./admin/RedirectIfAuthed";
import AdminArticlesPage from "./admin/pages/AdminArticlesPage";

export default function App() {
  return (
    <Routes>
      {/* Public site (mevcut layout) */}
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/makaleler"
        element={
          <Layout>
            <ArticlePage />
          </Layout>
        }
      />
      <Route
        path="/makaleler/:slug"
        element={
          <Layout>
            <ArticleDetail />
          </Layout>
        }
      />

      {/* Admin: layout YOK */}
      <Route
        path="/admin"
        element={
          <RedirectIfAuthed>
            <AdminLogin />
          </RedirectIfAuthed>
        }
      />

      <Route element={<RequireAuth />}>
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/admin/articles" element={<AdminArticlesPage />} />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
