import express from "express";
import { getAllProducts, getProductById, postProduct, updateProductById, deleteProductById } from "../controller/products.controller.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', authMiddleware, adminMiddleware, upload.fields([
  { name: "img1", maxCount: 1 },
  { name: "img2", maxCount: 1 }
]), postProduct);
router.put('/:id', authMiddleware, adminMiddleware, upload.fields([
  { name: "img1", maxCount: 1 },
  { name: "img2", maxCount: 1 }
]), updateProductById);
router.delete('/:id', authMiddleware, adminMiddleware, deleteProductById);

export default router;