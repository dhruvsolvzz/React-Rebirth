import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <h1 className="nav-brand">My App</h1>
      </div>
      <div className="nav-links">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/service" className="nav-link">Service</Link>
      </div>
    </nav>
  )
}

export default Navbar