import React from "react";
import { Link } from "react-router-dom";
import "./topBar.css";

function TopBar() {
  const user = false;
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
          <li className="topBarListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topBarListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topBarListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topBarListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topBarListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topBarRight">
        {user ? (
          <img className="topBarImg" src="/images/logo.jpeg" alt="" />
        ) : (
          <ul className="topBarList">
            <li className="topBarListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topBarListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topBarImgIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default TopBar;
