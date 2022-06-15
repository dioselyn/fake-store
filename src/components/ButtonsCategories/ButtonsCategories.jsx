import React from "react";
import "../../styles/_ButtonsCategories.scss";

function ButtonsCategories({ category, index, setFilterValue }) {
  const onClickCategory = (event) => {
    const value = event.target.id;
    setFilterValue(value);
  };

  return (
    <li key={index} className="buttons-categories__link">
      <a
        id={category}
        onClick={onClickCategory}
        className="buttons-categories__anchor"
      >
        {category}
      </a>
    </li>
  );
}

export { ButtonsCategories };
