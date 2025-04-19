"use client"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addEvent, editEvent, deleteEvent } from "@/redux/features/eventSlice"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, EditIcon, Trash2Icon } from "lucide-react"
import { format } from "date-fns"

export default function EventManager() {
  const [isEditing, setIsEditing] = useState(false)
  const [currentId, setCurrentId] = useState(null)
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")

  const dispatch = useDispatch()
  const { events } = useSelector((state) => state.events)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title && date) {
      if (isEditing && currentId) {
        dispatch(
          editEvent({
            id: currentId,
            title,
            date,
            description,
            location,
          }),
        )
      } else {
        dispatch(
          addEvent({
            id: Date.now().toString(),
            title,
            date,
            description,
            location,
          }),
        )
      }

      resetForm()
    }
  }

  const handleEdit = (id) => {
    const event = events.find((e) => e.id === id)
    if (event) {
      setCurrentId(id)
      setTitle(event.title)
      setDate(event.date)
      setDescription(event.description || "")
      setLocation(event.location || "")
      setIsEditing(true)
    }
  }

  const handleDelete = (id) => {
    dispatch(deleteEvent(id))
  }

  const resetForm = () => {
    setCurrentId(null)
    setTitle("")
    setDate("")
    setDescription("")
    setLocation("")
    setIsEditing(false)
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>{isEditing ? "Chỉnh sửa sự kiện" : "Thêm sự kiện mới"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Tiêu đề</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nhập tiêu đề sự kiện"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Ngày</Label>
              <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Địa điểm</Label>
              <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Nhập địa điểm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Mô tả</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Nhập mô tả sự kiện"
                rows={3}
              />
            </div>

            <div className="flex gap-2">
              <Button type="submit" className="flex-1">
                {isEditing ? "Cập nhật" : "Thêm sự kiện"}
              </Button>
              {isEditing && (
                <Button type="button" variant="outline" onClick={resetForm}>
                  Hủy
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Danh sách sự kiện</CardTitle>
        </CardHeader>
        <CardContent>
          {events.length === 0 ? (
            <p className="text-center text-muted-foreground my-8">Chưa có sự kiện nào</p>
          ) : (
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="border rounded-md p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">{event.title}</h3>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" onClick={() => handleEdit(event.id)}>
                        <EditIcon className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(event.id)}>
                        <Trash2Icon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <CalendarIcon className="h-3 w-3 mr-1" />
                    {event.date && <time dateTime={event.date}>{format(new Date(event.date), "dd/MM/yyyy")}</time>}
                    {event.location && <span className="ml-2">• {event.location}</span>}
                  </div>

                  {event.description && <p className="text-sm mt-2">{event.description}</p>}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
