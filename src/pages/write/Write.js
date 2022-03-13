import React from "react";
import "./write.css";

function Write() {
  return (
    <div className="write">
      <img src="/images/postImg.jpeg" alt="" className="writeImg" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="formFile">
            <i className="writeFormGroupIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="formFile" style={{ display: "none" }} />
          <input
            className="writeFormInput"
            type="text"
            placeholder="Title"
            autoFocus="true"
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeFormInput writeFormText"
            placeholder="Tell your story..."
          ></textarea>
        </div>
        <button className="writeFormSubmit">Publish</button>
      </form>
    </div>
  );
}

export default Write;
