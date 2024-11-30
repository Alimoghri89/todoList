import React from "react";

const useLocalStorage = (key, value) => {
  const setToStorage = (key, value) => {
    localStorage.setItem(key, value);
  };
  const removeFromStorage = (key)=>{
    localStorage.removeItem(key)
  }
  return {setToStorage,removeFromStorage}
};

export default useLocalStorage;
