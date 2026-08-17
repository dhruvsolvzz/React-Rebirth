import React from 'react'

const Card = (props) => {
   return (
    <div className="card">
     <div className="p-container">
      <img className="pimg" src="https://images.unsplash.com/photo-1780071611689-55d7b5ace40a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sample Image" />
       
     </div>
     <h1>{props.name}</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit odit commodi, quis sunt ab repellendus nisi amet beatae ratione eaque praesentium nesciunt eum?</p>
    </div>
  )
}

export default Card