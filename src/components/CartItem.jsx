import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../features/cart/CartSlice.jsx';
import Navbar from './Navbar.jsx';

function calculateTotalCartAmount(cartItems) {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}

function calculateTotalCartQuantity(cartItems) {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
}

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalCartAmount = calculateTotalCartAmount(cartItems);
  const totalCartQuantity = calculateTotalCartQuantity(cartItems);

  const handleIncreaseQuantity = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  return (
    <div>
      <Navbar />
      <main className="cart-page">
        <h1>Shopping Cart</h1>
        <div className="cart-summary">
          <h2>Total number of plants: {totalCartQuantity}</h2>
          <h2>Total cart amount: ${totalCartAmount.toFixed(2)}</h2>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-thumbnail" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Unit price: ${item.price}</p>
                  <p>Total cost for this plant: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                </div>
                <button className="delete-button" onClick={() => handleRemoveItem(item.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="cart-actions">
          <Link className="continue-shopping-button" to="/products">Continue Shopping</Link>
          <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
        </div>
      </main>
    </div>
  );
}

export default CartItem;
