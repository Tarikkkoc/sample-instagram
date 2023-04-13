import React, { useState } from "react";
import Group8 from "../img/Group 8.svg";
import LikesBar from "./LikesBar";
import Comment from "./Comment";
import LikedBar from "./LikedBar";
import { Link } from "react-router-dom";
import { getCommentByPostId } from "../../libs/getCommentByPostId";

const Post = ({ post }) => {
  const comments = getCommentByPostId(post.postId);
  const [showComment, setShowComment] = useState(false);

  return (
    <div className="bg-white w-full h-auto rounded-3xl p-4 flex flex-col gap-3">
      <div className="w-full flex flex-row">
        <div className="w-12 flex-none">
          <Link to={() => `/profile/${post.username}`}>
            <img
              className="rounded-full h-12 w-12 cursor-pointer"
              src={post.avatar}
              alt=""
            />
          </Link>
        </div>
        <div className="grow pl-3">
          <div className="cursor-pointer">
            <Link to={() => `/profile/${post.username}`}>
              <strong>{post.username}</strong>
            </Link>
          </div>
          <div>{post.location}</div>
        </div>
        <div className="w-8 flex-none cursor-pointer">
          <img className="pt-3" src={Group8} alt="" />
        </div>
      </div>
      <div className="w-full h-auto">
        <img
          className="w-full h-auto rounded-2xl outline-none"
          src={post.post[0]}
          alt=""
        />
      </div>
      <LikesBar likeCount={post.likes.length} commentCount={comments.length} />
      <LikedBar onClick={() => setShowComment(true)} />
      {showComment && <Comment comments={comments} />}
    </div>
  );
};
export default Post;
