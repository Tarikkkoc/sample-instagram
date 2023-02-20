import React from "react";

const Like = (props) => {
  return (
    <div className="w-full h-auto flex gap-2">
      <div className="relative h-12 shrink-0 sm:grid sm:place-items-center pt-4">
        <img
          className="rounded-full border-none h-12 w-12"
          src={props.avatar}
          alt=""
        />
        <img
          className="rounded-full h-12 w-12 shadow-none absolute top-[50%] left-[30%]"
          src={props.avatar2}
          alt=""
        />
      </div>
      <div className="flex grow flex-wrap sm:flex-col pt-4 pl-4">
        <span className="cursor-pointer">
          <strong>{props.username}</strong> {props.object} {props.event}
        </span>
        <span>{props.time}</span>
      </div>
      <div className="shrink-0 h-20 pt-1 cursor-pointer">
        <img className="h-12 w-12" src={props.image} alt="" />
      </div>
    </div>
  );
};

export default Like;
