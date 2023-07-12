import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageContainer from './components/ImageContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ImageContainer />
      {/* Add as many <ImageContainer /> components as you have images */}
    </div>
  );
}

export default App;
