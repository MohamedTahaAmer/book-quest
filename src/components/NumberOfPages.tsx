import { useLimit } from "@/lib/custom-hooks/use-limit"
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
  let { setLimit } = useLimit()
  return (
    <>
      <Select
        onValueChange={(value: string) => {
          let limit = +value * 2.5
          setLimit(limit)
          onValueChange(value)
        }}
        defaultValue="10"
      >
        <SelectTrigger className="ml-4 w-[180px]">
          <SelectValue placeholder="Show 10" />
        </SelectTrigger>
        <SelectContent>
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <SelectItem key={pageSize} value={`${pageSize}`}>
              Show {pageSize}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}

export default NumberOfPages
