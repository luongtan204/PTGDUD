import { createSlice } from "@reduxjs/toolkit"

// Define the initial state
const initialState = {
  height: "",
  weight: "",
  calculationType: "bmi",
  result: null,
}

// Create the calculator slice with reducers
export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    // Update input fields
    updateInput: (state, action) => {
      const { name, value } = action.payload

      if (name === "height") {
        state.height = value
      } else if (name === "weight") {
        state.weight = value
      } else if (name === "calculationType") {
        state.calculationType = value
      }
    },

    // Calculate result
    calculateResult: (state) => {
      const height = Number.parseFloat(state.height)
      const weight = Number.parseFloat(state.weight)

      if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        state.result = null
        return
      }

      if (state.calculationType === "bmi") {
        // BMI = weight (kg) / (height (m))^2
        const heightInMeters = height / 100
        state.result = weight / (heightInMeters * heightInMeters)
      } else {
        // Basic BMR calculation (Harris-Benedict equation)
        // For simplicity, assuming a 30-year-old moderately active male
        // BMR = 10 * weight (kg) + 6.25 * height (cm) - 5 * age + 5
        const bmr = 10 * weight + 6.25 * height - 5 * 30 + 5
        // Multiply by activity factor (1.55 for moderate activity)
        state.result = bmr * 1.55
      }
    },
  },
})

// Export the actions
export const { updateInput, calculateResult } = calculatorSlice.actions

// Export the reducer
export default calculatorSlice.reducer
