import { createSlice } from "@reduxjs/toolkit"

// Define the initial state
const initialState = {
  value: 0,
}

// Create the advanced counter slice with reducers
export const advancedCounterSlice = createSlice({
  name: "advancedCounter",
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
    // Reset action
    reset: (state) => {
      state.value = 0
    },
    // Increment by amount action
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Export the actions
export const { increment, decrement, reset, incrementByAmount } = advancedCounterSlice.actions

// Export the reducer
export default advancedCounterSlice.reducer
