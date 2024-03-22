import React from 'react'
import { Link } from 'gatsby'
import "./navbar.css";

export default function Navbar() {
  return (
    <nav>
      <Link to="/about" activeClassName="active"> <h1> m. yee – designer</h1> </Link>
      <div className="links">
        <Link to="/" activeClassName="active"> 9 to 5 </Link>
        <Link to="/5to9" activeClassName="active"> 5 to 9 </Link>
      </div>
    </nav>
  )
}
