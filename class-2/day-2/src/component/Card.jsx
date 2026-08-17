import { useState } from "react";

function Card({ user }) {
  const [first, setfirst] = useState(0);

  function handleFollow() {
    setfirst(first + 1);
  }
  function handleUnfollow() {
    setfirst(first - 1);
  }
  return (
    <div className="user-card">
      <img src={user.image} alt={user.username} className="user-card-image" />

      <div className="user-card-info">
        <h2>{user.name}</h2>
        <h1>Follow Count : {first}</h1>
        <p className="username">@{user.username}</p>
        <p className="bio">{user.bio}</p>
        <div className="user-card-actions">
          <button className="fbtn h-[40px] w-[100px] bg-blue-500 text-white" onClick={handleFollow}>
            Follow
          </button>
          <button className="ubtn h-[40px] w-[100px] bg-red-500 text-white" onClick={handleUnfollow}>
            Unfollow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
