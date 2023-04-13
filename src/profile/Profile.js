import React, { Fragment } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ProfileBar from "./ProfileBar";
import ProfileFooter from "./ProfileFooter";
import ProfileBtns from "./ProfileBtns";
import ProfileImgs from "./ProfileImgs";
import ProfileInfo from "./ProfileInfo";
import ProfileReelsBar from "./ProfileReelsBar";
import ProfileStories from "./ProfileStories";
import { loggedUsername } from "../libs/constant";
import UserData from "../data/User.json";

const Profile = () => {
  const params = useParams();
  console.log("params", params.username);
  const userData = UserData?.find(
    (user) => user.username === (params.username ?? loggedUsername) // params'ın username'i null veya undefined ise loggedUsername'i kullanır.
  );

  return (
    <Fragment>
      <div className={"container h-full bg-white max-w-3xl mx-auto px-5"}>
        <ProfileBar username={userData.username} />
        <ProfileInfo
          avatar={userData.avatar}
          fullname={userData.fullname}
          title={userData.title}
          tagOne={userData.tag[0]}
          tagTwo={userData.tag[1]}
          tagThree={userData.tag[2]}
          tagFour={userData.tag[3]}
          tagFive={userData.tag[4]}
          tagSix={userData.tag[5]}
          linkOne={userData.link[0]}
          linkTitleOne={userData.linkTitle[0]}
          linkTwo={userData.link[1]}
          linkTitleTwo={userData.linkTitle[1]}
          linkThree={userData.link[2]}
          linkTitleThree={userData.linkTitle[2]}
        />
        <ProfileBtns />
        <ProfileStories
          pathOne={userData.profileStory[0].path}
          pathTitleOne={userData.profileStory[0].title}
          pathTwo={userData.profileStory[1].path}
          pathTitleTwo={userData.profileStory[1].title}
          pathThree={userData.profileStory[2].path}
          pathTitleThree={userData.profileStory[2].title}
          pathFour={userData.profileStory[3].path}
          pathTitleFour={userData.profileStory[3].title}
        />
        <ProfileReelsBar />
        <ProfileImgs params={params} />
      </div>
      <div className="grid place-items-center">
        <ProfileFooter />
      </div>
    </Fragment>
  );
};

export default Profile;
