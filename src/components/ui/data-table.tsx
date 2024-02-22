import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { useState } from "react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import type { FormatedBook } from "@/lib/types"
import NumberOfPages from "../NumberOfPages"
import { cn } from "@/lib/utils"

// eslint-disable-next-line
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<FormatedBook, TValue>[]
  data: FormatedBook[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      columnFilters,
      sorting,
    },
  })

  return (
    <div className="max-w-screen-2xl">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className="bg-sky-100 " key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  let isPublishedYear = header.id === "publishedYear"
                  return (
                    <TableHead
                      className={cn("h-fit p-0 px-4", {
                        "w-24": isPublishedYear,
                      })}
                      key={header.id}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className="justify-between"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      className="max-w-sm truncate p-2 px-4"
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow className="">
                <TableCell className="flex h-full items-center justify-center bg-background p-0 font-medium ">
                  <div>No results.</div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <NumberOfPages
          onValueChange={(e) => {
            table.setPageSize(+e)
          }}
        />
        <Button
          variant="ghost"
          size="sm"
          onClick={table.previousPage}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={table.nextPage}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
