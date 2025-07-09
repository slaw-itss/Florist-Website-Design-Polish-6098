import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX } = FiIcons;

const ImageModal = ({ image, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-rose-400 transition-colors bg-black/50 rounded-full p-2"
        >
          <SafeIcon icon={FiX} className="text-2xl" />
        </button>
        
        <img
          src={image}
          alt="Pełny widok"
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default ImageModal;