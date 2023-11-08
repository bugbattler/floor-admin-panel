import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(34, email, password)
    axios.post("http://174.138.112.6/api/admin/signin", {
      email: email,
      password: password,
    })
      .then((res) => {
        const response = res.data
        navigate("admin")
        toast.success('Login successful!');
      })
      .catch((err) =>
        toast.error('Login failed. Please check your email and password.')
      )

  };

return (
  <div className="py-5 " style={{ background: "#f7f6ed", minHeight: "100vh" }}>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="loginform my-5 w-25 bg-white rounded-3 mx-auto p-4">
      <h3 className="text-center title">Login</h3>
      <p className="text-center">Login to your account to continue.</p>
      <div className="error text-center">
      </div>
      <form action="" className="" >

        <div class="form-floating mb-3">
          <input type="email" class="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
          <label for="floatingInput">Email address</label>
        </div>

        <div class="form-floating">
          <input type="password" class="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <label for="floatingPassword">Password</label>
        </div>

        <div className="mb-3 text-end">
          <Link to="forgot-password" className="">
            Forgot Password?
          </Link>
        </div>
        <button
          className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
          style={{ background: "#e67929" }}
          onClick={(e) => handleLogin(e)}
        >
          Login
        </button>
      </form>
    </div>
  </div>
);
};

export default Login;
