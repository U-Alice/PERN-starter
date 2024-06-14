import { Employee, User } from "@prisma/client";
import { registerEmployeeValidation } from "../utils/validation";
import { prisma } from "../utils/db";
import { ApiResponse } from "../types/ApiResponse";

export const createEmployee = async (
  employee: any
): Promise<ApiResponse<Employee | String | null>> => {
  try {
    
    const { error } = registerEmployeeValidation(employee);
    if (error)
      return {
        success: false,
        status: 400,
        message: "validation error" + error.details[0].message,
        data: null,
      };

    let foundUser = await prisma.employee.findFirst({
      where: { email: employee.email },
    });

    if (foundUser) {
      return {
        success: false,
        status: 400,
        message: "Employee already registered!",
        data: null,
      };
    }
    const newEmployee = await prisma.employee.create({
      data: {
        firstName: employee.firstName,
        lastName: employee.lastName,
        national_id: employee.national_id,
        telephone: employee.telephone,
        email: employee.email,
        department: employee.department,
        position: employee.position,
        laptop_manufacturer: employee.laptop_manufacturer,
        model: employee.model,
        serialNumber: employee.serialNumber,
      },
    });
    let apiResponse: ApiResponse<Employee> = {
      message: "Employee registered successfully!",
      success: true,
      status: 201,
      data: newEmployee,
    };
    return apiResponse;
  } catch (err: any) {
    let apiResponse: ApiResponse<null> = {
      message: err.message,
      success: true,
      status: 500,
    };
    console.log(err);
    return apiResponse;
  }
};

export const getAllEmployees= async (): Promise<ApiResponse<Employee[] | null>> => {
  try {
    const employees = await prisma.employee.findMany();
    let apiResponse: ApiResponse<Employee[]> = {
      message: "Data retrieved successfully!",
      success: true,
      status: 200,
      data: employees,
    };
    return apiResponse;
  } catch (err: any) {
    let apiResponse: ApiResponse<null> = {
      message: err.message,
      success: true,
      status: 500,
    };
    console.log(err);
    return apiResponse;
  }
};
