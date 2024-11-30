import { SWRConfig } from "swr";
import { useEffect,useState} from "react";
import Home from "./Pages/Home/Home";
import AddTasks from "./Pages/AddTasks/AddTasks";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import useAPI from "./Hooks/useAPI";
import useAuth from "./Hooks/useAuth";
function App() {
  const {isAuth} = useAuth()
  const {users,loading,error} = useAPI()
  const [userEmail,setUserEmail] = useState(localStorage.getItem("user"))
  const [user,setUser]= useState(null)
  console.log(user)
  useEffect(() => {
    
      setUser( isAuth ? users?.find(user => user.email === localStorage.getItem("user")) : null);
      setUserEmail(!!localStorage.getItem('user') ? localStorage.getItem('user') : "")
    
  }, [users,user,userEmail,isAuth]);
  return users ?
  (<SWRConfig value={{ users , user }}>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
          <Routes>
            <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/"  element={<Home />} />
              <Route path="/AddTasks" element={<AddTasks />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>

      </BrowserRouter>
    </SWRConfig>)
    :
    (<div>Loading...</div>)

}

export default App;
