import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Transform from './components/Transform.jsx';
import Management from './components/Management.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Transform />
      <Management />
    </>
  )
}

export default App