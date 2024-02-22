import { create } from "zustand"

let defaultLimit = 25
type Limit =number

type LimitStore = {
  limit: Limit
  setLimit: (_books: Limit) => void
}

export const useLimit = create<LimitStore>((set) => ({
  limit: defaultLimit,
  setLimit: (limit: Limit) => set({ limit }),
}))
