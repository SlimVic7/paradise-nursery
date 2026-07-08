import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="site-header">
      <Link to="/" className="brand">
        <span className="brand-mark">PN</span>
        <span>Paradise Nursery</span>
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart" className="cart-link" aria-label="Shopping cart">
          🛒 Cart <span className="cart-count">{cartQuantity}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
