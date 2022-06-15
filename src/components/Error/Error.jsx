import React from "react";
import { MdSentimentVeryDissatisfied } from "react-icons/md";

function Error({ error }) {
  return (
    <div>
      <p className="danger text-center">Ups!. There is error {error}...</p>
      <div className="center">
        <MdSentimentVeryDissatisfied className="danger purchase__icon" />
      </div>
    </div>
  );
}

export { Error };
