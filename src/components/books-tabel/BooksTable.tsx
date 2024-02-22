import { useBooks } from "@/lib/custom-hooks/use-books-data"
import { DataTable } from "../ui/data-table"
import { columns } from "./columns"

const BooksTable = () => {
  let { books } = useBooks()
  console.log(books.length)
  return (
    <>
      {books?.length ? (
        <DataTable columns={columns} data={books} />
      ) : (
        <div className="text-center">No books found!</div>
      )}
    </>
  )
}

export default BooksTable
