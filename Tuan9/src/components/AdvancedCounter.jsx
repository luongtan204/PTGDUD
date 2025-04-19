"use client"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset, incrementByAmount } from "../redux/features/advancedCounterSlice"
import { MinusIcon, PlusIcon, RotateCcwIcon } from "lucide-react"

export default function AdvancedCounter() {
  const [incrementAmount, setIncrementAmount] = useState("5")
  const count = useSelector((state) => state.advancedCounter.value)
  const dispatch = useDispatch()

  const handleIncrementByAmount = () => {
    const amount = Number(incrementAmount) || 0
    dispatch(incrementByAmount(amount))
  }

  return (
    <div className="border rounded-lg shadow-sm">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Bộ đếm nâng cao</h2>

        <div className="flex flex-col items-center space-y-6">
          <div className="text-7xl font-bold">{count}</div>

          <div className="flex gap-2">
            <button onClick={() => dispatch(decrement())} className="border rounded-md p-2">
              <MinusIcon className="h-4 w-4" />
            </button>
            <button onClick={() => dispatch(increment())} className="border rounded-md p-2">
              <PlusIcon className="h-4 w-4" />
            </button>
            <button onClick={() => dispatch(reset())} className="border rounded-md p-2">
              <RotateCcwIcon className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 w-full">
            <input
              type="number"
              value={incrementAmount}
              onChange={(e) => setIncrementAmount(e.target.value)}
              className="w-24 px-3 py-2 border rounded-md"
              min="0"
            />
            <button onClick={handleIncrementByAmount} className="flex-1 bg-primary text-white px-4 py-2 rounded-md">
              Tăng theo giá trị
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
