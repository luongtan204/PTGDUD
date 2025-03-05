import { useState } from 'react';
import './App.css';

function App() {
  const [initialMoney, setInitialMoney] = useState('');
  const [rate, setRate] = useState('');
  const [expectedMoney, setExpectedMoney] = useState('');
  const [results, setResults] = useState([]);

  const calculate = () => {
    let year = 2025;
    let money = parseFloat(initialMoney);
    const ratePercentage = parseFloat(rate) / 100;
    const expected = parseFloat(expectedMoney);

    if (money <= 0 || ratePercentage <= 0 || expected <= money) {
      alert("Vui lòng nhập giá trị hợp lệ!");
      return;
    }

    const resultArray = [];
    while (money < expected) {
      money += money * ratePercentage;
      resultArray.push({ year, money: money.toFixed(2), rate: ratePercentage * 100 });
      year++;
    }

    setResults(resultArray);
  };
  return (
    <div className="container">
      <div className="card">
        <h2>💰 Dự báo Tăng trưởng Tài chính</h2>
        <label>
          Số tiền ban đầu:
          <input type="number" value={initialMoney} onChange={(e) => setInitialMoney(e.target.value)} />
        </label>
        <label>
          Lãi suất hàng năm (%):
          <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} />
        </label>
        <label>
          Mục tiêu tài chính:
          <input type="number" value={expectedMoney} onChange={(e) => setExpectedMoney(e.target.value)} />
        </label>
        <button onClick={calculate}>Tính toán</button>

        {results.length > 0 && (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Money</th>
                  <th>Rate (%)</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <tr key={index}>
                    <td>{result.year}</td>
                    <td>{result.money}</td>
                    <td>{result.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
