import React from "react";
import "./singlePost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrap">
        <img src="/images/postImg.jpeg" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Sanjiv</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quod, in
          deserunt minus ab suscipit incidunt aspernatur obcaecati. Non facere
          error quia omnis ut, soluta rerum ea quo est iste. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Ab quibusdam, autem vero eum
          possimus corporis? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Officia earum architecto vero aliquid alias quas fuga dicta sit
          accusamus, totam, tempore quos itaque. Excepturi, quas voluptate
          quidem facilis quos aut? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Laboriosam quasi dicta rem, fugit omnis nihil. Totam
          natus dolor expedita blanditiis aperiam, excepturi illo quod minima.
          Voluptatibus voluptatem incidunt sunt impedit cumque recusandae ex sed
          eveniet, accusantium veritatis officiis excepturi cum earum dolorum
          ab, ipsum, rerum molestias voluptatum. Expedita, culpa beatae.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
