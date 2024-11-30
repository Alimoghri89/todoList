import React,{useState,useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderStyle from "./Header.module.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import { useSWRConfig } from "swr";
import LogoutIcon from '@mui/icons-material/Logout';
import  useAuth  from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [taskCount, setTaskCount] = useState(0);
  const [undoneTasks, setundoneTasks] = useState(0);
  const [doneTasks, setDoneTasks] = useState(0);
  const url = useLocation();
  const {user}=useSWRConfig()
  const {logout}=useAuth()
  const navigate = useNavigate()
  const handleLogout=()=>{
    logout()
    navigate("/login")
  }
  useEffect(() => {
    setTaskCount(user?.tasks?.length);
    setundoneTasks(user?.tasks?.filter((task) => task.status === "pending"));
    setDoneTasks(user?.tasks?.filter((task) => task.status === "completed"));
  }, [user]);
  return user?
  (
    <div className={HeaderStyle.container}>
      <div className={HeaderStyle.userInfo}>
      <h3>{user?.name}</h3>
      <LogoutIcon className={HeaderStyle.logoutIcon} onClick={handleLogout}/>
      </div>
      <h5>تعداد کل تسک ها: {taskCount}</h5>
      <h5>تعداد تسک های در دست انجام: {undoneTasks?.length}</h5>
      <h5>تعداد تسک های انجام شده: {doneTasks?.length}</h5>
      {url.pathname === "/" ? (
        <Link to="/AddTasks">
          <AddCircleIcon className={HeaderStyle.addIcon} />
        </Link>
      ) : (
        <Link to="/">
          <HomeIcon className={HeaderStyle.addIcon} />
        </Link>
      )}
    </div>
  ):
  (<div>Loading...</div>)
};

export default Header;
