import { Router } from "express"
import booksRouter from "./booksRoute"
import urlsRouter from "./urlsRoute"
const router = Router()

router.use("/books", booksRouter)
router.use("/urls", urlsRouter)

export default router;
