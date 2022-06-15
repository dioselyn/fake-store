import React from "react";
import "../../styles/_ProductDetail.scss";
import formatPrice from "../../utils/formatPrice";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";

function ProductDetail({ product, rate, children }) {
  return (
    <React.Fragment>
      <div className="product-detail__content product-detail__content--image">
        <img className="product-detail__image" src={product.image} />
        <p className="product-detail__badge">{product.category}</p>
      </div>
      <div className="product-detail__content product-detail__content--detail">
        <h3 className="product-detail__title">{product.title}</h3>
        <p className="product-detail__price">
          <span>Price:</span> {formatPrice(product.price)}
        </p>
        <p className="product-detail__description text-justify">
          {product.description}.
        </p>
        <Rating
          initialRating={rate}
          readonly
          emptySymbol={<FaStar className="rating__icon--grey" />}
          fullSymbol={<FaStar className="rating__icon--yellow" />}
        />
        <hr></hr>
        {children}
      </div>
    </React.Fragment>
  );
}

export { ProductDetail };
