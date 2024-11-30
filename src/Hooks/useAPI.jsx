import { useEffect } from 'react'
import useSWR from "swr";
import axios from "axios";
const fetcher = (url) => axios.get(url).then((res) => res.data);


const useAPI = () => {
    const { data: users, loading,error } = useSWR("http://localhost:5174/users", fetcher);
    useEffect(()=>{},[users])
  return {users,loading,error}
}

export default useAPI