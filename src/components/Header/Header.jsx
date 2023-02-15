import React from "react";
import "./Header.css";
import { RxAvatar } from "react-icons/rx";
import { FiSettings } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
function Header() {
  return (
    <>
      <div className="headerMainDiv">
        <div className="headerLeftDiv">9GAG Inc.</div>
        <div className="headerRightDiv">
          <div className="headerNotifyimage">
            <IoMdNotificationsOutline className="headerImageStyle" />
          </div>
          <div className="headerAvatarimage">
            <RxAvatar className="headerImageStyle" />
          </div>
          <div className="headerSettingimage">
            <FiSettings className="headerImageStyle" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
