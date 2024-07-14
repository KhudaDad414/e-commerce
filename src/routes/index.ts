import { Router } from "express"
import booksRouter from "./booksRoute"

const router = Router()

router.use("/books", booksRouter)

export default router;
