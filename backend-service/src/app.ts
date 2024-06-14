import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import employeeRoutes from "./routes/employeeRoutes";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./swagger_output.json";  

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/employees", employeeRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOutput));

app.listen(process.env.PORT, () => {
  console.log("Application running on port:  " + process.env.PORT);
});