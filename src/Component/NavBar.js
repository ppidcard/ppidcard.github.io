import React from 'react'
import '../Styles/NavBar.css'
import {Link} from 'react-router-dom'


function NavBar (props) {
    return(
        <div>

    <nav class="navMenu">

    <a className='title'><span>Employee Directory</span></a>
      <a className='navlinks'href="#">Home</a>

      <Link to='/bookmark'><a className='navlinks'href="#">Saved</a></Link>
      <a className='navlinks'href="#">About</a>
      <div class="dot"></div>
    </nav>
  </div>
    )
}

export default NavBar;