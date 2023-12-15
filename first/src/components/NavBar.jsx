import React from 'react';
import { Link } from 'react-scroll';
import logo from '../images/logo.png'

function NavBar() {
  return (
    <div>
      <nav>
        <Link to='main' className='logo' smooth={true} duration={1000}>
          <img src={logo} alt='logo'/>
          </Link> 
          <input className='menu-btn' type='checkbox' id='menu-btn'/>
          <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
          </label>
          <ul className='menu'>
            <li><Link to='main'className='active' smooth={true} duration={1000}>Home</Link></li>
            <li><Link to='About' smooth={true} duration={1000}>About</Link></li>
            <li><Link to='services'>Services</Link></li>
            <li><Link to='LabTests'>LabTests</Link></li>
            <li><Link to='clients'>Clients</Link></li>
            <li><Link to='contatTitle'>Contact</Link></li>
          </ul>
          <Link to='#' className='hey'></Link>
      </nav>
    </div>
  )
}

export default NavBar