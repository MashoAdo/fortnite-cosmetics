import React from 'react'
import {Link} from "react-router-dom"

function Nav(){

    return ( 
     <nav className="navBar">
     <div><h3 className="logo">LOGO</h3></div>
      <ul className="navLink">
      <Link to="/">
          <li className="link">Home</li>
          </Link>
          <Link to="/About">
          <li className="link">About</li>
          </Link>
          <Link to="/Cosmetics">
          <li className="link">Cosmetics</li>
          </Link>
          
      </ul>
    </nav>
)
}

export default Nav