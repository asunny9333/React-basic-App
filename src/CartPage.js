import React from 'react';
import './cart.css';

const CartPage = ({ cartItems, updateQuantity, removeFromCart, finalizePurchase, products }) => {
  const handleFinalizePurchase = () => {
    alert('Thank you for purchasing!');
  };

  return (
    <div className="cart-page">
      <h2 align="center">Cart</h2>
      {cartItems && cartItems.length === 0 ? (
        <p align="center">Your cart is empty.</p>
      ) : (
        <div className="cart-items" align="center">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} style={{ width: '200px', height: '200px' }} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item, e.target.value)}
                  min={1}
                  style={{ marginRight: '10px' }}
                />
                <button onClick={() => removeFromCart(item)}>Remove</button>
                
                {products && products.find((product) => product.id === item.id) ? (
                  <p></p>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Render the "Buy Now" button only if the cart is not empty */}
      {cartItems.length > 0 && (
        <div className="finalize-purchase" style={{ textAlign: 'center' }}>
          <button align="center" className='buynow' onClick={handleFinalizePurchase}>Buy Now</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
