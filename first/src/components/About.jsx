import React from 'react';
import Aboutimage from '../images/About.png'
import Services from './Services';
import viewmore from '../pages/viewmore';
function About() {
  return (
    <div id='About'>
        <div className='About.model'>
            <img src={Aboutimage} alt='About.image'/>
        </div>
        <div className='About-text'>
          <h2><b>About</b></h2>
          <p>Here are some information of SMTL</p>
          <h3>This Application <span>Software</span> is Art</h3>
          <p>Skanda Material Testing Laboratory is a reputable and specialized facility dedicated to providing comprehensive material testing services.
             With a commitment to quality and precision, Skanda MTL utilizes state-of-the-art equipment and a team of skilled professionals to conduct a 
             wide range of tests on various materials.Whether it's testing the mechanical properties of metals, analyzing the composition of polymers, or 
             evaluating the durability of construction materials, Skanda MTL ensures accurate and reliable results.The laboratory's expertise extends to 
             industries such as manufacturing, construction, and aerospace, where the integrity of materials is paramount.Clients trust Skanda MTL for its 
             rigorous testing methodologies, timely delivery of results, and a commitment to exceeding industry standards.</p>
            <button onClick={viewmore}>View More About Us</button> 
        </div>
    </div>
  )
}

export default About