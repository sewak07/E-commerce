export const adminMiddleware = async (req, res, next) => {
  try {
    if (!req.user || req.user.role !== "admin" && req.user.role !== "superadmin") {
      return res.status(403).json({ message: 'Access denied. Admin or superadmin role is required.' });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: `Server error: ${error.message}` });
  }
}