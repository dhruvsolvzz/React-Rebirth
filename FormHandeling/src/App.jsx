import React from "react";
import { useState } from "react";

const App = () => {

  // ye toh banaya inpurt data handle karne ke liye
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // ab ui pe bhi toh show karna hoga
  const [showData, setShowData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const userData = [...showData] 

    userData.push({ name, age });
    setShowData(userData);
    console.log(userData);
    setName("");
    setAge("");
    console.log(showData);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAgeChange(e) {
    setAge(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="number"
          placeholder="Enter your Age"
          value={age}
          onChange={handleAgeChange}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {showData.map((user, index) => (
          <div key={index}>
            <h2>Name: {user.name}</h2>
            <p>Age: {user.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
