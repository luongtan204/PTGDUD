import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./features/counterSlice"
import todoReducer from "./features/todoSlice"
import themeReducer from "./features/themeSlice"
import cartReducer from "./features/cartSlice"
import authReducer from "./features/authSlice"
import userReducer from "./features/userSlice"
import advancedCounterReducer from "./features/advancedCounterSlice"
import calculatorReducer from "./features/calculatorSlice"
import eventReducer from "./features/eventSlice"

// Configure the Redux store with multiple reducers
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    theme: themeReducer,
    cart: cartReducer,
    auth: authReducer,
    users: userReducer,
    advancedCounter: advancedCounterReducer,
    calculator: calculatorReducer,
    events: eventReducer,
  },
})
