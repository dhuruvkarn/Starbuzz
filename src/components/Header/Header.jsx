import React from "react";
import "./Header.css";
import { RxAvatar } from "react-icons/rx";
import { FiSettings } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
function Header() {
  return (
    <>
      <div className="mainDiv">
        <div className="leftDiv">9GAG Inc.</div>
        <div className="rightDiv">
          <div className="notifyimage">
            <IoMdNotificationsOutline className="imageStyle" />
          </div>
          <div className="avatarimage">
            <RxAvatar className="imageStyle" />
          </div>
          <div className="settingimage">
            <FiSettings className="imageStyle" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
