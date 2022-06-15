import React from "react";
import "../../styles/_FilterCategories.scss";

function FilterCategories({ children }) {
  return (
    <div className="filter-categories">
      <nav>
        <ul>{children}</ul>
      </nav>
    </div>
  );
}

export { FilterCategories };
