import React from "react";

function ButtonBuyCart({ setOpenModalPurchase, setOpenModalCart }) {
  const onClickBuy = () => {
    setOpenModalCart(false);
    setOpenModalPurchase(true);
  };

  return (
    <button className="button-secondary" onClick={onClickBuy}>
      Buy
    </button>
  );
}

export { ButtonBuyCart };
