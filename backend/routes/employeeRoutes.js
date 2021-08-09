import { Router } from "express";
import employeeController from "../controllers/employeeController.js";
import cors from "cors";

const router = Router();

router.post("/", employeeController.savaEmpolyee);
router.get("/", cors(), employeeController.getAllEmployees);
router.delete("/:id", employeeController.deleteEmployee);
router.put("/:id", employeeController.updateEmployee);
router.get("/:id", employeeController.getEmployeeById);
export default router;
