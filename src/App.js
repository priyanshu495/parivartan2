import React from 'react';
import Navbar from '../src/navbar/Navbar';
import Home from '../src/home/Home'
import About from "../src/about/About"
import Services from './services/Services';
import Programs from './programs/Programs';
function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About id="about"/>
      <Services id="services"/>
      <Programs id="programs"/>
    </div>
  );
}

export default App;
