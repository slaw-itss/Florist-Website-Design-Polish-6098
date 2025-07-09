import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiQuote } = FiIcons;

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Anna i Michał Kowalski',
      event: 'Ślub - Czerwiec 2023',
      rating: 5,
      text: 'Dekoracje przygotowane przez Cudna&Śmietanowska były absolutnie przepiękne! Kościół wyglądał jak z bajki, a bukiet ślubny był dokładnie taki, o jakim marzyłam. Pani Anna i Pani Śmietanowska są prawdziwymi artystkami.',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Maria Nowak',
      event: 'Komunia córki - Maj 2023',
      rating: 5,
      text: 'Wspaniałe podejście do klienta i niesamowite efekty! Dekoracje komunijne były delikatne i eleganckie. Wianek dla córki był przepiękny, a dekoracja kościoła dodała uroczystości całej ceremonii.',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Katarzyna i Piotr Wiśniewscy',
      event: 'Ślub - Wrzesień 2023',
      rating: 5,
      text: 'Profesjonalizm na najwyższym poziomie! Dekoracje sali weselnej były zgodne z naszą wizją, a dodatkowo otrzymaliśmy wiele cennych rad. Goście do dziś wspominają te piękne kompozycje kwiatowe.',
      image: 'https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Rodzina Jankowskich',
      event: 'Boże Narodzenie 2022',
      rating: 5,
      text: 'Zamówiliśmy stroiki bożonarodzeniowe na święta i byliśmy zachwyceni! Każdy stroik był unikalny i wykonany z największą starannością. Nasze święta były jeszcze bardziej magiczne dzięki tym dekoracjom.',
      image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Agnieszka Kowalczyk',
      event: 'Komunia syna - Maj 2023',
      rating: 5,
      text: 'Serdecznie polecam! Panie z Cudna&Śmietanowska stworzyły przepiękne dekoracje na komunię mojego syna. Wszystko było dopięte na ostatni guzik, a efekt przeszedł nasze najśmielsze oczekiwania.',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Tomasz i Magdalena Lis',
      event: 'Ślub - Lipiec 2023',
      rating: 5,
      text: 'Nie wyobrażamy sobie naszego ślubu bez dekoracji od Cudna&Śmietanowska! Profesjonalne podejście, kreatywność i perfekcyjne wykonanie. Każdy detal był przemyślany i pięknie zrealizowany.',
      image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-800 mb-6">
            Opinie naszych klientów
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto font-inter">
            Nic nie cieszy nas bardziej niż zadowolenie naszych klientów. 
            Przeczytaj, co mówią o naszych dekoracjach kwiatowych.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-sage-50 to-rose-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <SafeIcon icon={FiQuote} className="text-rose-400 text-2xl mr-3" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="text-yellow-400 text-sm" />
                  ))}
                </div>
              </div>
              
              <p className="text-sage-700 font-inter italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-playfair font-semibold text-sage-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sage-600 text-sm font-inter">
                    {testimonial.event}
                  </p>
                </div>
              </div>
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
          <p className="text-sage-600 font-inter mb-6">
            Dołącz do grona naszych zadowolonych klientów
          </p>
          <motion.button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-inter font-medium transition-colors duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Umów konsultację
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;