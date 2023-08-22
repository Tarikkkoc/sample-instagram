import React from "react";
import data from "../data/Posts.json";

const ProfileImgs = ({ currentUserPosts }) => {
  // let items = currentUserPosts.find((items) => items.username === params.username);
  // console.log(items);
  return (
    <div className="mt-5 h-screen gap-4 space-y-4 columns-1 sm:columns-2 md:columns-3">
      {currentUserPosts.posts.map((a) => (
        <img className="rounded-xl" key={a} src={a.link} alt="" />
      ))}
    </div>
  );
};

export default ProfileImgs;
