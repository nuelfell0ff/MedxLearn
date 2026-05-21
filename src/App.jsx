import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Transform from './components/Transform.jsx';
import Management from './components/Management.jsx';
import Institution from './components/Institution.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Transform />
      <Management />
      <Institution />
    </>
  )
}

export default App