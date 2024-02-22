import { Heading } from "./components/Heading"
import Providers from "./components/Providers"
import SearchBox from "./components/SeachBox"
import BooksTable from "./components/books-tabel/BooksTable"
import { Separator } from "./components/ui/separator"

function App() {
  return (
    <Providers>
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-3">
          <Heading
            title={`Book Quest `}
            description={`Welcome to the Books DB!`}
          />
          <Separator />
          <SearchBox />
          {/* <Separator /> */}
          <BooksTable />
        </div>
      </div>
    </Providers>
  )
}

export default App
