import { create } from 'zustand'


type SettingsStore = {
  questions: number
  digits: number[]
  usedOperators: {
    addition: boolean
    subtraction: boolean
    multiplication: boolean
  }
  changeQuestions: (value: number) => void
  changeDigits: (value: number[]) => void
  changeUsedOperators: (value: {
    addition: boolean
    subtraction: boolean
    multiplication: boolean
  }) => void
}

const useSettingsStore = create<SettingsStore>(set => ({
  questions: 5,
  digits: [1, 1], 
  usedOperators: {
    addition: false,
    subtraction: false,
    multiplication: false,
  },
  changeQuestions: (value) => set(() => ({questions: value })),
  changeDigits: (value) => set(() => ({digits: value})),
  changeUsedOperators: (value)=>set(() => ({usedOperators: value}))
}))

//export const useSettingsControls = () => useSettingsStore(state => state.actions)
export default useSettingsStore