import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import useCardStore from '../../../utils/store';
import { Card } from '../../../types';

interface AddCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddCardModal: React.FC<AddCardModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const addCard = useCardStore((state) => state.addCard);

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

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded-xl bg-white p-6">
          <Dialog.Title className="text-lg font-medium">Add New Card</Dialog.Title>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Card Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Add Card
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default AddCardModal; 