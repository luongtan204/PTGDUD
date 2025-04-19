"use client"

import { useDispatch, useSelector } from "react-redux"
import { updateInput, calculateResult } from "@/redux/features/calculatorSlice"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Calculator() {
  const dispatch = useDispatch()
  const { height, weight, calculationType, result } = useSelector((state) => state.calculator)

  const handleInputChange = (name, value) => {
    dispatch(updateInput({ name, value }))
  }

  const handleCalculate = () => {
    dispatch(calculateResult())
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Máy tính BMI</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="calculationType">Loại tính toán</Label>
          <Select value={calculationType} onValueChange={(value) => handleInputChange("calculationType", value)}>
            <SelectTrigger id="calculationType">
              <SelectValue placeholder="Chọn loại tính toán" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bmi">Chỉ số BMI</SelectItem>
              <SelectItem value="calories">Lượng calo cần thiết</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="height">Chiều cao (cm)</Label>
          <Input
            id="height"
            type="number"
            value={height}
            onChange={(e) => handleInputChange("height", e.target.value)}
            placeholder="Nhập chiều cao"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="weight">Cân nặng (kg)</Label>
          <Input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => handleInputChange("weight", e.target.value)}
            placeholder="Nhập cân nặng"
          />
        </div>

        {result !== null && (
          <div className="p-4 bg-muted rounded-md">
            <p className="font-medium">Kết quả:</p>
            {calculationType === "bmi" ? (
              <>
                <p className="text-2xl font-bold">{result.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">
                  {result < 18.5 ? "Thiếu cân" : result < 25 ? "Bình thường" : result < 30 ? "Thừa cân" : "Béo phì"}
                </p>
              </>
            ) : (
              <p className="text-2xl font-bold">{Math.round(result)} kcal/ngày</p>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleCalculate} className="w-full">
          Tính toán
        </Button>
      </CardFooter>
    </Card>
  )
}
