"use client"

import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "@/redux/features/counterSlice"
import { Button } from "@/components/ui/button"
import { PlusIcon, MinusIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <Card>
      <CardContent className="flex flex-col items-center p-6">
        <div className="text-7xl font-bold mb-8 text-center">{count}</div>

        <div className="flex gap-4">
          <Button
            onClick={() => dispatch(decrement())}
            className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-4 h-auto"
            size="lg"
          >
            <MinusIcon className="mr-2 h-5 w-5" />
            Giảm
          </Button>

          <Button
            onClick={() => dispatch(increment())}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-4 h-auto"
            size="lg"
          >
            <PlusIcon className="mr-2 h-5 w-5" />
            Tăng
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
