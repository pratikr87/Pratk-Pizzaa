import React from "react";
import { useCart } from "../context/CartContext";

function MenuItem({ image, name, price }) {
  const {
    addToCart,
    removeFromCart,
    isInCart,
    increaseQuantity,
    decreaseQuantity,
    getQuantity,
  } = useCart();

  const inCart = isInCart(name);
  const quantity = getQuantity(name);

  return (
    <div className="menuItem">
      <div
        className="menuItemImage"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h1>{name}</h1>
      <p>${price}</p>

      {!inCart ? (
        <button className="addBtn" onClick={() => addToCart({ name, price, image })}>
          Add to Cart
        </button>
      ) : (
        <div className="quantityControls">
          <button className="qtyBtn" onClick={() => decreaseQuantity(name)}>-</button>
          <span className="qtyDisplay">{quantity}</span>
          <button className="qtyBtn" onClick={() => increaseQuantity(name)}>+</button>
          <button className="removeBtn" onClick={() => removeFromCart(name)}>
            Remove
          </button>
        </div>
      )}
    </div>
  );
}

export default MenuItem;
