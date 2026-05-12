import jwt from "jsonwebtoken";
import User from "../model/User.model.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // 1. No token
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    let decoded;

    try {
      // 2. JWT verification (separate try = better debugging)
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      console.log("❌ JWT VERIFY FAILED:", err.message);

      return res.status(401).json({
        message: "Invalid or expired token",
      });
    }

    console.log("✅ DECODED TOKEN:", decoded);

    // 3. DB check
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not found in DB" });
    }

    // 4. Attach user
    req.user = user;

    next();
  } catch (error) {
    console.log("🔥 AUTH MIDDLEWARE ERROR:", error.message);

    return res.status(500).json({
      message: "Server error in auth middleware",
    });
  }
};