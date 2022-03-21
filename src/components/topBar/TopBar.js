import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topBar.css";

function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:8000/images/";

  const handleClick = () => {
    dispatch({ type: "LOGOUT" });
  };

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
          {user && (
            <li className="topBarListItem" onClick={handleClick}>
              LOGOUT
            </li>
          )}
        </ul>
      </div>
      <div className="topBarRight">
        {user ? (
          <Link to="/settings">
            <img className="topBarImg" src={PF + user.profilePic} alt="" />
          </Link>
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
