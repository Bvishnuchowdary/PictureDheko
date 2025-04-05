import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Landingpage from './pages/Landingpage/LandingPage';

function App() {
  return (
   <div className=''>
    
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
