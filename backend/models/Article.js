import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug:  { type: String, required: true, unique: true, index: true },
    summary:   { type: String },
    content:   { type: String },   // HTML/Markdown
    image:     { type: String },
    imageAlt:  { type: String },
    tags:      [{ type: String }],
    publishedAt: { type: Date, default: Date.now },
    status: { type: String, enum: ["draft", "published"], default: "published" }
  },
  { timestamps: true }
);

export const Article = mongoose.model("Article", ArticleSchema);
