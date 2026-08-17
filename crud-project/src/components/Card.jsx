
function Card({ user , onDelete}) {

  return (
    <>
    <div className="card">
      <img
        className="profile-image"
        src={user.image || "https://i.pravatar.cc/150"}
        alt={user.username}
      />

      <div className="card-content">
        <h2>{user.name}</h2>

        <p className="username">@{user.username}</p>

        <p className="age">Age: {user.age}</p>

        <p className="bio">{user.bio}</p>
      </div>
    </div>
    <div>
      <button onClick={() => onDelete(user)} className="edit-button">Delete Button</button>
    </div>
    </>
  );
}

export default Card;
