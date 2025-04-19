"use client"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../redux/features/userSlice"
import { RefreshCwIcon, UserIcon } from "lucide-react"

export default function UserList() {
  const dispatch = useDispatch()
  const { users, status, error } = useSelector((state) => state.users)

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers())
    }
  }, [status, dispatch])

  const handleRefresh = () => {
    dispatch(fetchUsers())
  }

  return (
    <div className="border rounded-lg shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Danh sách người dùng</h2>
          <button
            className="border px-3 py-1 rounded-md flex items-center text-sm"
            onClick={handleRefresh}
            disabled={status === "loading"}
          >
            <RefreshCwIcon className={`h-4 w-4 mr-2 ${status === "loading" ? "animate-spin" : ""}`} />
            Làm mới
          </button>
        </div>

        {status === "loading" && (
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 animate-pulse"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {status === "failed" && (
          <div className="p-4 text-center text-destructive">
            <p>Đã xảy ra lỗi: {error}</p>
            <button className="border px-3 py-1 rounded-md mt-2" onClick={handleRefresh}>
              Thử lại
            </button>
          </div>
        )}

        {status === "succeeded" && (
          <div className="divide-y">
            {users.map((user) => (
              <div key={user.id} className="py-4 flex items-start space-x-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <UserIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{user.name}</h3>
                  <p className="text-sm text-muted-foreground">@{user.username}</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
