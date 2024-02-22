"use client"

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useEffect, useState } from "react"

import { useDebounce } from "@/lib/custom-hooks/use-debounce"
import { FormatedBook } from "@/lib/types"
import { Loader2, Search } from "lucide-react"
import { Input } from "./ui/input"
import { useBooks } from "@/lib/custom-hooks/use-books-data"
import { useLimit } from "@/lib/custom-hooks/use-limit"

const SearchBox = () => {
  const [input, setInput] = useState<string>("Books")
  let debouncedInput = useDebounce(input, 700)
  let { setBooks } = useBooks()
  let { limit } = useLimit()

  useEffect(() => {
    if (debouncedInput?.length) refetch()
  }, [debouncedInput, limit])

  const { isFetching, refetch } = useQuery({
    queryFn: async () => {
      if (!input.length) return []
      const { data } = await axios.get(
        `https://openlibrary.org/search.json?&limit=${limit}&q=${input.replaceAll(
          " ",
          "+",
        )}`,
      )
      let formatedBooks = data.docs.map((book: any): FormatedBook => {
        return {
          id: book.key,
          bookTitle: book.title,
          authors: book.author_name,
          publishedYear: book.first_publish_year,
          pagesCount: book.number_of_pages_median,
          ISBN: book.isbn?.[0],
        }
      })
      console.log(formatedBooks)
      setBooks(formatedBooks)
      return formatedBooks
    },
    queryKey: ["search-books"],
    enabled: false,
  })

  return (
    <div className=" flex justify-center">
      <div className="relative min-w-[70%]">
        {!isFetching ? (
          <Search className="absolute left-3 top-3 size-4 text-slate-600" />
        ) : (
          <Loader2 className="absolute left-3 top-2 size-6 animate-spin text-foreground" />
        )}
        <Input
          onChange={(e) => setInput(e.target.value.trim())}
          value={input}
          className="w-full rounded-full bg-sky-100  pl-11 ring-offset-slate-500 focus-visible:ring-blue-200"
          placeholder="Search for a course"
        />
      </div>
    </div>
  )
}

export default SearchBox
