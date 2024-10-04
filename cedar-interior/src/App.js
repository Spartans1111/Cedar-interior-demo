// src/App.js
import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom'; 
import Header from '../src/components/header/header'; 
import Home from '../src/components/Home/home';
import About from '../src/components/about/about';
import Service from '../src/components/service/service';
import Footer from '../src/components/footer/footer';
import Packages from '../src/components/packages/packages';
import Contact from '../src/components/contact/contact';
import Gallery from '../src/components/gallery/gallery';
import Scrolltop from './components/scrolltop/scrolltop';


function App() {
  
  return (
    <div className="App">
     
      <BrowserRouter>
      <Scrolltop/>
      <Header/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Packages" element={<Packages />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
        
     </Routes>
     <Footer/>
  </BrowserRouter>
     
      
    </div>
  );
}

export default App;

