import React from "react";
import "./Body.css";
import LeftUpper from "../Left/Upper/LeftUpper";
import LeftLower from "../Left/Lower/LeftLower";
import RightUpper from "../Right/Upper/RightUpper";
import RightLower from "../Right/Lower/RightLower";
function Body() {
  return (
    <>
      <div className="bodyMainDiv">
        {/* right */}
        <div className="bodyRigthDiv">
          <RightUpper />
          <RightLower />
        </div>

        {/* centre */}
        <div className="bodyCentreDiv"></div>

        {/* left */}
        <div className="bodyLeftDiv">
          <LeftUpper />
          <LeftLower />
        </div>
      </div>
    </>
  );
}

export default Body;
