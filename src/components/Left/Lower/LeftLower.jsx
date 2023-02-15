import React from "react";
import "./LeftLower.css";

function LeftLower() {
  return (
    <>
      <div className="leftLowerMainDiv">
        <div className="leftLowerMainSubDiv">
          <div className="leftLowerMainSubDivLeft">23</div>
          <div className="leftLowerMainSubDivRight">
            <div className="leftLowerMainSubDivRightHeding">
              Paid Post Performance
            </div>
            <div className="leftLowerMainSubDivRightSubHeading">
              This tells about how consistent you are with your content
            </div>
          </div>
        </div>
        <div className="leftLowerMainBorderLine"></div>
        {/* last one */}
        <div style={{ border: "none" }} className="leftLowerMainSubDiv">
          <div className="leftLowerMainSubDivSecondLeft">3.0</div>
          <div className="leftLowerMainSubDivRight">
            <div className="leftLowerMainSubDivRightHeding">
              Acceptance Score
            </div>
            <div className="leftLowerMainSubDivRightSubHeading">
              This tells about how consistent you are with your content
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftLower;

// flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-teal-600 dark:text-teal-100 bg-teal-100 dark:bg-teal-500
