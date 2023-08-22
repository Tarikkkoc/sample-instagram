import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";

const Register = () => {
  const history = useHistory();

  const [username, setUsername] = useState();
  const [fullname, setFullname] = useState();
  const [password, setPassword] = useState();
  const [mail, setMail] = useState();
  const handleSave = () => {
    const userInfo = {
      username: username,
      fullname: fullname,
      password: password,
      mail: mail,
    };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    })
      .then((res) => {
        if (res.ok) {
          Swal.fire("Kayıt işlemi gerçekleştirildi", "", "success");
        } else {
          Swal.fire("Kullanıcı oluşturulamadı", "error");
        }
      })
      .catch((error) => {
        console.error("Veri kaydedilirken bir hata oluştu", error);
      });
  };
  return (
    <div className="container max-w-xl mx-auto h-screen px-4 pt-20 flex flex-col items-center gap-5 bg-white">
      <div className="flex flex-col gap-10 items-center">
        <img className="w-64" src="/img/instagram.svg" alt="" />
        <span className="text-slate-900 w-9/12 text-center">
          Sign up to see photos and videos from your friends.
        </span>
        <div className="flex flex-col gap-5">
          <input
            className="border-2 rounded-md border-slate-300 py-1 px-2"
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            className="border-2 rounded-md border-slate-300 py-1 px-2"
            type="text"
            placeholder="Fullname"
            onChange={(e) => {
              setFullname(e.target.value);
            }}
          />
          <input
            className="border-2 rounded-md border-slate-300 py-1 px-2"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            className="border-2 rounded-md border-slate-300 py-1 px-2"
            type="text"
            placeholder="Mail"
            onChange={(e) => {
              setMail(e.target.value);
            }}
          />
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white py-1 rounded-lg"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
