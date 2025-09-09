import { Router } from "express";
import { authController } from "../controller/authController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const r = Router();

r.post("/register", authController.register);
r.post("/login", authController.login);
r.get("/me", verifyToken(), authController.me);
r.post("/logout", verifyToken(), authController.logout);

export default r;
