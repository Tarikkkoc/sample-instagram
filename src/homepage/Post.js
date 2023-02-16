import React from "react";
import Group8 from "./img/Group 8.svg";
import LikesBar from "./LikesBar";
import LikedBar from "./LikedBar";

const Post = (props) => {
  return (
    <div className="bg-white w-full h-auto rounded-3xl p-4 flex flex-col gap-3">
      <div className="w-full flex flex-row">
        <div className="w-12 flex-none">
          <img
            className="rounded-full h-12 w-12 cursor-pointer"
            src={props.avatar}
            alt=""
          />
        </div>
        <div className="grow pl-3">
          <div className="cursor-pointer">
            <strong>{props.username}</strong>
          </div>
          <div>{props.location}</div>
        </div>
        <div className="w-8 flex-none cursor-pointer">
          <img className="pt-3" src={Group8} alt="" />
        </div>
      </div>
      <div className="w-full h-auto">
        <img
          className="w-full h-auto rounded-2xl outline-none"
          src={props.post}
          alt=""
        />
      </div>
      <LikesBar likeCount={props.likeCount} commentCount={props.commentCount} />
      <LikedBar />
    </div>
  );
};
export default Post;
