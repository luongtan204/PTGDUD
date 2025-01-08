// Dữ liệu đầu vào
const bills = [275, 40, 430];

// Hàm tính tip và in kết quả
bills.forEach(bill => {
    const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
    const total = bill + tip;
    console.log(`Hóa đơn là ${bill}, tiền tip là ${tip.toFixed(2)}, và tổng cộng là ${total.toFixed(2)}`);
});