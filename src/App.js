import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './components/css/App.css';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="m-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
