import React, { useState } from "react";
import { useSWRConfig, mutate } from "swr";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import LoginFormStyle from "./LoginFormStyle.module.css"
const LoginForm = () => {
  const { users } = useSWRConfig();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = () => {
    if (login(users, email, password)) {
      navigate("/");
    } else {
      alert("نام کاربری و یا رمز عبور اشتباه است");
    }
  };

  return (
    <div className={LoginFormStyle.container} dir="rtl">
      <form className={LoginFormStyle.form}
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="email" className={LoginFormStyle.lable}>Email</label>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={LoginFormStyle.input}
        />
        <label htmlFor="password" className={LoginFormStyle.lable}>Password</label>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={LoginFormStyle.input}
        />
        <button type="submit" className={LoginFormStyle.button}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
