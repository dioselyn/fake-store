import React from "react";
import formatPrice from "../../utils/formatPrice";
import "../../styles/_ItemCart.scss";

function ItemCart({ item, index }) {
  return (
    <div className="cart__product" key={index}>
      <img src={item.image} className="cart__image"></img>
      <p className="cart__description">
        {item.quantity} {item.title}
      </p>
      <p className="cart__price">{formatPrice(item.subtotal)}</p>
    </div>
  );
}

export { ItemCart };
