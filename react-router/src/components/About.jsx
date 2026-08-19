import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="page">
      <h1>About</h1>
      <p>This is the about page.</p>
      <div>
        <Link to="/shop" className="nav-link">Shop</Link>
        <Link to="/checkout" className="nav-link">Checkout</Link>
      </div>
    </section>
  )
}

export default About


