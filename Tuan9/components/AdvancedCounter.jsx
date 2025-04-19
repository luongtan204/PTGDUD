"use client"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset, incrementByAmount } from "@/redux/features/advancedCounterSlice"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Bộ đếm nâng cao</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-6">
        <div className="text-7xl font-bold">{count}</div>

        <div className="flex gap-2">
          <Button onClick={() => dispatch(decrement())} variant="outline" size="icon">
            <MinusIcon className="h-4 w-4" />
          </Button>
          <Button onClick={() => dispatch(increment())} variant="outline" size="icon">
            <PlusIcon className="h-4 w-4" />
          </Button>
          <Button onClick={() => dispatch(reset())} variant="outline" size="icon">
            <RotateCcwIcon className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2 w-full">
          <Input
            type="number"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
            className="w-24"
            min="0"
          />
          <Button onClick={handleIncrementByAmount} className="flex-1">
            Tăng theo giá trị
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
