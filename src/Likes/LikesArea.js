import React, { Fragment } from "react";
import FollowReq from "./FollowReq";
import Footer from "./Footer";
import Header from "./Header";
import Like from "./Like";
import Avatar1 from "./img/CamiliaPP.svg";
import Avatar2 from "./img/khokhaPP.svg";
import Avatar3 from "./img/img1.png";
import Avatar4 from "./img/img2.png";
import Avatar5 from "./img/img3.png";
import Avatar6 from "./img/img4.png";
import Avatar7 from "./img/img5.png";
import Avatar8 from "./img/img6.png";
import Avatar9 from "./img/img7.png";
import Avatar10 from "./img/img8.png";
import Avatar11 from "./img/img9.png";
import Avatar12 from "./img/img10.png";
import PP1 from "./img/p1.png";
import PP2 from "./img/p2.png";
import PP3 from "./img/p3.png";
import PP4 from "./img/p4.png";
import PP5 from "./img/p9.jpg";

const likes = [
  {
    avatar: Avatar1,
    avatar2: Avatar2,
    username: "Camillia, Khoka ve 75 diğer kişi",
    object: "hikayeni",
    event: "beğendi",
    time: "12s",
    image: PP1,
  },
  {
    avatar: Avatar3,
    avatar2: Avatar4,
    username: "Geralt, Gia ve 81 diğer kişi",
    object: "hikayeni",
    event: "beğendi",
    time: "17s",
    image: PP2,
  },
  {
    avatar: Avatar5,
    avatar2: Avatar6,
    username: "Angela, Jhon ve 147 diğer kişi",
    object: "fotoğrafını",
    event: "beğendi",
    time: "2g",
    image: PP5,
  },
  {
    avatar: Avatar7,
    avatar2: Avatar8,
    username: "Ricardo, Alvaro ve 69 diğer kişi",
    object: "hikayeni",
    event: "beğendi",
    time: "1h",
    image: Avatar12,
  },
  {
    avatar: Avatar9,
    avatar2: Avatar10,
    username: "Rose, Furkan ve 198 diğer kişi",
    object: "fotoğrafını",
    event: "beğendi",
    time: "2h",
    image: PP3,
  },
  {
    avatar: Avatar11,
    avatar2: Avatar12,
    username: "Fegha, Khoka ve 200 diğer kişi",
    object: "fotoğrafını",
    event: "beğendi",
    time: "3h",
    image: PP4,
  },
  {
    avatar: Avatar8,
    avatar2: Avatar4,
    username: "Camillia, Khoka ve 74 diğer kişi",
    object: "hikayeni",
    event: "beğendi",
    time: "4h",
    image: Avatar9,
  },
];
const LikesArea = () => {
  return (
    <Fragment>
      <div className="container rounded-bl-2xl rounded-br-2xl h-full bg-white max-w-3xl mx-auto px-5 gap-3 flex flex-col">
        <Header />
        <FollowReq avatar={Avatar1} count={14} />
        <span className=" font-medium text-xl">Bu ay</span>
        {likes.map((a) => (
          <Like
            avatar={a.avatar}
            avatar2={a.avatar2}
            username={a.username}
            object={a.object}
            event={a.event}
            time={a.time}
            image={a.image}
          />
        ))}
      </div>
      <div className="grid place-items-center">
        <Footer />
      </div>
    </Fragment>
  );
};

export default LikesArea;
