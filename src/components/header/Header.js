import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <div className="headerBlogImg">
        <img className="headerImg" src="/images/bg.jpg" alt="" />
      </div>
    </div>
  );
}

export default Header;
