import React, { useState } from 'react';
import useCardStore from '../../../utils/store';
import { Card } from '../../../types';
import styles from './AddCardModal.module.scss';

interface AddCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddCardModal: React.FC<AddCardModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const addCard = useCardStore((state) => state.addCard);

  if (!isOpen) return null;

  const generateRandomCardNumber = () => {
    return Array.from({ length: 16 }, () => Math.floor(Math.random() * 10)).join('');
  };

  const generateRandomExpiryDate = () => {
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const year = String(new Date().getFullYear() + Math.floor(Math.random() * 5)).slice(-2);
    return `${month}/${year}`;
  };

  const generateRandomCVV = () => {
    return String(Math.floor(Math.random() * 900) + 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCard: Omit<Card, 'id'> = {
      name,
      cardNumber: generateRandomCardNumber(),
      expiryDate: generateRandomExpiryDate(),
      cvv: generateRandomCVV(),
      isFrozen: false,
      cardType: Math.random() > 0.5 ? 'visa' : 'mastercard',
    };
    addCard(newCard);
    setName('');
    onClose();
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={handleModalClick}>
        <h3 className={styles.modal__title}>Add New Card</h3>
        <form onSubmit={handleSubmit} className={styles.modal__form}>
          <div className={styles.modal__field}>
            <label htmlFor="name" className={styles.modal__label}>
              Card Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.modal__input}
              placeholder="Enter card name"
              required
            />
          </div>
          <div className={styles.modal__actions}>
            <button
              type="button"
              onClick={onClose}
              className={`${styles.modal__button} ${styles['modal__button--cancel']}`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`${styles.modal__button} ${styles['modal__button--submit']}`}
            >
              Add Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCardModal; 