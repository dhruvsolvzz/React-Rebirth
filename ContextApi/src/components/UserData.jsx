import React, { useContext } from 'react'
import {userDataContext} from '../context/UserContext'

const UserData = () => {
 const getData = useContext(userDataContext)

async function printUser() {
  const users = await getData();
  console.log(users[0]);
}

 
   
   return (
    
     <div>
           <button onClick={printUser} className='bg-red-400'>User Data</button>
     </div>
   )
}

export default UserData