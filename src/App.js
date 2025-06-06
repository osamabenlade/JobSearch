import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import FrontPage from './Components/FrontPage/FrontPage';
import Milestones from './Components/Milestones/Milestones';
import Popular from './Components/Milestones/Popular';
import About from './Components/Pages/About/About';
import Support from './Components/Pages/Support/Support';
import Contact from './Components/Pages/Contact/Contact';
import Register from './Components/Register/Register';
import Company from  './Components/Company/Company';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='appp'>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <FrontPage />
            <Milestones />
            <h1 id="cat">Popular categories</h1>
            <Popular />
            <Popular />
            <h1 id="cat">Top Companies</h1>
            <Popular />
          </>
        } />
        <Route path="/About" element={<About />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/company" element={<Company />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;