import React from "react";
import { MdClose } from "react-icons/md";
import "../../styles/_ProductDetailContainer.scss";

function ProductDetailContainer(props) {
  const onClickCloseModal = () => {
    props.setOpenModal(false);
  };
  return (
    <div className="product-detail__container">
      <MdClose className="modal__close" onClick={onClickCloseModal} />
      {props.loadingProduct && props.onLoading()}
      {!props.loadingProduct && props.children}
    </div>
  );
}

export { ProductDetailContainer };
