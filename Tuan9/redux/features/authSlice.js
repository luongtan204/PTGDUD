import { createSlice } from "@reduxjs/toolkit"

// Define the initial state
const initialState = {
  user: null,
  isLoggedIn: false,
}

// Create the auth slice with reducers
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Login action
    login: (state, action) => {
      state.user = action.payload
      state.isLoggedIn = true
    },

    // Logout action
    logout: (state) => {
      state.user = null
      state.isLoggedIn = false
    },

    // Update user info
    setUserInfo: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload }
      }
    },
  },
})

// Export the actions
export const { login, logout, setUserInfo } = authSlice.actions

// Export the reducer
export default authSlice.reducer
