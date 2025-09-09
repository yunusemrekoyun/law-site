import { Router } from "express";
import articleRoutes from "./articleRoutes.js";

const api = Router();

api.get("/health", (req, res) => res.json({ ok: true, ts: Date.now() }));

api.use("/articles", articleRoutes); // -> /api/articles, /api/articles/:slug

export default api;
