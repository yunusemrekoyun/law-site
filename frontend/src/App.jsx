import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import ArticleDetail from "./pages/ArticleDetails";

export default function App() {
  return (
    <Routes>
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
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
