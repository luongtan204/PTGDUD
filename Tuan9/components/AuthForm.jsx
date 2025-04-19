"use client"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "@/redux/features/authSlice"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LogOutIcon, UserIcon } from "lucide-react"

export default function AuthForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const { user, isLoggedIn } = useSelector((state) => state.auth)

  const handleLogin = (e) => {
    e.preventDefault()
    if (username && password) {
      dispatch(login({ username, name: username }))
      setUsername("")
      setPassword("")
    }
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  if (isLoggedIn) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Thông tin người dùng</CardTitle>
          <CardDescription>Bạn đã đăng nhập thành công</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
            <UserIcon className="h-12 w-12 text-primary" />
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold">{user?.name}</h2>
            <p className="text-sm text-muted-foreground">@{user?.username}</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" onClick={handleLogout}>
            <LogOutIcon className="mr-2 h-4 w-4" />
            Đăng xuất
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Đăng nhập</CardTitle>
        <CardDescription>Nhập thông tin đăng nhập của bạn</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Tên đăng nhập</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nhập tên đăng nhập"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Mật khẩu</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Đăng nhập
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
