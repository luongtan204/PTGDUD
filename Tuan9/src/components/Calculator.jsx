"use client"

import { useDispatch, useSelector } from "react-redux"
import { updateInput, calculateResult } from "../redux/features/calculatorSlice"

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
    <div className="border rounded-lg shadow-sm">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Máy tính BMI</h2>

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="calculationType" className="block text-sm font-medium">
              Loại tính toán
            </label>
            <select
              id="calculationType"
              value={calculationType}
              onChange={(e) => handleInputChange("calculationType", e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="bmi">Chỉ số BMI</option>
              <option value="calories">Lượng calo cần thiết</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="height" className="block text-sm font-medium">
              Chiều cao (cm)
            </label>
            <input
              id="height"
              type="number"
              value={height}
              onChange={(e) => handleInputChange("height", e.target.value)}
              placeholder="Nhập chiều cao"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="weight" className="block text-sm font-medium">
              Cân nặng (kg)
            </label>
            <input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => handleInputChange("weight", e.target.value)}
              placeholder="Nhập cân nặng"
              className="w-full px-3 py-2 border rounded-md"
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

          <button onClick={handleCalculate} className="w-full bg-primary text-white py-2 rounded-md mt-2">
            Tính toán
          </button>
        </div>
      </div>
    </div>
  )
}
