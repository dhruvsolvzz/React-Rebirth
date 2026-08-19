import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <section className="page">
      <h1>Home</h1>
      <div className="nav-links">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/home/shop" className="nav-link">Shop</Link>
        <Link to="/home/checkout" className="nav-link">Checkout</Link>
      </div>
      <p>Welcome to the home page.</p>
      <Outlet />
    </section>
  )
}

export default Home


