import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheck } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Telefon',
      info: '+48 123 456 789',
      link: 'tel:+48123456789'
    },
    {
      icon: FiMail,
      title: 'Email',
      info: 'kontakt@cudnasmietanowska.pl',
      link: 'mailto:kontakt@cudnasmietanowska.pl'
    },
    {
      icon: FiMapPin,
      title: 'Adres',
      info: 'ul. Kwiatowa 15, 00-001 Warszawa',
      link: 'https://maps.google.com'
    },
    {
      icon: FiClock,
      title: 'Godziny otwarcia',
      info: 'Pon-Pt: 9:00-18:00, Sob: 9:00-15:00',
      link: null
    }
  ];

  const eventTypes = [
    'Ślub',
    'Pierwsza Komunia Święta',
    'Stroik bożonarodzeniowy',
    'Stroik wielkanocny',
    'Inne wydarzenie'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-sage-50 to-rose-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-800 mb-6">
            Skontaktuj się z nami
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto font-inter">
            Gotowi jesteśmy stworzyć dla Ciebie wyjątkowe dekoracje kwiatowe. 
            Skontaktuj się z nami już dziś, aby omówić szczegóły Twojego wydarzenia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-playfair font-bold text-sage-800 mb-8">
              Informacje kontaktowe
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-rose-100 to-sage-100 rounded-full">
                    <SafeIcon icon={item.icon} className="text-rose-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-semibold text-sage-800 mb-1">
                      {item.title}
                    </h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-sage-600 font-inter hover:text-rose-600 transition-colors"
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-sage-600 font-inter">{item.info}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="mt-8 p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="font-playfair font-semibold text-sage-800 mb-4">
                Dlaczego warto nas wybrać?
              </h4>
              <ul className="space-y-2 text-sage-600 font-inter">
                <li className="flex items-center">
                  <SafeIcon icon={FiCheck} className="text-rose-600 mr-2" />
                  15+ lat doświadczenia w branży
                </li>
                <li className="flex items-center">
                  <SafeIcon icon={FiCheck} className="text-rose-600 mr-2" />
                  Indywidualne podejście do każdego klienta
                </li>
                <li className="flex items-center">
                  <SafeIcon icon={FiCheck} className="text-rose-600 mr-2" />
                  Najświeższe kwiaty od sprawdzonych dostawców
                </li>
                <li className="flex items-center">
                  <SafeIcon icon={FiCheck} className="text-rose-600 mr-2" />
                  Bezpłatna konsultacja i wycena
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-playfair font-bold text-sage-800 mb-6">
                Napisz do nas
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sage-700 font-inter font-medium mb-2">
                    Imię i nazwisko *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                    placeholder="Jan Kowalski"
                  />
                </div>
                
                <div>
                  <label className="block text-sage-700 font-inter font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                    placeholder="jan@example.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sage-700 font-inter font-medium mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                    placeholder="+48 123 456 789"
                  />
                </div>
                
                <div>
                  <label className="block text-sage-700 font-inter font-medium mb-2">
                    Typ wydarzenia *
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Wybierz typ wydarzenia</option>
                    {eventTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sage-700 font-inter font-medium mb-2">
                  Data wydarzenia
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sage-700 font-inter font-medium mb-2">
                  Wiadomość *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Opisz swoje oczekiwania dotyczące dekoracji kwiatowej..."
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-lg font-inter font-medium transition-colors duration-300 shadow-lg flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <SafeIcon icon={FiCheck} className="text-xl" />
                    <span>Wiadomość wysłana!</span>
                  </>
                ) : (
                  <>
                    <SafeIcon icon={FiSend} className="text-xl" />
                    <span>Wyślij wiadomość</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;