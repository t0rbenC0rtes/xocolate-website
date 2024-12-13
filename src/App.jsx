import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Hero />
      <About />
      <Contact />
    </div>
  );
};

export default App;
