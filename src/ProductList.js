import React, { useState } from 'react';
import './ProductList.css'; 

function ProductList({ addToCart }) {
  const products = [
    {
      id: 1,
      name: 'Nike Jordan ',
      description: 'Nike Jordan: Iconic sneakers embodying style, innovation, and cultural significance.',
      price: 10.99,
      image: 'jordan.png',
    },
    {
      id: 2,
      name: 'Nike Air Force',
      description: 'Nike Air Force: Timeless sneakers revered for their classic design, comfort, and versatility.',
      price: 15.99,
      image: 'air-force.png',
    },
    {
      id: 3,
      name: 'Addidas',
      description: ' Adidas: Known for its innovative sportswear and iconic sneakers, offering style and performance.',
      price: 20.99,
      image: 'addidas.jpg',
    },
    {
      id: 4,
      name: 'Corcs ',
      description: 'Crocs: Renowned for their comfortable and lightweight footwear',
      price: 25.99,
      image: 'crocs.jpeg',
    },
    {
      id: 5,
      name: 'DC Shoe',
      description: 'DC Shoes: Known for their skateboarding footwear and apparel, featuring durable and stylish designs',
      price: 30.99,
      image: 'dcshoes.jpg',
    },
  ];

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAddToCart = (product) => {
    addToCart(product, quantity);
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  return (
    <div>
      <h2 align ="center">Product List</h2>
      <div className="product-list-container">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
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
