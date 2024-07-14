import dotenv from "dotenv"
dotenv.config()


import express, { Express } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import options from './config/openapi.config'
import * as swaggerUI from 'swagger-ui-express';
import router from './routes';


const app: Express = express()
//Add middlewares
app.use(express.json())
app.use((error:any,req:any,res:any,next:any)=>{
  res.status(500).json({message: "something went wrong."})
})

//Initialize OpenAPI docs
const spec = swaggerJSDoc(options)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(spec))

//Add routes
app.use("/api",router)


const port = process.env.PORT! || 3000;
app.listen(port, ()=> {
  console.log(`[server] Server is running at port ${port}`)
})
