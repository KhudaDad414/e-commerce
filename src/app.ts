import dotenv from "dotenv"
dotenv.config()


import express, { Express } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import options from './config/openapi.config'
import * as swaggerUI from 'swagger-ui-express';
import router from './routes';
import { generateOpenApiSpec } from './utils/generateOpenAPI';


const app: Express = express()
//Add middlewares
app.use((req,res,next) => {
  console.log(`${req.method} ${req.path}`)
  next();
})
app.use(express.json())

//Initialize OpenAPI docs
const spec = swaggerJSDoc(options)
generateOpenApiSpec(spec)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(spec))

//Add routes
app.use("/api",router)


//Logging
//Error Handling
const port = process.env.PORT! || 3000;
app.listen(port, ()=> {
  console.log(`[server] Server is running at port ${port}`)
})
