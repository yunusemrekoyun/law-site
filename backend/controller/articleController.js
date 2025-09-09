import { Article } from "../models/Article.js";

export const articleController = {
  async list(req, res, next) {
    try {
      const { q, tag } = req.query;
      const filter = { status: "published" };
      if (q) {
        filter.$or = [
          { title:   new RegExp(q, "i") },
          { summary: new RegExp(q, "i") },
          { tags:    new RegExp(q, "i") },
        ];
      }
      if (tag) filter.tags = tag;

      const items = await Article.find(filter)
        .sort({ publishedAt: -1 })
        .select("title slug summary image imageAlt tags publishedAt")
        .lean();

      res.json(items);
    } catch (err) { next(err); }
  },

  async detail(req, res, next) {
    try {
      const { slug } = req.params;
      const doc = await Article.findOne({ slug, status: "published" }).lean();
      if (!doc) return res.status(404).json({ error: "Not Found" });
      res.json(doc);
    } catch (err) { next(err); }
  },

  // İleride admin CRUD için:
  async create(req, res, next) {
    try {
      const created = await Article.create(req.body);
      res.status(201).json(created);
    } catch (err) { next(err); }
  },

  async update(req, res, next) {
    try {
      const { slug } = req.params;
      const updated = await Article.findOneAndUpdate({ slug }, req.body, { new: true });
      if (!updated) return res.status(404).json({ error: "Not Found" });
      res.json(updated);
    } catch (err) { next(err); }
  },

  async remove(req, res, next) {
    try {
      const { slug } = req.params;
      const deleted = await Article.findOneAndDelete({ slug });
      if (!deleted) return res.status(404).json({ error: "Not Found" });
      res.json({ ok: true });
    } catch (err) { next(err); }
  },
};
