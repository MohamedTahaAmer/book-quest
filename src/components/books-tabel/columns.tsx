import { Button } from "@/components/ui/button"
import { type FormatedBook } from "@/lib/types"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react"

import { useState } from "react"

const RatingHeader = ({ column }: { column: any }) => {
  const [buttonClicks, setButtonClicks] = useState(0)
  const handleButtonClick = () => {
    if (buttonClicks === 0) {
      column.toggleSorting(true)
      setButtonClicks(1)
    } else if (buttonClicks === 1) {
      column.toggleSorting(false)
      setButtonClicks(2)
    } else if (buttonClicks === 2) {
      column.clearSorting()
      setButtonClicks(0)
    }
  }
  return (
    <Button className="pl-0 " variant="ghost" onClick={handleButtonClick}>
      Published Year
      {buttonClicks === 0 && <ArrowUpDown className="ml-2 h-4 w-4" />}
      {buttonClicks === 1 && <ArrowUp className="ml-2 h-4 w-4" />}
      {buttonClicks === 2 && <ArrowDown className="ml-2 h-4 w-4" />}
    </Button>
  )
}

let NumberOfPages = () => {
  return <div className="whitespace-nowrap text-nowrap">Pages</div>
}
export const columns: ColumnDef<FormatedBook>[] = [
  {
    accessorKey: "bookTitle",
    header: "Title",
  },
  {
    accessorKey: "authors",
    header: "Authors",
  },
  {
    accessorKey: "ISBN",
    header: "ISBN Number",
  },
  {
    accessorKey: "pagesCount",
    header: NumberOfPages,
  },
  {
    accessorKey: "publishedYear",
    header: RatingHeader,
  },
]
