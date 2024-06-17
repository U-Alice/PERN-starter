import express, { RequestHandler } from "express";

import { authorization } from "../controllers/auth";
import { createEmployeeController, deleteEmployeeController, getEmployeesController, updateEmployeeController } from "../controllers/employeeController";

const router = express.Router();

router.get("/getAll", authorization as RequestHandler, getEmployeesController);
router.post("/registerEmployee", createEmployeeController);
router.put("/updateEmployee/:id", updateEmployeeController);
router.delete("/deleteEmployee/:id", deleteEmployeeController);

export default router;
