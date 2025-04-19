"use client"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../redux/features/authSlice"
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
      <div className="border rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">Thông tin người dùng</h2>
          <p className="text-muted-foreground mb-6">Bạn đã đăng nhập thành công</p>

          <div className="flex flex-col items-center space-y-4">
            <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
              <UserIcon className="h-12 w-12 text-primary" />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold">{user?.name}</h2>
              <p className="text-sm text-muted-foreground">@{user?.username}</p>
            </div>
          </div>

          <button
            className="w-full mt-6 border border-gray-300 py-2 rounded-md flex items-center justify-center"
            onClick={handleLogout}
          >
            <LogOutIcon className="mr-2 h-4 w-4" />
            Đăng xuất
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="border rounded-lg shadow-sm">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">Đăng nhập</h2>
        <p className="text-muted-foreground mb-6">Nhập thông tin đăng nhập của bạn</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="username" className="block text-sm font-medium">
              Tên đăng nhập
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nhập tên đăng nhập"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium">
              Mật khẩu
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-2 rounded-md">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  )
}
