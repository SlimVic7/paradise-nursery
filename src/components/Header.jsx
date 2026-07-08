import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartQuantity } from '../features/cart/CartSlice.jsx';

function Header() {
  const cartQuantity = useSelector(selectCartQuantity);

  return (
    <header className="site-header">
      <Link to="/" className="brand">
        <span className="brand-mark">PN</span>
        <span>Paradise Nursery</span>
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/cart" className="cart-link" aria-label="Shopping cart">
          <svg className="cart-svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2Zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2ZM7.2 14.4c-.75 0-1.4-.41-1.73-1.03L2.2 6.2A1 1 0 0 1 3.1 4.8h3.12l.94 2h10.92c.75 0 1.23.8.88 1.46l-2.2 4.2c-.34.65-1.02 1.06-1.76 1.06H8.1l-1.1 2H19v2H7a2 2 0 0 1-1.76-2.95l1.96-3.17Z" />
          </svg>
          <span className="cart-count">{cartQuantity}</span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
