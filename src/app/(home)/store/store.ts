import { create } from 'zustand'

type StudentStore = {
    coins: number;
    increaseCoins: (value: number) => void
}

export const useStudentStore = create<StudentStore>((set) => ({
  coins: 0,
  increaseCoins: (value: number) => set((state: any) => ({ coins: state.coins + value })),
}))