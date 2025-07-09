import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiAward, FiUsers, FiClock } = FiIcons;

const About = () => {
  const stats = [
    { icon: FiHeart, number: '500+', label: 'Zrealizowanych projektów' },
    { icon: FiAward, number: '15+', label: 'Lat doświadczenia' },
    { icon: FiUsers, number: '300+', label: 'Zadowolonych klientów' },
    { icon: FiClock, number: '24/7', label: 'Dostępność konsultacji' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-sage-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-800 mb-6">
              O firmie Cudna&Śmietanowska
            </h2>
            
            <div className="space-y-6 text-sage-600 font-inter leading-relaxed">
              <p className="text-lg">
                Jesteśmy rodziną florystów z pasją do tworzenia wyjątkowych dekoracji kwiatowych. 
                Od ponad 15 lat pomagamy naszym klientom uczynić ich najważniejsze chwile jeszcze 
                piękniejszymi dzięki kunsztownie wykonanym kompozycjom kwiatowym.
              </p>
              
              <p>
                Nasza filozofia opiera się na przekonaniu, że każdy kwiat ma swoją historię, 
                a każda dekoracja powinna odzwierciedlać charakter i emocje związane z danym wydarzeniem. 
                Dlatego każdy projekt traktujemy indywidualnie, dbając o najmniejsze szczegóły.
              </p>
              
              <p>
                Specjalizujemy się w dekoracjach ślubnych i komunijnych, ale nasze usługi obejmują 
                również tworzenie stroików świątecznych i kompozycji na różne okazje okolicznościowe. 
                Używamy wyłącznie najświeższych kwiatów od sprawdzonych dostawców.
              </p>
            </div>
            
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-inter font-medium transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Porozmawiajmy o Twoim projekcie
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-100 to-sage-100 rounded-full mx-auto mb-4">
                  <SafeIcon icon={stat.icon} className="text-2xl text-rose-600" />
                </div>
                
                <div className="text-3xl font-playfair font-bold text-sage-800 mb-2">
                  {stat.number}
                </div>
                
                <div className="text-sm text-sage-600 font-inter">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;