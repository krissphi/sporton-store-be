import { Router } from "express";
import { intiateAdmin, signin } from "../controllers/auth.controller";


const router = Router();

router.post("/signin", signin);
router.post("/initiate-admin-user", intiateAdmin);

export default router;