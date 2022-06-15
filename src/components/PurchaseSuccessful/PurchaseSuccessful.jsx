import React from "react";
import { MdClose, MdCheckCircleOutline } from "react-icons/md";
import "../../styles/_PurchaseSuccessful.scss";

function PurchaseSuccessful({ buyer, setOpenModalSuccess }) {
  const onClickCloseModal = () => {
    setOpenModalSuccess(false);
  };

  return (
    <div className="purchase-successful__container">
      <MdClose className="modal__close" onClick={onClickCloseModal} />
      <h2 className="text-center">Congratulations</h2>
      <h2 className="text-center">{buyer.name}</h2>
      <h3 className="text-center">Your purchase has been successful</h3>
      <MdCheckCircleOutline className="purchase__icon success" />
    </div>
  );
}

export { PurchaseSuccessful };
