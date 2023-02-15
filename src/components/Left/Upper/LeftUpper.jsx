import React from "react";
import "./LeftUpper.css";
import { SlSocialInstagram } from "react-icons/sl";
import { RxAvatar } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
function LeftUpper() {
  let arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <div className="leftUpperMainDiv">
        <div className="leftUpperHeadingDiv">
          <div className="leftUpperHeadingImage">
            <SlSocialInstagram />
          </div>
          <div className="leftUpperHeading"> Notable Followers</div>
        </div>
        {arr.map((elem) => {
          return (
            <div key={elem} className="leftUpperCentreDiv">
              <div className="leftUpperInsideCentreDiv">
                <div>
                  <RxAvatar className="leftUpperInsideCentreDivImageStyle" />
                </div>
                <div className="leftUpperInsideCentreDivCentreText">
                  <div className="leftUpperInsideCentreDivCentreTextHeading">
                    Emily Cooper
                  </div>
                  <div className="leftUpperInsideCentreDivCentreTextSubHeading">
                    175.914m
                  </div>
                </div>
                <div className="leftUpperInsideCentreDivLastText">View</div>
              </div>
            </div>
          );
        })}
        <div className="leftUpperLastDiv">
          <div className="leftUpperLastDivText">View All</div>
          <div className="leftUpperLastDivImageDiv">
            <RiArrowDropDownLine className="leftUpperLastDivImage" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftUpper;
