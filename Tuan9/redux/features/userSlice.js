import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// Define the initial state
const initialState = {
  users: [],
  status: "idle",
  error: null,
}

// Create an async thunk for fetching users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  return await response.json()
})

// Create the users slice with reducers
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.users = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Đã xảy ra lỗi"
      })
  },
})

// Export the reducer
export default userSlice.reducer
