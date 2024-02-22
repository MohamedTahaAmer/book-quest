import { create } from "zustand"

type Sort = "new" | "old" | ""
type SortStore = {
  sort: Sort
  setSort: (_books: Sort) => void
}

export const useSort = create<SortStore>((set) => ({
  sort: "",
  setSort: (sort: Sort) => set({ sort }),
}))
