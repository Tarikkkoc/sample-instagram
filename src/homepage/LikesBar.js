import React from "react";
import "../App.css";
import Like from "./img/like.svg";
import Comment from "./img/Comment.svg";
import Share from "./img/share.svg";
import Save from "./img/save.svg";

const LikesBar = (props) => {
  return (
    <div className="w-full flex justify-between">
      <div className={"flex gap-4"}>
        <div className="flex items-center">
          <div>
            <img className="w-6 h-6 cursor-pointer" src={Like} alt="" />
          </div>
          <div>
            <span className={"font-bold text-sm"}>{props.likeCount} </span>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <img className="w-6 h-7 cursor-pointer" src={Comment} alt="" />
          </div>
          <div>
            <span className={"font-bold text-sm"}>{props.commentCount} </span>
          </div>
        </div>
        <div className="flex">
          <div>
            <img className="w-8 h-8 cursor-pointer" src={Share} alt="" />
          </div>
        </div>
      </div>
      <div className="flex">
        <div>
          <img className="w-5 h-5 cursor-pointer" src={Save} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LikesBar;
