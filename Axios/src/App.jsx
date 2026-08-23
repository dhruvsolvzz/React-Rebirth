import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./compoenets/UserCard";


const App = () => {

  const [data, setdata] = useState([])
  const [loading, setloading] = useState(true) 


  const getData = async () => {
   
    // ayse hi data dikha paunga , normal se kaam nahi hoga , karke dekha tha par naji hua 

    const data = await axios.get("https://dummyjson.com/users");
    setdata(data.data.users)
    setloading(false)
  };
 
  useEffect(()=>{
    getData()
  } , [])

  if(loading){
    return <h1>Loading......</h1>
  }

  return (
    <div>
      <button className="px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:opacity-90 transition">
        Click Me
      </button>
      <div>
        <div>
          {data.map((data , index)=>{ return <UserCard  key={data.id}  user={data}/>})}
        </div>
      </div>
    </div>
  );
};

export default App;
