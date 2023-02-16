import React from "react";
import "./MonthTrend.css";
import Chart from "react-apexcharts";
import { BsPerson } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function MonthTrend() {
  var options = {
    series: [
      {
        data: [
          52000000, 52500000, 53500000, 54000000, 54500000, 55500000, 56500000,
          54500000,
        ],
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    chart: {
      type: "area",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
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
    xaxis: {
      categories: [
        "2022-04",
        "2022-05",
        "2022-06",
        "2022-07",
        "2022-08",
        "2022-09",
        "2022-10",
        "2022-11",
        "2022-12",
      ],
    },

    theme: {
      monochrome: {
        enabled: true,
        color: "#ff5902",
        shadeTo: "light",
        shadeIntensity: 0.65,
      },
    },
    legend: {
      horizontalAlign: "right",
    },
  };

  return (
    <>
      <div className="genderMainDiv">
        <div className="genderMainHeadingDiv">
          <div className="genderMainHeadingLeftDiv">
            <div>
              <BsPerson className="genderMainHeadingLeftDivImage" />
            </div>
            <div className="genderMainHeadingLeftDivHeading">
              Followers Trends by Month
            </div>
          </div>
          <div className="genderMainHeadingRightDiv">
            <div className="genderMainHeadingRightImageDiv">
              <span>
                <RxDotFilled className="pieChartDotFemale" />
              </span>
              <span>Followers</span>
            </div>
          </div>
        </div>
        {/* chart */}
        <div className="genderMainChartDiv">
          <Chart options={options} series={options.series} type="area" />
        </div>
      </div>
    </>
  );
}

export default MonthTrend;
