import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "../../styles/_LinkCart.scss";

function LinkCart({ setOpenModalCart, totalItems }) {
  const onClickCloseModal = () => {
    setOpenModalCart(true);
  };

  return (
    <div className="link-cart__content">
      <FaShoppingCart className="link-cart__icon" onClick={onClickCloseModal} />
      <span className="link-cart__span">{totalItems}</span>
    </div>
  );
}

export { LinkCart };
