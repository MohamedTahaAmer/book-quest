import { create } from "zustand"
import { FormatedBook } from "../types"
import { intitalBooks } from "../initial-data/initial-books"

type Books = FormatedBook[]

type BooksStore = {
  books: Books
  setBooks: (_books: Books) => void
}

export const useBooks = create<BooksStore>((set) => ({
  books: intitalBooks,
  setBooks: (books: Books) => set({ books }),
}))
