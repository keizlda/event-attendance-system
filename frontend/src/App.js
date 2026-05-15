import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/home" element={<Home />} />

        <Route path="/admin" element={<AdminLogin />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;