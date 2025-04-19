"use client"

import { useSelector } from "react-redux"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tổng hợp Redux State</CardTitle>
        <CardDescription>Ví dụ về việc kết hợp nhiều slice trong một ứng dụng Redux</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-base">Counter</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-3xl font-bold">{counterValue}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-base">Todo List</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-3xl font-bold">{todos.length}</p>
              <p className="text-sm text-muted-foreground">{todos.filter((t) => t.completed).length} hoàn thành</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-base">Theme</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-3xl font-bold capitalize">{theme}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-base">Shopping Cart</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-3xl font-bold">{cartItems.length}</p>
              <p className="text-sm text-muted-foreground">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)} sản phẩm
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-base">Auth</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-3xl font-bold">{isLoggedIn ? "Đã đăng nhập" : "Chưa đăng nhập"}</p>
              {isLoggedIn && user && <p className="text-sm text-muted-foreground">{user.name}</p>}
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="counter">
          <TabsList className="grid grid-cols-5 mb-4">
            <TabsTrigger value="counter">Counter</TabsTrigger>
            <TabsTrigger value="todo">Todo</TabsTrigger>
            <TabsTrigger value="theme">Theme</TabsTrigger>
            <TabsTrigger value="cart">Cart</TabsTrigger>
            <TabsTrigger value="auth">Auth</TabsTrigger>
          </TabsList>
          <TabsContent value="counter">
            <Counter />
          </TabsContent>
          <TabsContent value="todo">
            <TodoList />
          </TabsContent>
          <TabsContent value="theme">
            <ThemeToggle />
          </TabsContent>
          <TabsContent value="cart">
            <ShoppingCart />
          </TabsContent>
          <TabsContent value="auth">
            <AuthForm />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
