import React from "react";
import "./RightLower.css";
import { BsChatRightTextFill, BsHeartFill } from "react-icons/bs";

function RightLower() {
  return (
    <>
      <div className="rightLowerAudienceCredibilityMainDiv">
        <div className="rightLowerAudienceCredibilityMainDivHeading">
          Audience Credibility
        </div>
        <div className="rightLowerAudienceCredibilityScoreDiv">
          <div className="rightLowerAudienceCredibilityScore">9.0</div>
          <div className="rightLowerAudienceCredibilityScoreText">
            This tells about how consistent you are with your content
          </div>
        </div>

        <div className="rightLowerLikeDiv">
          <div style={{ border: "none" }} className="rightLowerLike">
            <div>
              <BsChatRightTextFill />
            </div>
            <div className="rightLowerLikeHeading">1.403k</div>
            <div className="rightLowerLikeSubHeading">Avg. Comments</div>
          </div>
          <div className="rightLowerLike">
            <div>
              <BsHeartFill />
            </div>
            <div className="rightLowerLikeHeading">267.445k</div>
            <div className="rightLowerLikeSubHeading">Avg. Likes</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightLower;
