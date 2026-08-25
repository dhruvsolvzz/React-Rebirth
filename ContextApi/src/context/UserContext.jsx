import React, { createContext } from "react";
import axios from 'axios'

export const userDataContext = createContext({});

 async function getData(){
   const response = await axios.get('https://dummyjson.com/users')
   console.log(response.data.users)
   }

const UserContextProvider = ({ children }) => {
  return (
    <userDataContext.Provider value={getData}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserContextProvider;