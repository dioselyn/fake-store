import React from "react";
import ReactDOM from "react-dom";
import "../../styles/_Modal.scss";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__background">
        <div className="modal__content">{children}</div>
      </div>
    </div>,
    document.getElementById("modal-product")
  );
}

export { Modal };
