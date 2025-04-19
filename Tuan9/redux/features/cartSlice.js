import { createSlice } from "@reduxjs/toolkit"

// Define the initial state
const initialState = {
  items: [],
}

// Create the cart slice with reducers
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add an item to the cart
    addItem: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id)

      if (existingItem) {
        existingItem.quantity += action.payload.quantity
      } else {
        state.items.push(action.payload)
      }
    },

    // Remove an item from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },

    // Update an item's quantity
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const item = state.items.find((item) => item.id === id)

      if (item) {
        item.quantity = quantity
      }
    },
  },
})

// Export the actions
export const { addItem, removeItem, updateQuantity } = cartSlice.actions

// Export the reducer
export default cartSlice.reducer
