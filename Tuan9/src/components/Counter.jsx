"use client"

import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/features/counterSlice"
import { PlusIcon, MinusIcon } from "lucide-react"

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="border rounded-lg shadow-sm">
      <div className="flex flex-col items-center p-6">
        <div className="text-7xl font-bold mb-8 text-center">{count}</div>

        <div className="flex gap-4">
          <button
            onClick={() => dispatch(decrement())}
            className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-4 rounded-md flex items-center"
          >
            <MinusIcon className="mr-2 h-5 w-5" />
            Giảm
          </button>

          <button
            onClick={() => dispatch(increment())}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-4 rounded-md flex items-center"
          >
            <PlusIcon className="mr-2 h-5 w-5" />
            Tăng
          </button>
        </div>
      </div>
    </div>
  )
}
