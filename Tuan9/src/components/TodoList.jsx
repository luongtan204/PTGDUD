"use client"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, toggleTodo, removeTodo } from "../redux/features/todoSlice"
import { Trash2 } from "lucide-react"

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
    <div className="border rounded-lg shadow-sm">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Danh sách công việc</h2>

        <form onSubmit={handleAddTodo} className="flex gap-2 mb-6">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Thêm công việc mới..."
            className="flex-1 px-3 py-2 border rounded-md"
          />
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md">
            Thêm
          </button>
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
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => dispatch(toggleTodo(todo.id))}
                    id={`todo-${todo.id}`}
                    className="h-4 w-4"
                  />
                  <label htmlFor={`todo-${todo.id}`} className={`${todo.completed ? "line-through" : ""}`}>
                    {todo.text}
                  </label>
                </div>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-muted-foreground hover:text-destructive p-1"
                >
                  <Trash2 size={18} />
                  <span className="sr-only">Xóa</span>
                </button>
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
      </div>
    </div>
  )
}
