import React, { Fragment } from "react";
import ProfileBar from "./ProfileBar";
import ProfileFooter from "./ProfileFooter";
import ProfileBtns from "./ProfileBtns";
import ProfileImgs from "./ProfileImgs";
import ProfileInfo from "./ProfileInfo";
import ProfileReelsBar from "./ProfileReelsBar";
import ProfileStories from "./ProfileStories";

const Profile = () => {
  return (
    <Fragment>
      <div className={"container h-full bg-white max-w-3xl mx-auto px-5"}>
        <ProfileBar />
        <ProfileInfo />
        <ProfileBtns />
        <ProfileStories />
        <ProfileReelsBar />
        <ProfileImgs />
      </div>
      <div className="grid place-items-center">
        <ProfileFooter />
      </div>
    </Fragment>
  );
};

export default Profile;
