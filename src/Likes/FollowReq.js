import React from "react";

const FollowReq = (props) => {
  return (
    <div className="w-full flex">
      <div className=" relative">
        <img
          className="rounded-full h-12 w-12 cursor-pointer"
          src={props.avatar}
          alt=""
        />
        <div className="rounded-full bg-red-600 h-5 w-5 absolute top-0 right-0 grid place-items-center text-sm text-white">
          {props.count}
        </div>
      </div>
      <div className="flex flex-col pl-4 cursor-pointer">
        <span className="font-bold">Takip İstekleri</span>
        <span>İstekleri onayla veya yok say</span>
      </div>
    </div>
  );
};

export default FollowReq;
