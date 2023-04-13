import React from "react";
import data from "../data/Posts.json";

const ProfileImgs = ({ params }) => {
  let items = data.find((items) => items.username === params.username);
  console.log(items);
  return (
    <div className="mt-5 gap-4 space-y-4 columns-1 sm:columns-2 md:columns-3">
      {items.post.map((a) => (
        <img className="rounded-xl" key={a.postId} src={a} alt="" />
      ))}
    </div>
  );
};

export default ProfileImgs;
