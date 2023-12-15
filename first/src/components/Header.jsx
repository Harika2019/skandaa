import React from 'react';
import Navbar from './NavBar';

function Header() {
  return (
    <div id='main'>
      <Navbar/>
      <div className='name'>
        <h1><b>Skanda Material Testing laboratory</b></h1>

         <div className='header-btns'>
          <a href="#" className='cv-btn'>Login</a>
         </div> 
        <div className='header-btns'> 
          <a href="#" className='cv-btn'>Signup</a>
         </div>

      </div>
    </div>
  )
}

export default Header