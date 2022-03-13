import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrap">
        <div className="settingsTitle">
          <span className="settingsUpdate">Update Your Account</span>
          <span className="settingsDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsProfileP">
            <img
              className="settingsProfileImg"
              src="/images/postImg.jpeg"
              alt=""
            />
            <label htmlFor="formIcon">
              <i className="settingsProfileIcon fa-solid fa-circle-user"></i>
            </label>
            <input id="formIcon" type="file" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Sanjiv" />
          <label>Email</label>
          <input type="email" placeholder="sanjiv@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsButton">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
