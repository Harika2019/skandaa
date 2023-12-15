import React from 'react';
import Box from './Box';
import image from '../images/Labtests.png';
function LabTests() {
  return (
    <div id='LabTests'>
         <div className='s-heading'>
            <h1>Lab Tests</h1>
            <p>Here are some LabTests we are providing</p>
        </div>
        <div className='b-container'>
            <Box image={image} alte='image' button='Lab Tests' caption='•	Concrete core & cube compressive strength
                                             •	Bitumen Testing
                                             •	Coarse aggregate & Fine aggregate testing
                                             •	Cement Testing
                                             •	Solid block, Paver blocks, AAC blocks
                                             •	Bricks Testing
                                             •	Concrete mix Proportionating'/>
        </div>                                     
    </div>
  )
}

export default LabTests;