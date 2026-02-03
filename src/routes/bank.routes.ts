import { Router } from "express";
import {
  createBank,
  deleteBank,
  getBanks,
  updateBank,
} from "../controllers/bank.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", authenticate, createBank);
router.get("/", getBanks);
router.put("/:id", authenticate, updateBank);
router.delete("/:id", authenticate, deleteBank);

export default router;
