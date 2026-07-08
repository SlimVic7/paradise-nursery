import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link className="logo" to="/">Paradise Nursery</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link className="cart-link" to="/cart">
          🛒 <span className="cart-count">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
