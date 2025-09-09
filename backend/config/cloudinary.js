// config/cloudinary.js
import { v2 as cloudinary } from "cloudinary";

export function initCloudinary({ cloud_name, api_key, api_secret }) {
  if (!cloud_name || !api_key || !api_secret) {
    console.log("ℹ️ Cloudinary credentials not provided; skipping init.");
    return null;
  }
  cloudinary.config({ cloud_name, api_key, api_secret });
  console.log("✅ Cloudinary initialized");
  return cloudinary;
}
