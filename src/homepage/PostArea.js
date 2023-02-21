import React from "react";
import data from "../data/Posts.json";
import Post from "./Post";

const PostArea = () => {
  return (
    <div className="flex gap-4 flex-col h-auto">
      {data.map((d) => (
        <Post
          username={d.username}
          location={d.location}
          avatar={d.avatar}
          post={d.post}
          likeCount={d.likes.length}
          commentCount={d.commentCount}
        />
      ))}
    </div>
  );
};

export default PostArea;
