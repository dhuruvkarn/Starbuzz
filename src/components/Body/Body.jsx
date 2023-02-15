import React from "react";
import "./Body.css";
import LeftUpper from "../Left/Upper/LeftUpper";
import LeftLower from "../Left/Lower/LeftLower";
function Body() {
  return (
    <>
      <div className="bodyMainDiv">
        <div className="bodyRigthDiv"></div>
        <div className="bodyCentreDiv"></div>
        <div className="bodyLeftDiv">
          <LeftUpper />
          <LeftLower />
        </div>
      </div>
    </>
  );
}

export default Body;
