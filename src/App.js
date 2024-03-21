import { Route, Routes } from 'react-router-dom';
import './components/css/App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/account/Login';
import Logout from './pages/account/Logout';
import Register from './pages/account/Register';
import Settings from './pages/account/Settings';
import FindPassword from './pages/account/FindPassword';
import Delete from './pages/account/Delete';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="m-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account/login" element={<Login />} />
            <Route path="/account/logout" element={<Logout />} />
            <Route path="/account/register" element={<Register />} />
            <Route path="/account/settings" element={<Settings />} />
            <Route path="/account/findpassword" element={<FindPassword />} />
            <Route path="/account/delete" element={<Delete />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
