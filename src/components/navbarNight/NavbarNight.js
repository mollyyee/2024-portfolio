import React from 'react'
import { Link } from 'gatsby'
import "./navbarNight.css";

export default function NavbarNight() {
  return (
    <nav>
      <Link to="/about" activeClassName="active"> <h1 className="nighttext"> m. yee – designer</h1> </Link>
      <div className="links">
        <Link to="/" activeClassName="active" className="nighttext"> 9 to 5 </Link>
        <Link to="/5to9" activeClassName="active" className="nighttext"> 5 to 9 </Link>
      </div>
    </nav>
  )
}
