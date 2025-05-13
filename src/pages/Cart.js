import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/Cart.css";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmitOrder = () => {
    alert("Order submitted!");
    clearCart(); 
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cartItems">
            {cartItems.map((item, index) => (
              <div className="cartItem" key={index}>
                <div
                  className="cartItemImage"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="cartItemDetails">
                  <h2>{item.name}</h2>
                  <p>Price: ${item.price}</p>
                  <div className="quantityControl">
                    <button onClick={() => decreaseQuantity(item.name)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.name)}>+</button>
                  </div>
                  <p>Subtotal: ${item.price * item.quantity}</p>
                  <button
                    className="removeBtn"
                    onClick={() => removeFromCart(item.name)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cartTotal">
            <h2>Total: ${totalPrice}</h2>
            <button className="submitOrderBtn" onClick={handleSubmitOrder}>
              Submit Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
