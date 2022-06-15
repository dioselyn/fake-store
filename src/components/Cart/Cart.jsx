import React from "react";
import { MdClose } from "react-icons/md";
import formatPrice from "../../utils/formatPrice";
import "../../styles/_Cart.scss";

function Cart({
  setOpenModalCart,
  children,
  onEmptyCart,
  totalItems,
  totalPrice,
  onBuyCart,
}) {
  const onClickCloseModal = () => {
    setOpenModalCart(false);
  };
  return (
    <React.Fragment>
      <div className="cart__container">
        <MdClose className="modal__close" onClick={onClickCloseModal} />
        <h3 className="cart__title">My Cart</h3>
        <div className="cart__total">
          <p>{totalItems} articles</p>
          <p>{formatPrice(totalPrice)}</p>
        </div>
        {!totalItems && onEmptyCart()}
        {children}
        {totalItems > 0 && onBuyCart()}
      </div>
    </React.Fragment>
  );
}

export { Cart };
