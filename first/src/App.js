import React from 'react';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/services" element={<ServicesPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
