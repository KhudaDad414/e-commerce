import { Router } from "express"
import { deleteBooksById, getBooks, patchBooksById, postBooks } from '../controllers/booksController'
const router = Router()

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: API's related to book management.
 */


 /**
 * @swagger 
 * /books:
 *   get:
 *     tags: [Books]
 *     description: Get All of the books.
 *     responses:
 *       200:
 *         description: Request was successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *       500:
 *         description: Internal Server Error.
 */
 router.get("/", getBooks)
/**
 * @swagger
 * /books:
 *   post:
 *     tags: [Books]
 *     description: Create a new book item.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *             $ref: '#/components/schemas/BookCreate'
 *     responses:
 *       201:
 *         description: Book item created successfully.
 *       500:
 *         description: Internal Server Error.
 */
 router.post("/", postBooks)
/**
 * @swagger
 * /books/{id}:
 *   patch:
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         required: true
 *         name: id
 *         description: Id of the book that you want to update.
 *         schema:
 *           type: integer 
 *     description: update book information.
 *     responses:
 *       200:
 *         description: Update one of the fields of the books.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Server Error.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BaseBook'
 */
 router.patch("/:id", patchBooksById)

 /**
 * @swagger
 * /books/{id}:
 *   delete:
 *     tags: [Books]
 *     description: delete book by id.
 *     parameters:
 *       - in: path
 *         required: true
 *         name: id
 *         description: Id of the book that you want to delete.
 *         schema:
 *           type: integer 
 *     responses:
 *       200:
 *         description: Book removed successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Server Error.
 */
 router.delete("/:id", deleteBooksById)

 export default router;
