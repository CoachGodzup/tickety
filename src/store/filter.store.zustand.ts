import { Card } from '@/model/card'
import { create } from 'zustand'

type State = {
  filterList: string[]
}

type Actions = {
  toggleFilter: (filter: string) => void
}

export const useFilterStore = create<State & Actions>((set) => ({
  filterList: [] as string[],
  toggleFilter: (filter: string) =>
    set((state) => ({
      ...state,
      filterList: state.filterList.includes(filter)
        ? state.filterList.filter((f) => f !== filter)
        : [...state.filterList, filter],
    })),
}))
