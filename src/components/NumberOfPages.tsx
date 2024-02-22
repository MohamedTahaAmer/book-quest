import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

const NumberOfPages = ({
  onValueChange,
}: {
  onValueChange: (_e: string) => void
}) => {
  return (
    <>
      <Select onValueChange={onValueChange} defaultValue="10">
        <SelectTrigger className="ml-4 w-[180px]">
          <SelectValue placeholder="Show 10" />
        </SelectTrigger>
        <SelectContent>
          {[1, 2, 10, 20, 30, 40, 50].map((pageSize) => (
            <SelectItem key={pageSize} value={"" + pageSize}>
              Show {pageSize}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}

export default NumberOfPages
