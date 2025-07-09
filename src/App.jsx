import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';
import './App.css';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Services />
          <Gallery onImageClick={openImageModal} />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        
        {selectedImage && (
          <ImageModal 
            image={selectedImage} 
            onClose={closeImageModal} 
          />
        )}
      </div>
    </Router>
  );
}

export default App;