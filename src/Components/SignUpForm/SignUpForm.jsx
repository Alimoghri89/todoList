import React from "react";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import SignUpFormStyle from "./SignUpForm.module.css"
const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(name, email, password) ? navigate("/login") : alert("خطا ۵۰۵");
  };
  return (
    <div className={SignUpFormStyle.container}>
      <form action="#" onSubmit={handleSubmit} className={SignUpFormStyle.form} dir="rtl">
        <label htmlFor="name" className={SignUpFormStyle.lable}>Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={SignUpFormStyle.input}
        />
        <label htmlFor="email" className={SignUpFormStyle.lable}>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={SignUpFormStyle.input}
        />
        <label className={SignUpFormStyle.lable} htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={SignUpFormStyle.input}
        />
        <button type="submit" className={SignUpFormStyle.button}>SignUp</button>
      </form>
    </div>
  );
};

export default SignUpForm;
