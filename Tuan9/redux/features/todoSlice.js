import { createSlice } from "@reduxjs/toolkit"

// Define the initial state
const initialState = {
  items: [],
}

// Create the todo slice with reducers
export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Add a new todo
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
      }
      state.items.push(newTodo)
    },

    // Toggle a todo's completed status
    toggleTodo: (state, action) => {
      const todo = state.items.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },

    // Remove a todo
    removeTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload)
    },
  },
})

// Export the actions
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions

// Export the reducer
export default todoSlice.reducer
