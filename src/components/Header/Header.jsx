import React from "react";
import "../../styles/_Header.scss";

function Header({ loading, children }) {
  return (
    <header className={`header ${!!loading && "loading"}`}>{children}</header>
  );
}

export { Header };
