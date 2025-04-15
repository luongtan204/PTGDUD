import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Overview from './components/OverView';
import Database from './components/Database';
import NavLeft from './components/NavLeft';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Thanh điều hướng bên trái */}
        <div className=" w-1/5 bg-gray-200 h-screen p-4">
          <NavLeft />
        </div>
        {/* Nội dung chính */}
        <div className="flex-1">
          {/* Header luôn hiển thị */}
          <Header />
          {/* Nội dung thay đổi dựa trên tuyến đường */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/database" element={<Database />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;