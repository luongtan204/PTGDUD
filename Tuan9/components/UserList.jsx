"use client"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "@/redux/features/userSlice"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RefreshCwIcon, UserIcon } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

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
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Danh sách người dùng</CardTitle>
        <Button variant="outline" size="sm" onClick={handleRefresh} disabled={status === "loading"}>
          <RefreshCwIcon className={`h-4 w-4 mr-2 ${status === "loading" ? "animate-spin" : ""}`} />
          Làm mới
        </Button>
      </CardHeader>
      <CardContent>
        {status === "loading" && (
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ))}
          </div>
        )}

        {status === "failed" && (
          <div className="p-4 text-center text-destructive">
            <p>Đã xảy ra lỗi: {error}</p>
            <Button variant="outline" size="sm" onClick={handleRefresh} className="mt-2">
              Thử lại
            </Button>
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
      </CardContent>
    </Card>
  )
}
