import React from "react";
import "./Popular.css";
import { BsFillFilePostFill } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
function Popular() {
  return (
    <>
      <div className="popularMainDiv">
        <div className="popularMainHeadingDiv">
          <div>
            <BsFillFilePostFill className="popularMainHeadingDivImage" />
          </div>
          <div className="popularMainHeadingDivText">Popular Posts</div>
        </div>
        {/* image div */}

        <div className="popularMainImageDiv">
          <div className="popularMainImageFirstDiv">
            <div className="popularMainImageFirstDivImage">
              <img
                src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__480.jpg"
                alt="nature"
              />
            </div>
            <div className="popularMainImageFirstTextDiv">
              <div className="popularMainImageFirstTextDivFirst">
                <div className="likeDiv">
                  <span>
                    <AiFillHeart className="heart" />
                  </span>
                  <span>876.87K</span>
                </div>
                <div className="likeDiv">
                  <span>
                    <BiCommentDetail className="comment" />
                  </span>
                  <span>5,208K</span>
                </div>
              </div>
              <div className="popularMainImageFirstTextDivSecond">
                Sep 23 ,2022
              </div>
              <div className="popularMainImageFirstTextDivThird">
                <span style={{ fontWeight: "500" }}>berloapp</span> New Book
                Leave a comment and we'll DM you the download link (but only if
                like getting hyundreds of stor visitors without paying a penny)
              </div>
            </div>
          </div>

          {/* second */}
          <div className="popularMainImageFirstDiv">
            <div className="popularMainImageFirstDivImage">
              <img
                src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__480.jpg"
                alt="nature"
              />
            </div>
            <div className="popularMainImageFirstTextDiv">
              <div className="popularMainImageFirstTextDivFirst">
                <div className="likeDiv">
                  <span>
                    <AiFillHeart className="heart" />
                  </span>
                  <span>876.87K</span>
                </div>
                <div className="likeDiv">
                  <span>
                    <BiCommentDetail className="comment" />
                  </span>
                  <span>5,208K</span>
                </div>
              </div>
              <div className="popularMainImageFirstTextDivSecond">
                Sep 23 ,2022
              </div>
              <div className="popularMainImageFirstTextDivThird">
                <span style={{ fontWeight: "500" }}>berloapp</span> New Book
                Leave a comment and we'll DM you the download link (but only if
                like getting hyundreds of stor visitors without paying a penny)
              </div>
            </div>
          </div>

          {/* third */}
          <div className="popularMainImageFirstDiv">
            <div className="popularMainImageFirstDivImage">
              <img
                src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__480.jpg"
                alt="nature"
              />
            </div>
            <div className="popularMainImageFirstTextDiv">
              <div className="popularMainImageFirstTextDivFirst">
                <div className="likeDiv">
                  <span>
                    <AiFillHeart className="heart" />
                  </span>
                  <span>876.87K</span>
                </div>
                <div className="likeDiv">
                  <span>
                    <BiCommentDetail className="comment" />
                  </span>
                  <span>5,208K</span>
                </div>
              </div>
              <div className="popularMainImageFirstTextDivSecond">
                Sep 23 ,2022
              </div>
              <div className="popularMainImageFirstTextDivThird">
                <span style={{ fontWeight: "500" }}>berloapp</span> New Book
                Leave a comment and we'll DM you the download link (but only if
                like getting hyundreds of stor visitors without paying a penny)
              </div>
            </div>
          </div>
        </div>

        {/* view All */}
        <div className="popularViewAll">View All</div>
      </div>
    </>
  );
}

export default Popular;
