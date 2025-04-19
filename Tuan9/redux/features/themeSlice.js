import { createSlice } from "@reduxjs/toolkit"

// Define the initial state
const initialState = {
  theme: "light",
}

// Create the theme slice with reducers
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // Toggle theme action
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light"
    },
  },
})

// Export the actions
export const { toggleTheme } = themeSlice.actions

// Export the reducer
export default themeSlice.reducer
