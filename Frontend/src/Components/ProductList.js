import React, { useState, useEffect } from 'react';
import '../CSS/ProductList.css';
import MenuBar from './MenuBar';


function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({}); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleQuantityChange = (event, productId) => {
    const newQuantities = {
      ...quantities,
      [productId]: parseInt(event.target.value) || 1,
    };
    setQuantities(newQuantities);
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product._id] || 1; 
    addToCart(product, quantity);
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  return (
    <div>
      <MenuBar></MenuBar>
      <h2 align="center">Shoe Mart</h2>
      <div className="product-list-container">
        {products.map((product) => (
          <div key={product._id} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <input
                type="number"
                min="1"
                value={quantities[product._id] || 1}
                onChange={(event) => handleQuantityChange(event, product._id)}
              />
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
