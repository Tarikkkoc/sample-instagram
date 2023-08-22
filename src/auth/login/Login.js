import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Swal from "sweetalert2";

const Login = ({ handleLogin, users }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      handleLogin(username, password);
    } else {
      Swal.fire(
        "Kullanıcı adı veya şifre hatalı",
        "Lütfen tekrar deneyin",
        "error"
      );
    }
  };

  return (
    <div className="container max-w-xl mx-auto h-screen px-4 pt-20 flex flex-col items-center gap-5 bg-white">
      <div className="flex flex-col gap-10 items-center">
        <img className="w-64" src="/img/instagram.svg" alt="" />
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <input
            className="border-2 rounded-md border-slate-300 py-1 px-2"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="border-2 rounded-md border-slate-300 py-1 px-2"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white py-1 rounded-lg"
          >
            Log in
          </button>
        </form>
        <Link className="text-sm">Forgot Password?</Link>
      </div>
      <div>
        Don't have an account? <Link>Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
