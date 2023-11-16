import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './components/css/App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
