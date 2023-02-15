import React from "react";
import "./Body.css";
import Chart from "react-apexcharts";
import LeftUpper from "../Left/Upper/LeftUpper";
import LeftLower from "../Left/Lower/LeftLower";
import RightUpper from "../Right/Upper/RightUpper";
import RightLower from "../Right/Lower/RightLower";
function Body() {
  const options = {
    series: [53, 48],
    labels: ["Female", "Male"],
    colors: ["#ff9c66", "#ff5902"],
  };
  return (
    <>
      <div className="bodyMainDiv">
        {/* right */}
        <div className="bodyRigthDiv">
          <RightUpper />
          <RightLower />
        </div>

        {/* centre */}
        <div className="bodyCentreDiv">
          <Chart
            options={options}
            series={options.series}
            type="pie"
            width="100%"
          />
        </div>

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
