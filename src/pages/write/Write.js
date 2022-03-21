import axios from "../../axios";
import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import "./write.css";

function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <div className="write">
      {file && (
        <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
      )}

      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="formFile">
            <i className="writeFormGroupIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            id="formFile"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ display: "none" }}
          />
          <input
            className="writeFormInput"
            type="text"
            placeholder="Title"
            autoFocus="true"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeFormInput writeFormText"
            placeholder="Tell your story..."
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeFormSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;
