  import User from '../model/user.model.js';

  export const superAdminMiddleware = async (req, res, next) => {
    try {
      if( !req.user || req.user.role !== "superadmin"){
        return res.status(403).json({ message: "Forbidden:Super Admins only" });
      }
      next();
    } catch (error) {
      return res.status(500).json({ message: `Server error: ${error.message}` });
    }
  }