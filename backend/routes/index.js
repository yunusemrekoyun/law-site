import { Router } from "express";
import articleRoutes from "./articleRoutes.js";
import authRoutes from "./authRoutes.js";

const api = Router();

api.get("/health", (req, res) => res.json({ ok: true, ts: Date.now() }));

api.use("/auth", authRoutes); // -> /api/auth/*
api.use("/articles", articleRoutes); // -> /api/articles/*

export default api;
