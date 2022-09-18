import React from "react";
import { useState } from "react";

const ResultCard = (props) => {
  const { company } = props;
  const [btnState, setBtnState] = useState(false);
  const toggle = () => {
    setBtnState(!btnState);
    var date = Date();
    if (btnState === false)
      console.log(`${company.company} (${company.slug}) tracked at ${date}`);
  };

  return (
    <div className="ResultCard">
      <div className="resultImg">
        {company.logo ? (
          <img src={company.logo} alt="logo" /> //Ive use a bg image for logo as the links are not accessible, access is denied
        ) : (
          <div className="placeImg">
            <p>H</p>
          </div>
        )}
      </div>
      <div className="resultInfo">
        <h4 style={{ fontSize: "16x" }}>{company.company}</h4>
        <p style={{ fontSize: "12px", color: "grey" }}>{company.website}</p>
      </div>
      <div className="resultButton">
        <button
          className={"resultBtn " + (btnState ? "tracking" : "")}
          onClick={toggle}
        >
          {btnState ? "Tracking" : "Track"}
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
