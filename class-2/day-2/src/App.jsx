import Card from "./component/Card";

function App() {
  const users = [
    {
      name: "Dhruv Garg",
      username: "dhruvsolvzz",
      image: "https://i.pravatar.cc/300",
      bio: "Full-stack developer learning and building cool things."
    },
    {
      name: "Dyummmm",
      username: "dhruvsolvzz",
      image: "https://i.pravatar.cc/300",
      bio: "Full-stack developer learning and building cool things."
    }
  ];

  return (
    <div className="cards">
      {users.map((user, index) => (
        <Card key={user.username} user={user} />
      ))}
    </div>
  );
}

export default App;