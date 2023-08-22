import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import Swal from "sweetalert2";

const EditProfile = ({ currentUserData }) => {
  const [username, setUsername] = useState(currentUserData.username);
  const [avatar, setAvatar] = useState(currentUserData.avatar);
  const [fullname, setFullname] = useState(currentUserData.fullname);
  const [title, setTitle] = useState(currentUserData.title);
  const [tags, setTags] = useState(currentUserData.tag);
  const [show, setShow] = useState(false);

  const history = useHistory();

  const showSpan = () => {
    setShow((prevState) => !prevState);
  };

  const handleUpdate = () => {
    const data = {
      username: username,
      fullname: fullname,
      title: title,
      tag: tags,
      avatar: avatar,
    };

    fetch(`http://localhost:5000/user-data/${currentUserData.username}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          Swal.fire("Güncelleme işlemi başarılı", "", "success");
          history.push("/");
        } else {
          Swal.fire("Güncelleme işlemi başarısız", "error");
        }
      })
      .catch((error) => alert("Veri güncellenirken hata oluştu", error));
  };
  return (
    // user-data güncellencek
    <div className="container h-screen bg-white max-w-3xl mx-auto px-5">
      <div className="flex flex-col gap-5 py-28 px-10 bg-blue-200">
        <div className="text-3xl">Profili Düzenle</div>
        <div className="flex gap-5 pt-10">
          <img className="w-14 rounded-full" src={avatar} alt="" />
          <div className="flex flex-col">
            <span>{currentUserData.username}</span>
            <span className="cursor-pointer" onClick={showSpan}>
              Profil fotoğrafını değiştir
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className={` ${show ? "flex flex-col gap-1" : "hidden"}`}>
            <span className="text-lg">Link</span>
            <input
              className="focus:border-2 focus:border-blue-300 px-3 py-1 rounded-md w-9/12"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-lg">İsim</span>
          <input
            className="focus:border-2 focus:border-blue-300 px-3 py-1 rounded-md w-9/12"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-lg">Başlık</span>
          <input
            className="focus:border-2 focus:border-blue-300 px-3 py-1 rounded-md w-9/12"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-lg">Etiketler</span>
          <textarea
            className="focus:border-2 overflow-hidden focus:border-blue-300 px-3 py-1 rounded-md w-9/12"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <button
            className="bg-blue-700 p-2 rounded-xl text-white hover:bg-blue-500"
            onClick={handleUpdate}
          >
            Gönder
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
