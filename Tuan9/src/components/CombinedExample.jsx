"use client"

import { useSelector } from "react-redux"
import { useState } from "react"
import Counter from "./Counter"
import TodoList from "./TodoList"
import ThemeToggle from "./ThemeToggle"
import ShoppingCart from "./ShoppingCart"
import AuthForm from "./AuthForm"

export default function CombinedExample() {
  const { value: counterValue } = useSelector((state) => state.counter)
  const { items: todos } = useSelector((state) => state.todos)
  const { theme } = useSelector((state) => state.theme)
  const { items: cartItems } = useSelector((state) => state.cart)
  const { isLoggedIn, user } = useSelector((state) => state.auth)
  const [activeTab, setActiveTab] = useState("counter")

  return (
    <div className="border rounded-lg shadow-sm">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">Tổng hợp Redux State</h2>
        <p className="text-muted-foreground mb-6">Ví dụ về việc kết hợp nhiều slice trong một ứng dụng Redux</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-base font-medium mb-2">Counter</h3>
            <p className="text-3xl font-bold">{counterValue}</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-base font-medium mb-2">Todo List</h3>
            <p className="text-3xl font-bold">{todos.length}</p>
            <p className="text-sm text-muted-foreground">{todos.filter((t) => t.completed).length} hoàn thành</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-base font-medium mb-2">Theme</h3>
            <p className="text-3xl font-bold capitalize">{theme}</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-base font-medium mb-2">Shopping Cart</h3>
            <p className="text-3xl font-bold">{cartItems.length}</p>
            <p className="text-sm text-muted-foreground">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)} sản phẩm
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-base font-medium mb-2">Auth</h3>
            <p className="text-3xl font-bold">{isLoggedIn ? "Đã đăng nhập" : "Chưa đăng nhập"}</p>
            {isLoggedIn && user && <p className="text-sm text-muted-foreground">{user.name}</p>}
          </div>
        </div>

        <div className="border-b mb-4">
          <div className="flex overflow-x-auto">
            <button
              className={`px-4 py-2 border-b-2 ${
                activeTab === "counter" ? "border-primary text-primary" : "border-transparent"
              }`}
              onClick={() => setActiveTab("counter")}
            >
              Counter
            </button>
            <button
              className={`px-4 py-2 border-b-2 ${
                activeTab === "todo" ? "border-primary text-primary" : "border-transparent"
              }`}
              onClick={() => setActiveTab("todo")}
            >
              Todo
            </button>
            <button
              className={`px-4 py-2 border-b-2 ${
                activeTab === "theme" ? "border-primary text-primary" : "border-transparent"
              }`}
              onClick={() => setActiveTab("theme")}
            >
              Theme
            </button>
            <button
              className={`px-4 py-2 border-b-2 ${
                activeTab === "cart" ? "border-primary text-primary" : "border-transparent"
              }`}
              onClick={() => setActiveTab("cart")}
            >
              Cart
            </button>
            <button
              className={`px-4 py-2 border-b-2 ${
                activeTab === "auth" ? "border-primary text-primary" : "border-transparent"
              }`}
              onClick={() => setActiveTab("auth")}
            >
              Auth
            </button>
          </div>
        </div>

        <div>
          {activeTab === "counter" && <Counter />}
          {activeTab === "todo" && <TodoList />}
          {activeTab === "theme" && <ThemeToggle />}
          {activeTab === "cart" && <ShoppingCart />}
          {activeTab === "auth" && <AuthForm />}
        </div>
      </div>
    </div>
  )
}
