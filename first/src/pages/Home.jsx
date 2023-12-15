import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Services from '../components/Services'
import LabTests from '../components/LabTests'
import Clients from '../components/Clients'
import Contact from '../components/Contact'

function Home() {
  return (
   <>
    <Header/>
      {/*<div className='a-heading'>
        <h1>About</h1>
        <p>Here are some information of SMTL</p>
        </div>*/}
      <About/>
      <Services/>
      <LabTests/>
      <Clients/>
      <Contact/>
      
   </>
  )
}

export default Home