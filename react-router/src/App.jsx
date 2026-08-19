import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Shop from './components/Shop'
import Check from './components/Check'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="page-content">
        <Routes>
          <Route path="/home" element={<Home />}>
            <Route path="shop" element={<Shop />} />
            <Route path="checkout" element={<Check />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
