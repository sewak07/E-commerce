import express from "express";
import { getAllProducts, getProductById, postProduct, updateProductById, deleteProductById } from "../controller/products.controller.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";
import { upload } from "../middleware/multer.middleware.js";

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', upload.fields([
  { name: "img1", maxCount: 1 },
  { name: "img2", maxCount: 1 }
]), adminMiddleware, postProduct);
router.put('/:id', upload.fields([
  { name: "img1", maxCount: 1 },
  { name: "img2", maxCount: 1 }
]), adminMiddleware, updateProductById);
router.delete('/:id', adminMiddleware, deleteProductById);

export default router;