import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import CounterPage from "./pages/CounterPage"
import TodoPage from "./pages/TodoPage"
import ThemePage from "./pages/ThemePage"
import CartPage from "./pages/CartPage"
import AuthPage from "./pages/AuthPage"
import AsyncPage from "./pages/AsyncPage"
import AdvancedCounterPage from "./pages/AdvancedCounterPage"
import CalculatorPage from "./pages/CalculatorPage"
import EventsPage from "./pages/EventsPage"
import CombinedPage from "./pages/CombinedPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="counter" element={<CounterPage />} />
        <Route path="todo" element={<TodoPage />} />
        <Route path="theme" element={<ThemePage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="async" element={<AsyncPage />} />
        <Route path="advanced-counter" element={<AdvancedCounterPage />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="combined" element={<CombinedPage />} />
      </Route>
    </Routes>
  )
}

export default App
