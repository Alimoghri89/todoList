import React from "react";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import { NavLink } from "react-router-dom";
import SignupStyle from "./SignUp.module.css"
const Signup = () => {
  return (
    <div className={SignupStyle.container}>
      <SignUpForm />
      <NavLink className={SignupStyle.link} dir="rtl" to="/login">اگر از پیش ثبت نام کرده اید برای ورود کلیک کنید.</NavLink>
    </div>
  );
};

export default Signup;
