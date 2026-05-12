export const adminMiddleware = (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const role = req.user.role;

    if (role !== "admin" && role !== "superadmin") {
      return res.status(403).json({
        message: "Access denied. Admin or superadmin required."
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};