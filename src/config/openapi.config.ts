import {Options, SwaggerDefinition} from "swagger-jsdoc"
import * as packageInfo from "../../package.json"


const swaggerDefinition: SwaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Books API",
    version: packageInfo.version,
    description: "API for Managing CRUD operations for Books API.",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Development Server",
    }
  ]
}

const options: Options = {
  failOnErrors: true,
  swaggerDefinition,
  apis: ["./src/drizzle/*.ts", "./src//routes/*.ts"]
}

export default options;
