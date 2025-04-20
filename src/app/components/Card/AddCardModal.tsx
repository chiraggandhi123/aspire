import React, { useState } from 'react';
import useCardStore from '../../../utils/store';
import { Card } from '../../../types';
import styles from './AddCardModal.module.scss';

interface AddCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ValidationErrors {
  name: string;
}

const AddCardModal: React.FC<AddCardModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [touched, setTouched] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({ name: '' });
  const addCard = useCardStore((state) => state.addCard);

  if (!isOpen) return null;

  const validateName = (value: string): string => {
    if (!value.trim()) {
      return 'Card name is required';
    }
    if (value.length < 3) {
      return 'Card name must be at least 3 characters';
    }
    if (value.length > 50) {
      return 'Card name must be less than 50 characters';
    }
    if (!/^[a-zA-Z\s]*$/.test(value)) {
      return 'Card name can only contain letters and spaces';
    }
    return '';
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    if (touched) {
      setErrors({ ...errors, name: validateName(value) });
    }
  };

  const handleBlur = () => {
    setTouched(true);
    setErrors({ ...errors, name: validateName(name) });
  };

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
    
    // Validate before submission
    const nameError = validateName(name);
    setErrors({ name: nameError });
    setTouched(true);

    if (nameError) {
      return;
    }

    const newCard: Omit<Card, 'id'> = {
      name: name.trim(),
      cardNumber: generateRandomCardNumber(),
      expiryDate: generateRandomExpiryDate(),
      cvv: generateRandomCVV(),
      isFrozen: false,
      cardType: Math.random() > 0.5 ? 'visa' : 'mastercard',
    };
    addCard(newCard);
    setName('');
    setTouched(false);
    setErrors({ name: '' });
    onClose();
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const isSubmitDisabled = touched && !!errors.name;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={handleModalClick}>
        <h3 className={styles.modal__title}>Add New Card</h3>
        <form onSubmit={handleSubmit} className={styles.modal__form} noValidate>
          <div className={styles.modal__field}>
            <label htmlFor="name" className={styles.modal__label}>
              Card Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              onBlur={handleBlur}
              className={`${styles.modal__input} ${touched && errors.name ? styles['modal__input--error'] : ''}`}
              placeholder="Enter card name"
              aria-invalid={!!errors.name}
              aria-describedby="name-error"
            />
            {touched && errors.name && (
              <span id="name-error" className={styles.modal__error}>
                {errors.name}
              </span>
            )}
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
              disabled={isSubmitDisabled}
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