import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Cart from './pages/Cart';
import MyProducts from './pages/MyProducts';
import Thanks from './pages/Thanks';
import ForgotPassword from './pages/ForgotPassword';
import CreateProduct from './pages/CreateProduct';
import Perfil from './pages/Perfil';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registrar" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/meusprodutos" element={<MyProducts />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/obrigado" element={<Thanks />} />
        <Route path="/esqueciasenha" element={<ForgotPassword />} />
        <Route path="/criarproduto" element={<CreateProduct />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
