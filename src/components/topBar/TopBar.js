import React from "react";
import "./topBar.css";

function TopBar() {
  return (
    <div className="tobBar">
      <div className="topBarLeft">
        <i className="topBarIcon fa-brands fa-facebook-square"></i>
        <i className="topBarIcon fa-brands fa-instagram-square"></i>
        <i className="topBarIcon fa-brands fa-pinterest-square"></i>
        <i className="topBarIcon fa-brands fa-twitter-square"></i>
      </div>
      <div className="topBarCenter">
        <ul className="topBarList">
          <li className="topBarListItem">HOME</li>
          <li className="topBarListItem">ABOUT</li>
          <li className="topBarListItem">CONTACT</li>
          <li className="topBarListItem">WRITE</li>
          <li className="topBarListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topBarRight">
        <img className="topBarImg" src="/images/logo.jpeg" alt="" />
        <i className="topBarImgIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default TopBar;
