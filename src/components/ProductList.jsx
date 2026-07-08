import { useDispatch, useSelector } from 'react-redux';
import Header from './Header.jsx';
import plants from '../data/plants.js';
import { addToCart, selectCartItems } from '../features/cart/CartSlice.jsx';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const categories = [...new Set(plants.map((plant) => plant.category))];

  const isPlantInCart = (plantId) =>
    cartItems.some((cartItem) => cartItem.id === plantId);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <>
      <Header />
      <main className="page-shell">
        <section className="page-intro">
          <p className="eyebrow">Fresh indoor greenery</p>
          <h1>Shop Houseplants</h1>
          <p>
            Choose from air-purifying plants, easy-care succulents, and lush
            tropical plants for your personal paradise.
          </p>
        </section>

        {categories.map((category) => (
          <section key={category} className="product-category">
            <h2>{category}</h2>
            <div className="product-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => {
                  const added = isPlantInCart(plant.id);

                  return (
                    <article className="product-card" key={plant.id}>
                      <img src={plant.image} alt={plant.name} />
                      <div className="product-card-body">
                        <h3>{plant.name}</h3>
                        <p className="price">${plant.price.toFixed(2)}</p>
                        <button
                          type="button"
                          className="add-button"
                          onClick={() => handleAddToCart(plant)}
                          disabled={added}
                        >
                          {added ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </article>
                  );
                })}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

export default ProductList;
