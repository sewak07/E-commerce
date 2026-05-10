import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import SignUp from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import AdminDashboard from './pages/AdminDashboard.jsx';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/allProducts' element={<AllProducts />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/admin-dashboard' element={<AdminDashboard />} />
    </Routes>
  )
}