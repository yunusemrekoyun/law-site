// controller/decisionController.js
import { Decision } from "../models/Decision.js";
import { destroyAsset } from "../config/cloudinary.js";

function normCsv(input) {
  if (!input) return [];
  if (Array.isArray(input))
    return input
      .map(String)
      .map((s) => s.trim())
      .filter(Boolean);
  return String(input)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export const decisionController = {
  // Public list
  async list(req, res, next) {
    try {
      const { q, tag } = req.query;
      const filter = { status: "published" };

      if (q) {
        filter.$or = [
          { title: new RegExp(q, "i") },
          { summary: new RegExp(q, "i") },
          { keywords: new RegExp(q, "i") },
        ];
      }
      if (tag) filter.tags = tag;

      const items = await Decision.find(filter)
        .sort({ date: -1, createdAt: -1 })
        .select(
          "title slug date chamber summary image imageAlt tags caseNo decisionNo"
        )
        .lean();

      res.json(items);
    } catch (err) {
      next(err);
    }
  },

  // Public detail
  async detail(req, res, next) {
    try {
      const { slug } = req.params;
      const doc = await Decision.findOne({ slug, status: "published" }).lean();
      if (!doc) return res.status(404).json({ error: "Not Found" });
      res.json(doc);
    } catch (err) {
      next(err);
    }
  },

  // Admin create
  async create(req, res, next) {
    try {
      const b = req.body || {};
      const doc = await Decision.create({
        title: b.title,
        slug: b.slug,
        caseNo: b.caseNo, // Esas No
        decisionNo: b.decisionNo, // Karar No
        date: b.date, // ISO tarih
        chamber: b.chamber, // Daire
        summary: b.summary,
        content: b.content, // HTML/Markdown
        image: req.cloudinaryFile ? { ...req.cloudinaryFile } : null,
        imageAlt: b.imageAlt,
        keywords: normCsv(b.keywords),
        tags: normCsv(b.tags),
        status: b.status || "published",
      });
      res.status(201).json(doc);
    } catch (err) {
      next(err);
    }
  },

  // Admin update
  async update(req, res, next) {
    try {
      const { slug } = req.params;
      const b = req.body || {};
      const found = await Decision.findOne({ slug });
      if (!found) return res.status(404).json({ error: "Not Found" });

      // Görsel güncellendiyse eskisini sil
      let nextImage = found.image;
      if (req.cloudinaryFile) {
        if (found.image?.publicId) {
          await destroyAsset(found.image.publicId);
        }
        nextImage = { ...req.cloudinaryFile };
      }

      // Alanlar
      found.title = b.title ?? found.title;
      found.slug = b.slug ?? found.slug;
      found.caseNo = b.caseNo ?? found.caseNo;
      found.decisionNo = b.decisionNo ?? found.decisionNo;
      found.date = b.date ?? found.date;
      found.chamber = b.chamber ?? found.chamber;
      found.summary = b.summary ?? found.summary;
      found.content = b.content ?? found.content;
      found.image = nextImage;
      found.imageAlt = b.imageAlt ?? found.imageAlt;

      if (typeof b.keywords !== "undefined")
        found.keywords = normCsv(b.keywords);
      if (typeof b.tags !== "undefined") found.tags = normCsv(b.tags);

      found.status = b.status ?? found.status;

      const updated = await found.save();
      res.json(updated);
    } catch (err) {
      next(err);
    }
  },

  // Admin delete
  async remove(req, res, next) {
    try {
      const { slug } = req.params;
      const deleted = await Decision.findOneAndDelete({ slug });
      if (!deleted) return res.status(404).json({ error: "Not Found" });

      if (deleted.image?.publicId) {
        await destroyAsset(deleted.image.publicId);
      }

      res.json({ ok: true });
    } catch (err) {
      next(err);
    }
  },
};
