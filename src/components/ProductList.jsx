import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cart/CartSlice.jsx';
import Navbar from './Navbar.jsx';

const plantCategories = [
  {
    category: 'Aromatic Plants',
    plants: [
      { id: 1, name: 'Lavender', price: 12, image: 'https://images.unsplash.com/photo-1528756514091-dee5ecaa3278?auto=format&fit=crop&w=500&q=80' },
      { id: 2, name: 'Rosemary', price: 10, image: 'https://images.unsplash.com/photo-1620920185964-203c32b57de0?auto=format&fit=crop&w=500&q=80' },
      { id: 3, name: 'Mint', price: 8, image: 'https://images.unsplash.com/photo-1628557044797-f21a177c37ec?auto=format&fit=crop&w=500&q=80' },
      { id: 4, name: 'Basil', price: 9, image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=500&q=80' },
      { id: 5, name: 'Lemon Balm', price: 11, image: 'https://images.unsplash.com/photo-1599685315640-f54731f3999f?auto=format&fit=crop&w=500&q=80' },
      { id: 6, name: 'Thyme', price: 7, image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=500&q=80' }
    ]
  },
  {
    category: 'Air Purifying Plants',
    plants: [
      { id: 7, name: 'Snake Plant', price: 18, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b2f?auto=format&fit=crop&w=500&q=80' },
      { id: 8, name: 'Peace Lily', price: 20, image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=500&q=80' },
      { id: 9, name: 'Spider Plant', price: 15, image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=500&q=80' },
      { id: 10, name: 'Boston Fern', price: 16, image: 'https://images.unsplash.com/photo-1552555186-80d2afcd4f10?auto=format&fit=crop&w=500&q=80' },
      { id: 11, name: 'Aloe Vera', price: 14, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80' },
      { id: 12, name: 'Rubber Plant', price: 22, image: 'https://images.unsplash.com/photo-1545239705-1564e58b9e4a?auto=format&fit=crop&w=500&q=80' }
    ]
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      { id: 13, name: 'ZZ Plant', price: 21, image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=500&q=80' },
      { id: 14, name: 'Pothos', price: 13, image: 'https://images.unsplash.com/photo-1597305877032-0668b3c6413a?auto=format&fit=crop&w=500&q=80' },
      { id: 15, name: 'Jade Plant', price: 17, image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80' },
      { id: 16, name: 'Cactus', price: 12, image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?auto=format&fit=crop&w=500&q=80' },
      { id: 17, name: 'Succulent Mix', price: 19, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80' },
      { id: 18, name: 'Monstera', price: 25, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80' }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isPlantInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  return (
    <div>
      <Navbar />
      <main className="product-page">
        <h1>Paradise Nursery Plant Collection</h1>
        {plantCategories.map((categoryGroup) => (
          <section className="category-section" key={categoryGroup.category}>
            <h2>{categoryGroup.category}</h2>
            <div className="product-grid">
              {categoryGroup.plants.map((plant) => (
                <div className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} className="plant-thumbnail" />
                  <h3>{plant.name}</h3>
                  <p className="price">${plant.price}</p>
                  <button
                    className="add-to-cart-button"
                    onClick={() => handleAddToCart(plant)}
                    disabled={isPlantInCart(plant.id)}
                  >
                    {isPlantInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
