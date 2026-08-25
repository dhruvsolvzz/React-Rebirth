import React, { useContext } from 'react'
import {userDataContext} from '../context/UserContext'

const Data = () => {
    const getData = useContext(userDataContext)
    

  
  return (
    <div>
          <button onClick={getData} className='bg-red-400'>Get Data</button>
    </div>
  )
}

export default Data