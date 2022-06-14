import React from "react";
import Cards from "../Collection/Cards";
import BootCard from "../BootCard/BootCard";

function UserWords(props) {
  const { userWords } = props;

  const words = userWords.map((word, index) => {
    return (
      <span key={index} className="col-sm">
        <BootCard word={word} />
      </span>
    );
  });

  return (
    <div className="container">
      <div className="row">{words}</div>
    </div>
  );
}

export default UserWords;
