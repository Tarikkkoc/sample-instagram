import React from "react";
import postData from "../../data/Posts.json";
import Post from "./Post";

const PostArea = () => {
  return (
    <div className="flex gap-4 flex-col h-auto">
      {postData.map((post) => (
        <Post key={post.postId} post={post} />
      ))}
    </div>
  );
};

export default PostArea;
