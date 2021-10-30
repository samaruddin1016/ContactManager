
import React from 'react';
import Header from './components/Header';
import AddContact from './components/AddContact';
import Particles from 'react-particles-js';
import {tsParticles} from 'tsparticles'
const Particleoption = {
  particles:{
    number:{
      value:200,
      density:{
        enable:true,
        value_area:"1800",
        
      }
    },
    "color":"#f5f5f6"
  }
 }

function App() {
  return (
    <div className="ui container">
    <Header/>
    <AddContact/>
    <Particles  className = "particles" 
     params={Particleoption}>
</Particles>
    </div>
  );
}

export default App;
