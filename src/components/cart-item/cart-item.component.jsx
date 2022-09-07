import React from "react";
import { CartItemContainer, ItemDetails } from "./cart-item.style.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          Price : {quantity} X ${price}
        </span>
        <span className="quantity">Quantity : {quantity}</span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
