import { pgTable, text, serial, integer, date  } from 'drizzle-orm/pg-core';



export const books = pgTable("books", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  author: text("author").notNull(),
  isbn: text("isbn").unique(),
  publisher: text("publisher"),
  publishDate: date("publishDate", {mode: "string"}),
  pageCount: integer("pageCount"),
  language: text("language").notNull(),
  genre: text("genre")
})

/**
* @swagger
* components:
*   schemas:
*     BaseBook:
*       type: object
*       properties:
*         title:
*           type: string
*         author:
*           type: string
*         isbn:
*           type: string
*         publisher:
*           type: string
*         publishDate:
*           type: string
*           format: date
*         pageCount:
*           type: integer
*         language:
*           type: string
*         genre:
*           type: string
*     BookCreate:
*       allOf:
*         - $ref: '#/components/schemas/BaseBook'
*         - type: object
*           required:
*             - title
*             - author
*             - language
*     Book:
*       allOf:
*         - $ref: '#/components/schemas/BaseBook'
*         - type: object
*           required:
*             - id
*             - title
*             - author
*             - language
*           properties:
*             id:
*               type: integer
*/
export type NewBook = typeof books.$inferInsert
export type Book = typeof books.$inferSelect
