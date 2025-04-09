import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Overview from './components/OverView';
import Database from './components/Database';
import Main from './components/Main';
import NavLeft from './components/NavLeft';
function App() {


  return (
    <>
    <Router>
      <div className="flex">
        <div className="w-1/7 bg-gray-200 min-h-screen">
          <NavLeft />
        </div>
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
            <Route path="/database" element={<Database />} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App
