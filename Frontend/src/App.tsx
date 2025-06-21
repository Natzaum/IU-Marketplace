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
import Product from './pages/Product';
import PrivateRoute from './routes/PrivateRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Públicas */}
        <Route path="/registrar" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/obrigado" element={<Thanks />} />
        <Route path="/esqueciasenha" element={<ForgotPassword />} />
        <Route path="/produto/:id" element={<Product />} />

        {/* Privadas */}
        <Route
          path="/meusprodutos"
          element={
            <PrivateRoute>
              <MyProducts />
            </PrivateRoute>
          }
        />
        <Route
          path="/carrinho"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/criarproduto"
          element={
            <PrivateRoute>
              <CreateProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/perfil"
          element={
            <PrivateRoute>
              <Perfil />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
