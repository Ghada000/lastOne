import React from 'react';
import '../App.css'

function Cart({ cartItems, handleRemoveFromCart, handleBuy }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <button onClick={handleBuy}>Buy Now</button>
    </div>
  );
}

export default Cart;
