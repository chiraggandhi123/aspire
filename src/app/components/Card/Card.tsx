import React from 'react';
import { Card as CardType } from '../../types';
import { motion } from 'framer-motion';

interface CardProps {
  card: CardType;
  onFreezeToggle: () => void;
}

const Card: React.FC<CardProps> = ({ card, onFreezeToggle }) => {
  const formatCardNumber = (number: string) => {
    return number.replace(/(\d{4})/g, '$1 ').trim();
  };
      //  ${card.cardType === 'visa' ? 'bg-gradient-to-r from-blue-600 to-blue-800' : 'bg-gradient-to-r from-purple-600 to-purple-800'}

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative w-[414px] h-[255px] rounded-2xl p-6 shadow-lg ${
        card.isFrozen ? 'opacity-50' : ''
      }`}
    >
      <div className="flex justify-between items-start">
        <div className="text-white">
          <h3 className="text-xl font-bold">{card.name}</h3>
          <p className="text-sm mt-2">{formatCardNumber(card.cardNumber)}</p>
        </div>
        <button
          onClick={onFreezeToggle}
          className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm"
        >
          {card.isFrozen ? 'Unfreeze Card' : 'Freeze Card'}
        </button>
      </div>
      <div className="absolute bottom-6 left-6 right-6">
        <div className="flex justify-between text-white text-sm">
          <div>
            <p className="text-gray-300">Expiry Date</p>
            <p>{card.expiryDate}</p>
          </div>
          <div>
            <p className="text-gray-300">CVV</p>
            <p>{card.cvv}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card; 