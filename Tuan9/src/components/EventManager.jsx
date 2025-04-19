"use client"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addEvent, editEvent, deleteEvent } from "../redux/features/eventSlice"
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
      <div className="border rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">{isEditing ? "Chỉnh sửa sự kiện" : "Thêm sự kiện mới"}</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-medium">
                Tiêu đề
              </label>
              <input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nhập tiêu đề sự kiện"
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="date" className="block text-sm font-medium">
                Ngày
              </label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="location" className="block text-sm font-medium">
                Địa điểm
              </label>
              <input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Nhập địa điểm"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-medium">
                Mô tả
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Nhập mô tả sự kiện"
                rows={3}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div className="flex gap-2">
              <button type="submit" className="flex-1 bg-primary text-white py-2 rounded-md">
                {isEditing ? "Cập nhật" : "Thêm sự kiện"}
              </button>
              {isEditing && (
                <button type="button" className="border px-4 py-2 rounded-md" onClick={resetForm}>
                  Hủy
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="border rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Danh sách sự kiện</h2>

          {events.length === 0 ? (
            <p className="text-center text-muted-foreground my-8">Chưa có sự kiện nào</p>
          ) : (
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="border rounded-md p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">{event.title}</h3>
                    <div className="flex gap-1">
                      <button className="p-1" onClick={() => handleEdit(event.id)}>
                        <EditIcon className="h-4 w-4" />
                      </button>
                      <button className="p-1" onClick={() => handleDelete(event.id)}>
                        <Trash2Icon className="h-4 w-4" />
                      </button>
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
        </div>
      </div>
    </div>
  )
}
