import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Transform from './components/Transform.jsx';
import Management from './components/Management.jsx';
import Institution from './components/Institution.jsx';
import Features from './components/Features.jsx';
import Industries from './components/Industries.jsx';
import Business from './components/Business.jsx';
import Vision from './components/Vision.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Transform />
      <Management />
      <Institution />
      <Industries />
      <Features />
      <Business />
      <Vision />
    </>
  )
}

export default App