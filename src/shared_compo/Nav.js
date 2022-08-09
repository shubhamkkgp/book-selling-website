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
            <li><a href="Genre1">Mystery </a></li>
            <li><a href="Genre1">Thriller</a></li>
            <li><a href="Genre1">Horror</a></li>
            <li><a href="Genre1">Historical</a></li>
            <li><a href="Genre1">Romance</a></li>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav