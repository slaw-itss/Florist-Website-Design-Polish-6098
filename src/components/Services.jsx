import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiStar, FiGift, FiHome } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiHeart,
      title: 'Dekoracje ślubne',
      description: 'Kompleksowe dekoracje kościołów, sal weselnych i samochodów. Wiązanki ślubne i bukiety dopasowane do Twojego stylu.',
      features: ['Dekoracje kościoła', 'Dekoracje sali weselnej', 'Wiązanki ślubne', 'Dekoracje samochodów']
    },
    {
      icon: FiStar,
      title: 'Dekoracje komunijne',
      description: 'Piękne dekoracje na Pierwszą Komunię Świętą. Wianki komunijne i ozdoby kościelne na ten wyjątkowy dzień.',
      features: ['Dekoracje kościoła', 'Wianki komunijne', 'Ozdoby ołtarza', 'Dekoracje sali']
    },
    {
      icon: FiGift,
      title: 'Stroiki świąteczne',
      description: 'Tradycyjne i nowoczesne stroiki na Boże Narodzenie i Wielkanoc. Ręcznie wykonane z najwyższą starannością.',
      features: ['Stroiki bożonarodzeniowe', 'Stroiki wielkanocne', 'Wianki adwentowe', 'Ozdoby świąteczne']
    },
    {
      icon: FiHome,
      title: 'Dekoracje okolicznościowe',
      description: 'Indywidualne projekty na różne okazje. Urodziny, rocznice, jubileusze - każde wydarzenie zasługuje na piękne kwiaty.',
      features: ['Bukiety okolicznościowe', 'Kompozycje stołowe', 'Dekoracje eventowe', 'Projekty indywidualne']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-sage-50 to-rose-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-800 mb-6">
            Nasze usługi
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto font-inter">
            Specjalizujemy się w tworzeniu wyjątkowych dekoracji kwiatowych na wszystkie 
            najważniejsze momenty w Twoim życiu. Każdy projekt realizujemy z pasją i dbałością o szczegóły.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-100 to-sage-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <SafeIcon icon={service.icon} className="text-2xl text-rose-600" />
              </div>
              
              <h3 className="text-xl font-playfair font-semibold text-sage-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-sage-600 font-inter mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-sage-600 font-inter">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-inter font-medium transition-colors duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Zapytaj o wycenę
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;