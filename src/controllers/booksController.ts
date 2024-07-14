import { Request,Response, NextFunction } from 'express';
import { addBook, getAllBooks, updateBookById, removeBookById } from '../services';
import { integer } from 'drizzle-orm/sqlite-core';

type ControllerFunction = (req: Request, res: Response, next: NextFunction) => void;



export const getBooks: ControllerFunction = async (req, res, next) => {
  const books = await getAllBooks()
  res.status(200).json(books)
}


export const postBooks: ControllerFunction = async (req, res, next) => {
  const book = await addBook(req.body)
  res.status(201).json(book)
}

export const patchBooksById: ControllerFunction = async (req, res, next) => {
  const bookId = Number.parseInt(req.params["id"])
  const book = await updateBookById(bookId,req.body)
  res.status(200).json(book)
}

export const deleteBooksById: ControllerFunction = async (req, res, next) => {
  const bookId = Number.parseInt(req.params["id"])
  const book = await removeBookById(bookId)
  res.status(200).json(book)
}
