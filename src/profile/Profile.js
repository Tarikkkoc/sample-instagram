import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import ProfileBar from "./ProfileBar";
import ProfileFooter from "./ProfileFooter";
import ProfileBtns from "./ProfileBtns";
import ProfileImgs from "./ProfileImgs";
import ProfileInfo from "./ProfileInfo";
import ProfileReelsBar from "./ProfileReelsBar";
import ProfileStories from "./ProfileStories";
import { loggedUsername } from "../libs/constant";
import UserData from "../data/User.json";

const Profile = ({ currentUserData, currentUserStory, currentUserPosts }) => {
  const params = useParams();
  const userData = UserData?.find(
    (user) => user.username === (params.username ?? loggedUsername) // params'ın username'i null veya undefined ise loggedUsername'i kullanır.
  );
  
  return (
    <div>
      {currentUserData && (
        <div>
          <div className="container h-full bg-white max-w-3xl mx-auto px-5">
            <ProfileBar currentUserData={currentUserData} />
            <ProfileInfo currentUserData={currentUserData} />
            <ProfileBtns />
            <ProfileStories
              currentUserData={currentUserData}
              currentUserStory={currentUserStory}
            />
            <ProfileReelsBar />
            <ProfileImgs currentUserPosts={currentUserPosts} />
          </div>
          <div className="grid place-items-center">
            <ProfileFooter />
          </div>
        </div>
      )}
      {!currentUserData && (
        <div>
          <Link to="/login">giriş</Link>
        </div>
      )}
    </div>
  );
};

export default Profile;
