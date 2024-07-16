import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http'
import * as schema from "../drizzle/schema"
import { Book, NewBook, NewUrl, URL } from '../drizzle/schema';
import { eq } from 'drizzle-orm';
const sql = neon(process.env.CONNECTION_STRING!)
const db = drizzle(sql, { schema })



export const getAllBooks = async (): Promise<Book[]> => {
  const books = await db.query.books.findMany();
  return books;
}

export const addBook = async (newBook: NewBook): Promise<Book> => {
    const addedBooks = await db.insert(schema.books).values(newBook).returning()
    return addedBooks[0];
}

export const removeBookById = async (id: number): Promise<Book> => {
  const removedBooks = await db.delete(schema.books).where(eq(schema.books.id, id)).returning()
  return removedBooks[0];
}

export const updateBookById = async (id: number, updatedBook: NewBook): Promise<Book> => {
  const updatedBooks = await db.update(schema.books).set(updatedBook).where(eq(schema.books.id, id)).returning()
  return updatedBooks[0];
}


export const addURl = async (url: NewUrl): Promise<URL> => {
  const createdURL = await db.insert(schema.urls).values(url).returning();
  return createdURL[0]
}


export const getURLByShorthand = async (shortHand: string): Promise<URL | undefined> => {
  const url = await db.query.urls.findFirst({where: eq(schema.urls.shortHand, shortHand)})
  return url
}
