import swaggerAutogen from "swagger-autogen";
import 'dotenv/config';

const doc = {
  info: {
    version: "v1.0.0",
    title: "TS node starter template configured with swagger",
    description: "Implementation of Swagger with TypeScript",
  },
  servers: [
    {
      url: "http://localhost:"+ process.env.PORT,
      description: "Equipment distribution",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
  },
};

const outputFile = "./swagger_output.json";
const endpointsFiles = [
  "./routes/userRoutes.ts",
  "./routes/employeeRoutes.ts",
  "./routes/authRoutes.ts",
];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
