import React, { useEffect, useRef } from "react";
import "./AgeSplit.css";
import { IoPersonOutline } from "react-icons/io5";
import { RxDotFilled } from "react-icons/rx";
import Chart from "react-apexcharts";

function AgeSplit() {
  const pieChartRef = useRef(null);
  const options = {
    series: [52, 48],
    labels: ["Female", "Male"],
    colors: ["#ff5902", "#ff9c66"],
  };
  const option = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["13-17", "18-24", "25-34", "34-44", "45-64", "65-70"],
    },
    theme: {
      monochrome: {
        enabled: true,
        color: "#ff9c66",
        shadeTo: "light",
        shadeIntensity: 0.65,
      },
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
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "series-1",
        data: [5, 12, 34, 17, 9, 2],
      },
    ],
  };
  //   #ff9c66
  //   #ff5902
  useEffect(() => {
    var control =
      pieChartRef.current.children[0].children[0].children[0].children[0]
        .children[0];
    control.style.display = "none";
  }, []);

  return (
    <>
      <div className="ageSplitMainDiv">
        <div className="ageSplitPieChartDiv">
          <div className="ageSplitPieChartDivHeadingDiv">
            <div>
              <IoPersonOutline className="ageSplitPieChartDivHeadingImage" />
            </div>
            <div className="ageSplitPieChartDivHeading">Audience Age Split</div>
          </div>
          <div ref={pieChartRef} className="ageSplitPieChart">
            <Chart
              options={options}
              series={options.series}
              type="pie"
              width="130%"
            />
          </div>
          <div className="ageSplitPieChartLabel">
            <div className="pieChartDotDiv">
              <span>
                <RxDotFilled className="pieChartDot" />
              </span>
              <span>Male</span>
            </div>
            <div className="pieChartDotDiv">
              <span>
                <RxDotFilled className="pieChartDotFemale" />
              </span>
              <span>Female</span>
            </div>
          </div>
        </div>

        <div className="ageSplitBarChartDiv">
          <div className="ageSplitBarChartHeadingDiv">
            <div className="ageSplitBarChartDivHeadingDiv">
              <div>
                <IoPersonOutline className="ageSplitPieChartDivHeadingImage" />
              </div>
              <div className="ageSplitPieChartDivHeading">
                Audience Age Groups
              </div>
            </div>
            <div className="pieChartDotDiv">
              <span>
                <RxDotFilled className="pieChartDot" />
              </span>
              <span>Age Groups</span>
            </div>
          </div>

          <Chart
            className="barchart"
            options={option}
            series={option.series}
            type="bar"
          />
        </div>
      </div>
    </>
  );
}

export default AgeSplit;
