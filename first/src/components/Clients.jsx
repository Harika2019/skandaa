import React from 'react';
import Box from './Box';
import clientimg from '../images/client.jpg';

function Clients() {
  return (
    <div id='clients'>
         <div className='s-heading'>
            <h1>Clients</h1>
            <p>Here are some clients we are providing our services</p>
        </div>
        <div className='b-container'>
            <img src={clientimg} alt='Clients.image'/>
        </div>
    </div>
  )
}

export default Clients;