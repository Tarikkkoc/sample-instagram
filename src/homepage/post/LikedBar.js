import React from "react";
import Likes1 from "../img/likes1.svg";
import Likes2 from "../img/likes2.svg";
import Likes3 from "../img/likes3.svg";
import UserData from "../../data/User.json";
import LikesData from "../../data/Posts.json";

const LikedBar = (props) => {
  const users = require("../../data/User.json");
  const posts = require("../../data/Posts.json");

  const userLikesByPostId = [];

  posts.forEach((post) => {
    const likes = post.likes || [];
    const usersLiked = [];

    likes.forEach((like) => {
      const user = users.find((user) => user.userId === like);
      if (user) {
        usersLiked.push({
          avatar: user.avatar,
          username: user.username,
        });
      }
    });

    userLikesByPostId.push({
      postId: post.postId,
      likes: usersLiked,
    });
  });
  // console.log(userLikesByPostId);

  return (
    <div className="flex">
      <div className="flex grow-0 shrink-0 -space-x-2">
        <div>
          <img
            className="rounded-full w-6 h-6 cursor-pointer border-2 border-white"
            src={Likes3}
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-full w-6 h-6 cursor-pointer border-2 border-white"
            src={Likes2}
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-full w-6 h-6 cursor-pointer border-2 border-white"
            src={Likes1}
            alt=""
          />
        </div>
      </div>
      <div className="grow pl-2 overflow-hidden whitespace-nowrap">
        Camilia,Hank,Kho...
      </div>
      <div className="">
        <button
          onClick={props.onClick}
          className="inline-block px-4 py-1 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
        >
          Show comments
        </button>
      </div>
    </div>
  );
};

export default LikedBar;
