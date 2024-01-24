import { configureStore } from '@reduxjs/toolkit'
import devOpsPeopleSlice from './features/devOpsPeople/devOpsPeopleSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      devOpsPeople: devOpsPeopleSlice
    },
  })
}