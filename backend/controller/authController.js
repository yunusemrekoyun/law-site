import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

function signToken(user) {
  return jwt.sign(
    { sub: user._id, role: user.role, email: user.email },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
}

export const authController = {
  // POST /api/auth/register
  async register(req, res, next) {
    try {
      const { name, email, password } = req.body;
      if (!email || !password)
        return res.status(400).json({ error: "email and password required" });

      const exists = await User.findOne({ email });
      if (exists)
        return res.status(409).json({ error: "email already in use" });

      const passwordHash = await bcrypt.hash(password, 12);
      const user = await User.create({
        name,
        email,
        passwordHash,
        role: "admin",
      });

      const token = signToken(user);
      res.status(201).json({
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token, // Bearer token; süresi JWT_EXPIRES_IN
      });
    } catch (err) {
      next(err);
    }
  },

  // POST /api/auth/login
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password)
        return res.status(400).json({ error: "email and password required" });

      const user = await User.findOne({ email });
      if (!user) return res.status(401).json({ error: "invalid credentials" });

      const ok = await bcrypt.compare(password, user.passwordHash);
      if (!ok) return res.status(401).json({ error: "invalid credentials" });

      const token = signToken(user);
      res.json({
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token,
      });
    } catch (err) {
      next(err);
    }
  },

  // GET /api/auth/me (opsiyonel)
  async me(req, res) {
    // verifyToken middleware user'ı ekliyor
    res.json({ user: req.user });
  },
};
