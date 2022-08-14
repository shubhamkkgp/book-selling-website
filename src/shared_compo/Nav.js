import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <div class="navbar">
        <div class="container nav-container">
          <input class="checkbox" type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>  
          <div class="logo">
            <h1></h1>
          </div>
          <div class="menu-items">
            <li><Link to="Cart">Cart</Link></li>
            <li><Link to="Genre1">Mystery </Link></li>
            <li><Link to="Genre1">Thriller</Link></li>
            <li><Link to="Genre1">Horror</Link></li>
            <li><Link to="Genre1">Historical</Link></li>
            <li><Link to="Genre1">Romance</Link></li> 
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav