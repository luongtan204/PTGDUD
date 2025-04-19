import { createSlice } from "@reduxjs/toolkit"

// Define the initial state
const initialState = {
  value: 0,
}

// Create the counter slice with reducers
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Increment action
    increment: (state) => {
      state.value += 1
    },
    // Decrement action
    decrement: (state) => {
      state.value -= 1
    },
  },
})

// Export the actions
export const { increment, decrement } = counterSlice.actions

// Export the reducer
export default counterSlice.reducer
