// server.js
import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";

import { connectDB } from "./config/db.js";
import { initCloudinary } from "./config/cloudinary.js";
import api from "./routes/index.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

async function bootstrap() {
  const app = express();

  // ---- Config ----
  const PORT = process.env.PORT || 4000;
  const ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";

  await connectDB(process.env.MONGODB_URI);
  initCloudinary({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });

  // ---- Middlewares ----
  app.set("trust proxy", 1);
  app.use(helmet());
  app.use(cors({ origin: ORIGIN, credentials: true }));
  app.use(compression());
  app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(
    rateLimit({
      windowMs: 60 * 1000,
      limit: 120
    })
  );

  // ---- Routes ----
  app.use("/api", api);

  // ---- Errors ----
  app.use(notFound);
  app.use(errorHandler);

  // ---- Start ----
  app.listen(PORT, () => {
    console.log(`🚀 API running on http://localhost:${PORT}`);
  });
}

bootstrap().catch((err) => {
  console.error("❌ Bootstrap failed:", err);
  process.exit(1);
});