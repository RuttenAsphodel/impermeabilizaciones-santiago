import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import FeaturedProjects from './components/FeaturedProjects';
import Brands from './components/Brands';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <FeaturedProjects />
      <Brands />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
