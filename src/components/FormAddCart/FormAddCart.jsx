import React from "react";
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";
import "../../styles/_FormAddCart.scss";

function FormAddCart({ idProduct, addCart, setOpenModal, setOpenModalCart }) {
  const [success, setSucess] = React.useState(false);
  const [error, setError] = React.useState(false);

  const onSubmitAddCart = (event) => {
    const quantity = Number(document.getElementById("quantity").value);
    event.preventDefault();
    if (quantity !== "") {
      addCart(idProduct, quantity);
      setSucess(true);
      setTimeout(() => {
        setSucess(false);
      }, 5000);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };

  const onClickOpenCart = () => {
    setOpenModal(false);
    setOpenModalCart(true);
  };

  return (
    <form onSubmit={onSubmitAddCart}>
      <label className="form__label">Quantity:</label>
      <input
        type="number"
        className="form__input"
        id="quantity"
        placeholder="0"
        min="1"
      ></input>
      <button type="submit" className="form__button button-primary">
        <FaCartPlus className="button-icon" />
        Add to Cart
      </button>
      <button
        type="button"
        className="form__button button-primary"
        onClick={onClickOpenCart}
      >
        <FaShoppingCart className="button-icon" />
        Cart
      </button>
      {success && <p className="success">product added to cart!</p>}
      {error && <p className="danger">quantity cannot be empty!</p>}
    </form>
  );
}

export { FormAddCart };
