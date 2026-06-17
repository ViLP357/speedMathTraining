import { create } from 'zustand'

export const useSettingsStore = create(set => ({
  questions: 5,
  digits: [1, 1], 
  usedOperators: {
    addition: false,
    subtraction: false,
    multiplication: false,
  },
  changeQuestions: value => set(state => ({questions: value })),
  changeDigits: value => set(state => ({digits: value})),
  changeUsedOperators: value=>set(state => ({usedOperators: value}))
}))

//export const useSettingsControls = () => useSettingsStore(state => state.actions)