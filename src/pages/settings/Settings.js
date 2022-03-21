import axios from "../../axios";
import React, { useContext, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Context } from "../../context/Context";
import "./settings.css";

function Settings() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const { user, dispatch } = useContext(Context);
  const [updated, setUpdated] = useState(false);
  const PF = "http://localhost:8000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: " UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      setUpdated(true);
    } catch (err) {}
  };

  return (
    <div className="settings">
      <div className="settingsWrap">
        <div className="settingsTitle">
          <span className="settingsUpdate">Update Your Account</span>
          <span className="settingsDelete">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsProfileP">
            {file ? (
              <img
                className="settingsProfileImg"
                src={URL.createObjectURL(file)}
                alt=""
              />
            ) : (
              <img
                className="settingsProfileImg"
                src={PF + user.profilePic}
                alt=""
              />
            )}
            <label htmlFor="formIcon">
              <i className="settingsProfileIcon fa-solid fa-circle-user"></i>
            </label>
            <input
              id="formIcon"
              type="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            value={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsButton" type="submit">
            Update
          </button>
          {updated && (
            <span
              style={{
                color: "green",
                marginTop: "10px",
                alignSelf: "center",
              }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
