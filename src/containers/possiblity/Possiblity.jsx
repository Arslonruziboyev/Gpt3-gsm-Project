import React from "react";
import "./possiblity.css";
import possiblityImage from "../../assets/possibility.png";

const Possiblity = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possiblityImage} alt="Possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">
          <h4>Request Early Access to Get Started</h4>
          The possibilities are <br /> beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possiblity;
