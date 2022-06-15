import React from "react";
import { MdClose } from "react-icons/md";
import formatPrice from "../../utils/formatPrice";
import "../../styles/_PreOrder.scss";

function PreOrder({ totalItems, totalPrice, setOpenModalPurchase, children }) {
  const onClickCloseModal = () => {
    setOpenModalPurchase(false);
  };

  return (
    <div className="preorder__container">
      <MdClose className="modal__close" onClick={onClickCloseModal} />
      <h2>Purchase Details</h2>
      <hr></hr>
      <h3>Articles: {totalItems}</h3>
      <h3>Total: {formatPrice(totalPrice)}</h3>
      <hr></hr>
      {children}
    </div>
  );
}

export { PreOrder };
