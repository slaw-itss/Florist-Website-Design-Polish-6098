import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiHeart, FiFacebook, FiInstagram } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Strona główna', id: 'hero' },
    { label: 'Nasze usługi', id: 'services' },
    { label: 'Galeria', id: 'gallery' },
    { label: 'O nas', id: 'about' },
    { label: 'Kontakt', id: 'contact' }
  ];

  const services = [
    'Dekoracje ślubne',
    'Dekoracje komunijne',
    'Stroiki bożonarodzeniowe',
    'Stroiki wielkanocne',
    'Wiązanki ślubne',
    'Dekoracje sal weselnych'
  ];

  return (
    <footer className="bg-sage-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-3xl">🌸</div>
              <div>
                <h3 className="text-xl font-playfair font-bold">
                  Cudna&Śmietanowska
                </h3>
                <p className="text-sage-300 text-sm">Dekoracje florystyczne</p>
              </div>
            </div>
            
            <p className="text-sage-300 font-inter leading-relaxed mb-6">
              Tworzymy wyjątkowe dekoracje kwiatowe na najważniejsze chwile życia. 
              Każdy projekt realizujemy z pasją i dbałością o szczegóły.
            </p>
            
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="w-10 h-10 bg-sage-700 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SafeIcon icon={FiFacebook} className="text-lg" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-sage-700 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SafeIcon icon={FiInstagram} className="text-lg" />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-playfair font-semibold mb-6">
              Szybkie linki
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sage-300 hover:text-rose-300 transition-colors duration-300 font-inter"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-playfair font-semibold mb-6">
              Nasze usługi
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-sage-300 font-inter">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-playfair font-semibold mb-6">
              Kontakt
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="text-rose-400 mt-1" />
                <div>
                  <p className="text-sage-300 font-inter">
                    ul. Kwiatowa 15<br />
                    00-001 Warszawa
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="text-rose-400" />
                <a
                  href="tel:+48123456789"
                  className="text-sage-300 hover:text-rose-300 transition-colors font-inter"
                >
                  +48 123 456 789
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="text-rose-400" />
                <a
                  href="mailto:kontakt@cudnasmietanowska.pl"
                  className="text-sage-300 hover:text-rose-300 transition-colors font-inter"
                >
                  kontakt@cudnasmietanowska.pl
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="border-t border-sage-700 mt-12 pt-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sage-300 font-inter flex items-center justify-center space-x-2">
            <span>© {currentYear} Cudna&Śmietanowska. Wszystkie prawa zastrzeżone.</span>
            <span>Stworzone z</span>
            <SafeIcon icon={FiHeart} className="text-rose-400" />
            <span>dla miłośników kwiatów.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;