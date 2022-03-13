import React from "react";
import "./post.css";

function Post() {
  return (
    <div className="post">
      <img src="/images/postImg.jpeg" alt="" className="postImg" />
      <div className="postInfo">
        <div className="postInfoCats">
          <span className="postInfoCat">Life</span>
          <span className="postInfoCat">Style</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorum
        eius aliquam optio tempora suscipit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Architecto dolore sapiente doloremque,
        numquam minus beatae! Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Iusto non porro animi nulla recusandae cupiditate.
      </p>
    </div>
  );
}

export default Post;
