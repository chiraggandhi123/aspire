import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';
import useCardStore from '../../../utils/store';

const CardList: React.FC = () => {
  const { cards, toggleFreeze } = useCardStore();

  return (
    <div className="flex space-x-4 overflow-x-auto pb-4">
      <AnimatePresence>
        {cards.map((card) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-shrink-0"
          >
            <Card card={card} onFreezeToggle={() => toggleFreeze(card.id)} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CardList; 