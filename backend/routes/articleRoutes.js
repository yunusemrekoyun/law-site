import { Router } from "express";
import { articleController } from "../controller/articleController.js";
// import { verifyToken } from "../middleware/verifyToken.js"; // gerektiğinde aç

const r = Router();

// Public
r.get("/", articleController.list);
r.get("/:slug", articleController.detail);

// Admin (ileride koruyacağız)
// r.post("/", verifyToken, articleController.create);
// r.put("/:slug", verifyToken, articleController.update);
// r.delete("/:slug", verifyToken, articleController.remove);

export default r;
