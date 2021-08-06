import { Router } from "express";
import employeeController from "../controllers/employeeController.js";

const router = Router();

router.post("/", employeeController.savaEmpolyee);
export default router;
