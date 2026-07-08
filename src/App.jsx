import { Routes, Route, useNavigate } from 'react-router-dom';
import AboutUs from './components/AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';
import './App.css';

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/products');
  };

  return (
    <div className="landing-page background-image">
      <div className="landing-overlay">
        <h1>Welcome to Paradise Nursery</h1>
        <AboutUs />
        <button className="get-started-button" onClick={handleGetStartedClick}>
          Get Started
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;
