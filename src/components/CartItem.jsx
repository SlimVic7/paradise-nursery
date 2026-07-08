import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header.jsx';
import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
  selectCartItems,
  selectCartQuantity,
  selectCartTotal
} from '../features/cart/CartSlice.jsx';

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectCartQuantity);
  const totalCost = useSelector(selectCartTotal);

  const handleCheckout = () => {
    window.alert('Checkout Coming Soon!');
  };

  return (
    <>
      <Header />
      <main className="page-shell cart-page">
        <section className="page-intro cart-summary">
          <p className="eyebrow">Shopping Cart</p>
          <h1>Your Plant Cart</h1>
          <div className="summary-grid">
            <div>
              <span>Total plants</span>
              <strong>{totalQuantity}</strong>
            </div>
            <div>
              <span>Total cost</span>
              <strong>${totalCost.toFixed(2)}</strong>
            </div>
          </div>
        </section>

        {cartItems.length === 0 ? (
          <section className="empty-cart">
            <h2>Your cart is empty.</h2>
            <p>Add your favorite houseplants and they will appear here.</p>
            <Link className="primary-button" to="/plants">
              Continue Shopping
            </Link>
          </section>
        ) : (
          <section className="cart-items">
            {cartItems.map((item) => (
              <article className="cart-card" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-details">
                  <h2>{item.name}</h2>
                  <p>Unit price: ${item.price.toFixed(2)}</p>
                  <p>Item total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>

                <div className="quantity-controls" aria-label={`Quantity controls for ${item.name}`}>
                  <button
                    type="button"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    aria-label={`Decrease ${item.name} quantity`}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    aria-label={`Increase ${item.name} quantity`}
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="delete-button"
                  onClick={() => dispatch(deleteItem(item.id))}
                >
                  Delete
                </button>
              </article>
            ))}

            <div className="cart-actions">
              <Link className="secondary-button" to="/plants">
                Continue Shopping
              </Link>
              <button type="button" className="primary-button" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export default CartItem;
