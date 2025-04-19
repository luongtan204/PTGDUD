export function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount)
}
