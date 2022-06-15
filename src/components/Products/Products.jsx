import React from "react";
import "../../styles/_Products.scss";

function Products(props) {
  return (
    <React.Fragment>
      {props.loading && props.onLoading()}
      {!props.error && props.onError()}
      {!props.loading && <div className="products">{props.children}</div>}
    </React.Fragment>
  );
}

export { Products };
