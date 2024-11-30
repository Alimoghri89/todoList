import React, { useState } from 'react'
import AddFormStyle from './AddFormStyle.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { mutate } from 'swr';
import { useSWRConfig } from "swr";
const AddTasksForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const {user}=useSWRConfig()
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        user.tasks.push({title, description, status:"pending"})
       await axios.put(`http://localhost:5174/users/${user.id}`, user);
       mutate('http://localhost:5174/users');
       navigate('/');
    }
  return (
    <div className={AddFormStyle.container}>
        <h1>ایجاد تسک جدید</h1>
        <form action="#" method='post' className={AddFormStyle.form} dir='rtl' onSubmit={handleSubmit}>
            <label htmlFor="title">عنوان</label>
            <input type="text" name='title' id='title' className={AddFormStyle.input} onChange={(e)=>setTitle(e.target.value)}/>
            <label htmlFor="description">توضیحات</label>
            <input type="text" name='description' id='description' className={AddFormStyle.input} onChange={(e)=>setDescription(e.target.value)}/>
            <button type='submit' className={AddFormStyle.button}>ثبت</button>
         </form>
    </div>
  )
}

export default AddTasksForm