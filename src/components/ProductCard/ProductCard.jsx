import React from "react";
import icon from "../../assets/icons/bt_add_to_cart.svg";
import formatPrice from "../../utils/formatPrice";
import "../../styles/_ProductCard.scss";

function ProductCard({ product, index, setOpenModal, getDataProduct }) {
  const onClickOpenModal = (event) => {
    getDataProduct(event.target.id);
    setOpenModal(true);
  };

  return (
    <React.Fragment>
      <div className="product-card__card" key={index}>
        <aside className="card__detail">
          <img className="card__img" src={product.image} alt="Crocodile" />
          <span className="card__badge">{product.category}</span>
          <div className="card-detail__info">
            <p className="card__price">{formatPrice(product.price)}</p>
            <a
              onClick={onClickOpenModal}
              id={product.id}
              className="card__title"
            >
              {product.title}
            </a>
            <p className="card__description">{product.description}</p>
            <div className="card__button">
              <button className="button__icon">
                <img
                  src={icon}
                  id={product.id}
                  alt="add to cart"
                  title="add to cart"
                  onClick={onClickOpenModal}
                />
              </button>
            </div>
          </div>
        </aside>
      </div>
    </React.Fragment>
  );
}

export { ProductCard };
