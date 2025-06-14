import React, { useState } from 'react';
import { Card as CardType } from '../../../types';
import { motion } from 'framer-motion';
import styles from './Card.module.scss';

interface CardProps {
  card: CardType;
  onFreezeToggle: () => void;
}

const Card: React.FC<CardProps> = ({ card }) => {
  const [showCardNumber, setShowCardNumber] = useState(false);




  return (
    <div className={styles.cardWrapper}>
      <button
        onClick={() => setShowCardNumber(!showCardNumber)}
        className={styles.showNumberBtn}
      >
        <svg 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {showCardNumber ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" 
            />
          ) : (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
            />
          )}
        </svg>
        <span>Show card number</span>
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${styles.card} ${card.isFrozen ? styles.frozen : ''}`}
      >
        <div className={styles.logoPlaceholder} />

        <div className={styles.cardContent}>
          <h3 className={styles.cardHolderName}>{card.name}</h3>
          
          <div className={styles.cardNumber}>
            {showCardNumber ? (
              <div className={styles.numberGroup}>
                {card.cardNumber.match(/.{1,4}/g)?.map((group, index) => (
                  <span key={index}>{group}</span>
                ))}
              </div>
            ) : (
              <div className={styles.numberGroup}>
                <span>••••</span>
                <span>••••</span>
                <span>••••</span>
                <span>{card.cardNumber.slice(-4)}</span>
              </div>
            )}
          </div>
          <div className={styles.cardDetails}>
            <div className={styles.detailGroup}>
              <label>Thru:</label>
              <p>{card.expiryDate}</p>
            </div>
            <div className={styles.detailGroup}>
              <label>CVV:</label>
              <p>***</p>
            </div>
          </div>
          
        </div>

        <div className={styles.cardFooter}>
          <div className={styles.visaLogoPlaceholder} />
        </div>
      </motion.div>
    </div>
  );
};

export default Card; 