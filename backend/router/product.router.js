import express from "express";
import { getAllProducts, getProductById, postProduct, updateProductById, deleteProductById } from "../controller/products.controller.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', adminMiddleware, postProduct);
router.put('/:id', adminMiddleware, updateProductById);
router.delete('/:id', adminMiddleware, deleteProductById);

export default router;