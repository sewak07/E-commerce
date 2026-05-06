import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

export const authMiddleware = async (req, res, next) => {
  try {
    //get token from header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    const token = authHeader.split(" ")[1];

    //verify the token  
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //find user by id
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }

    //attach user to request 
    req.user = {
      _id: user._id,
      role: user.role,
      username: user.username,
    };

    next();
  } catch (error) {
    // Token errors → 401
    if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Invalid or expired token" });
    }
    return res.status(500).json({ message: `Server error: ${error.message}` });
  }
}