import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Card, CardState } from '../types';

const useCardStore = create<CardState>()(
  persist(
    (set) => ({
      cards: [
        {
          id: '1',
          name: 'Mark Henry',
          cardNumber: '5647341124132020',
          expiryDate: '12/20',
          cvv: '456',
          isFrozen: false,
          cardType: 'visa',
        },
        {
          id: '2',
          name: 'John Doe',
          cardNumber: '5647341124132021',
          expiryDate: '12/21',
          cvv: '457',
          isFrozen: false,
          cardType: 'mastercard',
        },
      ],
      addCard: (card) =>
        set((state) => ({
          cards: [
            ...state.cards,
            {
              ...card,
              id: Math.random().toString(36).substr(2, 9),
            },
          ],
        })),
      toggleFreeze: (cardId) =>
        set((state) => ({
          cards: state.cards.map((card) =>
            card.id === cardId ? { ...card, isFrozen: !card.isFrozen } : card
          ),
        })),
      removeCard: (cardId) =>
        set((state) => ({
          cards: state.cards.filter((card) => card.id !== cardId),
        })),
    }),
    {
      name: 'card-storage',
    }
  )
);

export default useCardStore; 