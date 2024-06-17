import Joi from 'joi';
import { User } from '../types/User';

export const createUserValidation = (body: Partial<User>)=>{
    let data = Joi.object({
      fullName: Joi.string().required().max(50).min(2).messages({
        "string.base": "Full name should be a string.",
        "string.empty": "Full name is required.",
        "string.min": "Full name should have a minimum length of {#limit}.",
        "string.max": "Full name should have a maximum length of {#limit}.",
      }),
      password: Joi.string()
        .required()
        .min(8)
        .messages({
          "string.base": "Password should be a string.",
          "string.empty": "Password is required.",
          "string.min": "Password should have a minimum length of {#limit}.",
          "string.pattern.base":
            "Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
        }),
      email: Joi.string().required().email().messages({
        "string.base": "Email should be a string.",
        "string.empty": "Email is required.",
        "string.email": "Email must be a valid email address.",
      }),
      userName: Joi.string().required().alphanum().min(3).max(30).messages({
        "string.base": "Username should be a string.",
        "string.empty": "Username is required.",
        "string.alphanum":
          "Username must only contain alpha-numeric characters.",
        "string.min": "Username should have a minimum length of {#limit}.",
        "string.max": "Username should have a maximum length of {#limit}.",
      }),
    });
    return data.validate(body)
}

export const registerEmployeeValidation = (body: User)=>{
  const employeeSchema = Joi.object({
    id: Joi.string().optional(),
    firstName: Joi.string().required().max(50).messages({
      "string.base": "First name should be a string.",
      "string.empty": "First name is required.",
      "string.max": "First name should have a maximum length of {#limit}.",
    }),
    lastName: Joi.string().required().max(50).messages({
      "string.base": "Last name should be a string.",
      "string.empty": "Last name is required.",
      "string.max": "Last name should have a maximum length of {#limit}.",
    }),
    national_id: Joi.string().required().max(20).messages({
      "string.base": "National ID should be a string.",
      "string.empty": "National ID is required.",
      "string.max": "National ID should have a maximum length of {#limit}.",
    }),
    telephone: Joi.string()
      .required()
      .pattern(/^[0-9]{10,15}$/)
      .messages({
        "string.base": "Telephone should be a string.",
        "string.empty": "Telephone is required.",
        "string.pattern.base":
          "Telephone must be a valid number with 10 to 15 digits.",
      }),
    email: Joi.string().required().email().messages({
      "string.base": "Email should be a string.",
      "string.empty": "Email is required.",
      "string.email": "Email must be a valid email address.",
    }),
    department: Joi.string().required().max(100).messages({
      "string.base": "Department should be a string.",
      "string.empty": "Department is required.",
      "string.max": "Department should have a maximum length of {#limit}.",
    }),
    position: Joi.string().required().max(100).messages({
      "string.base": "Position should be a string.",
      "string.empty": "Position is required.",
      "string.max": "Position should have a maximum length of {#limit}.",
    }),
    laptop_manufacturer: Joi.string().required().max(100).messages({
      "string.base": "Laptop manufacturer should be a string.",
      "string.empty": "Laptop manufacturer is required.",
      "string.max":
        "Laptop manufacturer should have a maximum length of {#limit}.",
    }),
    model: Joi.string().required().max(100).messages({
      "string.base": "Model should be a string.",
      "string.empty": "Model is required.",
      "string.max": "Model should have a maximum length of {#limit}.",
    }),
    serialNumber: Joi.string().required().max(100).messages({
      "string.base": "Serial number should be a string.",
      "string.empty": "Serial number is required.",
      "string.max": "Serial number should have a maximum length of {#limit}.",
    }),
  })
  return employeeSchema.validate(body);

}
export const updateUserValidation = (body: User) => {
  let data = Joi.object({
    fullName: Joi.string().required().max(50).min(2).messages({
      "string.base": "Full name should be a string.",
      "string.empty": "Full name is required.",
      "string.min": "Full name should have a minimum length of {#limit}.",
      "string.max": "Full name should have a maximum length of {#limit}.",
    }),
    email: Joi.string().required().email().messages({
      "string.base": "Email should be a string.",
      "string.empty": "Email is required.",
      "string.email": "Email must be a valid email address.",
    }),
    userName: Joi.string().required().alphanum().min(3).max(30).messages({
      "string.base": "Username should be a string.",
      "string.empty": "Username is required.",
      "string.alphanum": "Username must only contain alpha-numeric characters.",
      "string.min": "Username should have a minimum length of {#limit}.",
      "string.max": "Username should have a maximum length of {#limit}.",
    }),
  });
  return data.validate(body);
};