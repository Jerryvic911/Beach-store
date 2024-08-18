import './App.css';
import Body from './landing-page-features/Body.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from './pages/Nopage.jsx';
import Abouts from './pages/abouts.jsx';
import Contact from './pages/contact.jsx';
import Shop from './pages/shop/shop.jsx';
import Cart from './pages/cart/cart.jsx';
import ShopContextProvider from './context/shop-context.jsx';
import ProductDetail from './pages/product.jsx';
import Admin from './components/admin.jsx';
import ScrollToTop from './scrooltop.js';

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="about" element={<Abouts />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
