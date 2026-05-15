import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import SignUp from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import AdminDashboard from './pages/AdminDashboard.jsx';
import AddProduct from './pages/AddProduct.jsx';
import Aboutus from './pages/Aboutus.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/allProducts' element={<AllProducts />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/admin-dashboard' element={<AdminDashboard />} />
      <Route path='/admin-addProduct' element={<AddProduct />} />
      <Route path='/about-us' element={<Aboutus />} />
      <Route path='/privacy-policy' element={<PrivacyPage />} />
    </Routes>
  )
}