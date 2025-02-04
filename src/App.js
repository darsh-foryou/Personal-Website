import React from 'react';
import './App.css';
import NavBar from './components/NavBar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills'; 
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WorkExperience } from './components/WorkExperience';




function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner />
      <Skills />
      <Projects/>
      <WorkExperience />
      <Footer />
      


    </div>
  );
}

export default App;
