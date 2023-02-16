import React from "react";
import CamiliaPP from "./img/CamiliaPP.svg";
import CamiliaPost from "../profile/img/img3.png";
import KhokhaPP from "./img/khokhaPP.svg";
import KhokhaPost from "../profile/img/img8.png";
import Post from "./Post";

const posts = [
  {
    username: "Camilia",
    location: "Mexico City, Mexico",
    avatar: CamiliaPP,
    post: CamiliaPost,
    likeCount: "5,4K",
    commentCount: 165,
  },
  {
    username: "khokha",
    location: "Tokyo City, Tokyo",
    avatar: KhokhaPP,
    post: KhokhaPost,
    likeCount: "19,03K",
    commentCount: 1903,
  },
];

const PostArea = () => {
  return (
    <div className="flex gap-4 flex-col h-auto">
      {posts.map((d) => (
        <Post
          username={d.username}
          location={d.location}
          avatar={d.avatar}
          post={d.post}
          likeCount={d.likeCount}
          commentCount={d.commentCount}
        />
      ))}
    </div>
  );
};

export default PostArea;
