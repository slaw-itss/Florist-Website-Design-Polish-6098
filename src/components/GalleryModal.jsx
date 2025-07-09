import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX } = FiIcons;

const GalleryModal = ({ category, onClose, onImageClick }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-sage-100 flex items-center justify-between">
          <h3 className="text-2xl font-playfair font-bold text-sage-800">
            {category.title}
          </h3>
          <button
            onClick={onClose}
            className="text-sage-600 hover:text-rose-600 transition-colors"
          >
            <SafeIcon icon={FiX} className="text-2xl" />
          </button>
        </div>
        
        <div className="p-6 max-h-[calc(90vh-100px)] overflow-y-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.images.map((image, index) => (
              <motion.div
                key={index}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onImageClick(image)}
              >
                <img
                  src={image}
                  alt={`${category.title} ${index + 1}`}
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GalleryModal;