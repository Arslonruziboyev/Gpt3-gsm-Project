import React from "react";
import "./possiblity.css";
import possiblityImage from "../../assets/possibility.png";

const Possiblity = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possiblityImage} alt="Possibility" />
      </div>
    </div>
  );
};

export default Possiblity;
