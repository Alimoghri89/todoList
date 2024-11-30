import { useState, useEffect } from 'react';
import axios from 'axios';
import { mutate } from 'swr';
import useLocalStorage from './useLocalStorage';
const useAuth = () => {
    const {setToStorage,removeFromStorage}=useLocalStorage()
    const [userEmail, setUserEmail] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? savedUser : "";
    });
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem("isAuth"));

    useEffect(() => {

    }, [userEmail, isAuth]);

    const login = (users, email, password) => {
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            setUserEmail(user.email);
            setIsAuth(true);
            setToStorage("isAuth", true)
            setToStorage("user",user.email)
            return true;
        } else {
            return false;
        }
    };
    const logout = () => {
        setUserEmail("");
        setIsAuth(false);
        removeFromStorage("isAuth")
        removeFromStorage("user")
    };
    const signup= async (name,email,password)=>{
        try{
            await axios.post('http://localhost:5174/users/', {name,email,password,tasks:[]});
            mutate('http://localhost:5174/users');
            return true
        }catch(error){
            return false
        }
    }

    return { isAuth, login, logout,signup };
};

export default useAuth;