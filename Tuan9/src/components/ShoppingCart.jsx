"use client"

import { useDispatch, useSelector } from "react-redux"
import { addItem, removeItem, updateQuantity } from "../redux/features/cartSlice"
import { MinusIcon, PlusIcon, ShoppingCartIcon, Trash2 } from "lucide-react"
import { formatCurrency } from "../lib/utils"

export default function ShoppingCart() {
  const dispatch = useDispatch()
  const { items } = useSelector((state) => state.cart)

  // Sample products to add to cart
  const products = [
    { id: "1", name: "Áo thun", price: 250000, image: "https://placehold.co/80x80" },
    { id: "2", name: "Quần jean", price: 450000, image: "https://placehold.co/80x80" },
    { id: "3", name: "Giày thể thao", price: 850000, image: "https://placehold.co/80x80" },
  ]

  // Calculate totals
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="border rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Sản phẩm</h2>
          <div className="grid gap-4">
            {products.map((product) => (
              <div key={product.id} className="flex items-center justify-between border p-4 rounded-md">
                <div className="flex items-center gap-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{formatCurrency(product.price)}</p>
                  </div>
                </div>
                <button
                  onClick={() =>
                    dispatch(
                      addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        quantity: 1,
                      }),
                    )
                  }
                  className="bg-primary text-white px-3 py-1 rounded-md"
                >
                  Thêm vào giỏ
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ShoppingCartIcon className="h-5 w-5" />
            Giỏ hàng
            {totalItems > 0 && <span className="text-sm font-normal">({totalItems} sản phẩm)</span>}
          </h2>

          {items.length === 0 ? (
            <p className="text-center text-muted-foreground my-8">Giỏ hàng trống</p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded-md"
                    />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{formatCurrency(item.price)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="border rounded-md p-1"
                      onClick={() =>
                        dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))
                      }
                      disabled={item.quantity <= 1}
                    >
                      <MinusIcon className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      className="border rounded-md p-1"
                      onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                    >
                      <PlusIcon className="h-4 w-4" />
                    </button>
                    <button
                      className="text-muted-foreground hover:text-destructive ml-2"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}

              <div className="pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Tạm tính:</span>
                  <span>{formatCurrency(totalPrice)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Tổng cộng:</span>
                  <span>{formatCurrency(totalPrice)}</span>
                </div>
                <button className="w-full mt-4 bg-primary text-white py-2 rounded-md">Thanh toán</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
