import React from "react";
import "./Body.css";
import LeftUpper from "../Left/Upper/LeftUpper";
import LeftLower from "../Left/Lower/LeftLower";
import RightUpper from "../Right/Upper/RightUpper";
import RightLower from "../Right/Lower/RightLower";
import AgeSplit from "components/Chart/AgeSplit/AgeSplit";
import Audience from "components/Chart/Audience/Audience";
import Gender from "components/Chart/Gender/Gender";
import MonthTrend from "components/Chart/MonthTrend/MonthTrend";
import Popular from "components/Popular/Popular";

function Body() {
  return (
    <>
      <div className="bodyMainDiv">
        <div className="bodyRigthDiv">
          <RightUpper />
          <RightLower />
        </div>

        <div className="bodyCentreDiv">
          <MonthTrend />
          <Gender />
          <AgeSplit />
          <Audience />
          <Popular />
        </div>

        <div className="bodyLeftDiv">
          <LeftUpper />
          <LeftLower />
        </div>
      </div>
    </>
  );
}

export default Body;
