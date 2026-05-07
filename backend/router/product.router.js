import express from "express";
import { getAllProducts, getProductById, postProduct } from "../controller/products.controller.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', adminMiddleware, postProduct);

export default router;