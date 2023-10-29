import { create } from 'zustand'

export type Profile = {
    userId: number,
    username: string
}

type Student = {
    student: Profile | null
    addStudent: (profile: Profile) => void
    removeStudent: () => void
}

export const useStudentStore = create<Student>()((set) => ({
    student: null,
    addStudent: (profile: Profile) => set((state) => ({ ...state, student: profile })),
    removeStudent: () => set((state) => ({ ...state, student: null })),
}))
