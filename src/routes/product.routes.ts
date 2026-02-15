import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware";
import {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    searchProducts,
} from "../controllers/product.controller";
import { upload } from "../middlewares/upload.middleware";


const router = Router();

router.get('/search', searchProducts);
router.post("/", authenticate, upload.single("image"), createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", authenticate, upload.single("image"), updateProduct);
router.delete("/:id", authenticate, deleteProduct);


export default router;