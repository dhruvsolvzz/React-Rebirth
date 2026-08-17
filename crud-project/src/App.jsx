import React from "react";
import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, bio, username, age };
    setUsers([...users, newUser]);
    setName("");
    setBio("");
    setUsername("");
    setAge("");
  };
  const deleteButtonHandler = (user) => {
    const newArr = users.filter((u) => u.username !== user.username);
    setUsers(newArr);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          type="text"
          placeholder="Bio"
        />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          placeholder="Age"
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        {users.map((user, index) => (
          <div key={index}>
            <Card user={user} onDelete={deleteButtonHandler} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
