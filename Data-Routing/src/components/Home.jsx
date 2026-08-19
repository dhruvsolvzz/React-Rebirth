import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>

      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <h1>Home Page</h1>

      <Link to="shop">Shop</Link>
      <Link to="service">Service</Link>

      <Outlet />

    </div>
  );
};

export default Home;