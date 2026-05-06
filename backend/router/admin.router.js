import express from "express";
import { promoteToAdmin, demoteToUser } from "../controller/admin.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { superAdminMiddleware } from "../middleware/superAdmin.middleware.js";

const router = express.Router();

router.use(authMiddleware);
router.put("/promote/:id", superAdminMiddleware, promoteToAdmin);
router.put("/demote/:id", superAdminMiddleware, demoteToUser);

export default router;