import React from "react";
import "./RightUpper.css";
import { ImNotification } from "react-icons/im";

function RightUpper() {
  return (
    <>
      <div className="rightUpperMainDiv">
        <div className="rightUppeLogoDiv">
          <div className="rightUppeLogo">9</div>
          <div className="rightUppeLogoText">9GAG: Go Fun The World</div>
        </div>
        <div className="rightUppeFollowerDiv">
          <div style={{ border: "none" }} className="rightUppeFollowerFirstDiv">
            <div className="rightUppeFollowerFirstDivHeading">58.2k</div>
            <div className="rightUppeFollowerFirstDivSubHeading">Followers</div>
          </div>
          <div className="rightUppeFollowerFirstDiv">
            <div className="rightUppeFollowerFirstDivHeading">0.461%</div>
            <div className="rightUppeFollowerFirstDivSubHeading">
              Engagaement Rate
            </div>
          </div>
        </div>
        {/* score board */}
        <div
          style={{ border: "none" }}
          className="rightUppeFollowerDiv rightUppeScoreDiv"
        >
          <div style={{ border: "none" }} className="rightUppeFollowerFirstDiv">
            <div className="rightUppeScoreFirstDivHeading">9.0</div>
            <div className="rightUppeFollowerFirstDivSubHeading">SB Score</div>
          </div>
          <div style={{ border: "none" }} className="rightUppeFollowerFirstDiv">
            <div className="rightUppeScoreSecondDivHeading">8.2</div>
            <div className="rightUppeFollowerFirstDivSubHeading">
              Consistency Score &nbsp;
              <span>
                <ImNotification />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightUpper;
