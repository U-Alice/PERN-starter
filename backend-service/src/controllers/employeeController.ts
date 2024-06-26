import { Request, Response } from "express";
import { ApiResponse } from "../types/ApiResponse";
import { Employee } from "@prisma/client";
import { createEmployee, deleteEmployee, getAllEmployees, updateEmployee } from "../services/employeeService";

export const createEmployeeController = async (req: Request, res: Response) => {
  const newEmployee = req.body;
  try {
    const apiResponse: ApiResponse<Employee | String | null> = await createEmployee(
      newEmployee
    );

    return res.status(apiResponse.status).json(apiResponse);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateEmployeeController = async (req: Request, res: Response) => {
  const newEmployee = req.body;
  const id = req.params.id;
  try {
    const apiResponse: ApiResponse<Employee | String | null> =
      await updateEmployee(newEmployee, id);

    return res.status(apiResponse.status).json(apiResponse);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export const deleteEmployeeController = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const apiResponse: ApiResponse<Employee | String | null> =
      await deleteEmployee(id);

    return res.status(apiResponse.status).json(apiResponse);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


export const getEmployeesController = async (req: Request, res: Response) => {
  try {
    const apiResponse: ApiResponse<Employee[] | null> = await getAllEmployees();
    return res.status(apiResponse.status).json(apiResponse);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
