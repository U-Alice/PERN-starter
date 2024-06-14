import express, { RequestHandler } from "express";

import { authorization } from "../controllers/auth";
import { createEmployeeController, getEmployeesController } from "../controllers/employeeController";

const router = express.Router();

router.get("/getAll", authorization as RequestHandler, getEmployeesController);
router.post("/registerEmployee", createEmployeeController);

export default router;
