import React from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
import { NavLink } from "react-router-dom";
import LoginStyle from "./LoginStyle.module.css"
const Login = () => {
  return (
    <div className={LoginStyle.container}>
      <LoginForm />
      <NavLink className={LoginStyle.link} dir="rtl" to="/signup">اگر از پیش ثبت نام نکرده اید، برای ثبت نام کلیک کنید.</NavLink>
    </div>
  );
};

export default Login;
