import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutUs />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;
