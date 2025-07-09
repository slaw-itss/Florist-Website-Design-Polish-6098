import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiPhone, FiMail } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Strona główna', id: 'hero' },
    { label: 'Usługi', id: 'services' },
    { label: 'Galeria', id: 'gallery' },
    { label: 'O nas', id: 'about' },
    { label: 'Opinie', id: 'testimonials' },
    { label: 'Kontakt', id: 'contact' }
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-2xl">🌸</div>
            <div>
              <h1 className="text-xl font-playfair font-bold text-sage-800">
                Cudna&Śmietanowska
              </h1>
              <p className="text-xs text-sage-600">Dekoracje florystyczne</p>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sage-700 hover:text-rose-600 transition-colors duration-300 font-inter font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="tel:+48123456789"
              className="flex items-center space-x-2 text-sage-700 hover:text-rose-600 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <SafeIcon icon={FiPhone} className="text-sm" />
              <span className="text-sm font-inter">+48 123 456 789</span>
            </motion.a>
            <motion.a
              href="mailto:kontakt@cudnasmietanowska.pl"
              className="flex items-center space-x-2 text-sage-700 hover:text-rose-600 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <SafeIcon icon={FiMail} className="text-sm" />
              <span className="text-sm font-inter">kontakt@cudnasmietanowska.pl</span>
            </motion.a>
          </div>

          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-sage-700 hover:text-rose-600 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="text-xl" />
          </motion.button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-sage-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-sage-700 hover:text-rose-600 hover:bg-sage-50 transition-colors duration-300 font-inter"
                  whileHover={{ x: 5 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="px-4 py-2 border-t border-sage-100 mt-4">
                <a
                  href="tel:+48123456789"
                  className="flex items-center space-x-2 text-sage-700 hover:text-rose-600 transition-colors py-2"
                >
                  <SafeIcon icon={FiPhone} className="text-sm" />
                  <span className="text-sm font-inter">+48 123 456 789</span>
                </a>
                <a
                  href="mailto:kontakt@cudnasmietanowska.pl"
                  className="flex items-center space-x-2 text-sage-700 hover:text-rose-600 transition-colors py-2"
                >
                  <SafeIcon icon={FiMail} className="text-sm" />
                  <span className="text-sm font-inter">kontakt@cudnasmietanowska.pl</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;