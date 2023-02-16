import React from "react";
import "./Audience.css";
import Chart from "react-apexcharts";
import { RiBuildingLine } from "react-icons/ri";

function Audience() {
  var options = {
    series: [
      {
        data: [10, 20, 30, 40, 50],
      },
      {
        data: [7, 10, 20, 30, 40],
      },
    ],

    theme: {
      monochrome: {
        enabled: true,
        color: "#ff5902",
        shadeTo: "light",
        shadeIntensity: 0.65,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
      colors: ["#ff9c66"],
    },
    xaxis: {
      categories: ["Mexixo City", "London", "Hong Kong", "Istanbul", "Jakarta"],
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  };
  return (
    <>
      <div className="audienceMainDiv">
        <div className="audienceLeftMainDiv">
          <div className="audienceLeftMainDivHeading">
            <span>
              <RiBuildingLine className="buildingImage" />
            </span>
            <span>Audience By City</span>
          </div>
          <div className="audienceLeftMainDivChart">
            <Chart options={options} series={options.series} type="bar" />
          </div>
        </div>

        {/* right */}
        <div className="audienceLeftMainDiv">
          <div className="audienceLeftMainDivHeading">
            <span>
              <RiBuildingLine className="buildingImage" />
            </span>
            <span>Audience By Country</span>
          </div>
          <div className="audienceLeftMainDivChart">
            <Chart options={options} series={options.series} type="bar" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Audience;
