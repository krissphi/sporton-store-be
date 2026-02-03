import { Router } from "express";
import {
  createTransaction,
  getTransactionById,
  getTransactions,
  updateTransaction,
} from "../controllers/transaction.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { upload } from "../middlewares/upload.middleware";

const router = Router();

router.post("/checkout", upload.single("image"), createTransaction);
router.get("/", authenticate, getTransactions);
router.get("/:id", getTransactionById);
router.patch("/:id", authenticate, upload.single("image"), updateTransaction);

export default router;
