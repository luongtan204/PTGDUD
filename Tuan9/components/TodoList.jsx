"use client"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, toggleTodo, removeTodo } from "@/redux/features/todoSlice"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Trash2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TodoList() {
  const [newTodo, setNewTodo] = useState("")
  const todos = useSelector((state) => state.todos.items)
  const dispatch = useDispatch()

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo.trim()))
      setNewTodo("")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Danh sách công việc</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleAddTodo} className="flex gap-2 mb-6">
          <Input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Thêm công việc mới..."
            className="flex-1"
          />
          <Button type="submit">Thêm</Button>
        </form>

        {todos.length === 0 ? (
          <p className="text-center text-muted-foreground my-4">Chưa có công việc nào. Hãy thêm công việc mới!</p>
        ) : (
          <ul className="space-y-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex items-center justify-between p-3 rounded-md border ${
                  todo.completed ? "bg-muted text-muted-foreground" : "bg-background"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={todo.completed}
                    onCheckedChange={() => dispatch(toggleTodo(todo.id))}
                    id={`todo-${todo.id}`}
                  />
                  <label htmlFor={`todo-${todo.id}`} className={`${todo.completed ? "line-through" : ""}`}>
                    {todo.text}
                  </label>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <Trash2 size={18} />
                  <span className="sr-only">Xóa</span>
                </Button>
              </li>
            ))}
          </ul>
        )}

        {todos.length > 0 && (
          <div className="mt-4 text-sm text-muted-foreground">
            <p>
              Tổng số: {todos.length} công việc | Hoàn thành: {todos.filter((todo) => todo.completed).length}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
