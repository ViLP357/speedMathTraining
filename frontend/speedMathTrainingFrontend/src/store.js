import { create } from 'zustand'

export const useSettingsStore = create(set => ({
  questions: 5,
  changeQuestions: value => set(state => ({questions: value })),
  decrement: () => set(state => ({ counter: state.counter - 1 })),
}))

//export const useSettings = () => useSettingsStore(state => state.questions)