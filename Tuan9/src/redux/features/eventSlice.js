import { createSlice } from "@reduxjs/toolkit"

// Define the initial state
const initialState = {
  events: [],
}

// Create the event slice with reducers
export const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    // Add a new event
    addEvent: (state, action) => {
      state.events.push(action.payload)
    },

    // Edit an existing event
    editEvent: (state, action) => {
      const index = state.events.findIndex((event) => event.id === action.payload.id)
      if (index !== -1) {
        state.events[index] = action.payload
      }
    },

    // Delete an event
    deleteEvent: (state, action) => {
      state.events = state.events.filter((event) => event.id !== action.payload)
    },
  },
})

// Export the actions
export const { addEvent, editEvent, deleteEvent } = eventSlice.actions

// Export the reducer
export default eventSlice.reducer
