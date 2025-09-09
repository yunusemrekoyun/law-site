import { Router } from "express";
import { articleController } from "../controller/articleController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const r = Router();

// Public
r.get("/", articleController.list);
r.get("/:slug", articleController.detail);

// Admin
// r.post("/", verifyToken("admin"), articleController.create);
// r.put("/:slug", verifyToken("admin"), articleController.update);
// r.delete("/:slug", verifyToken("admin"), articleController.remove);

export default r;
