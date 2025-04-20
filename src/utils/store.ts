import { create } from 'zustand';
import {  CardState } from '../types';

const useCardStore = create<CardState>()(
    (set) => ({
      cards: [
        {
            "name": "Chirag Gandhi",
            "cardNumber": "9443316436248059",
            "expiryDate": "10/29",
            "cvv": "576",
            "isFrozen": false,
            "cardType": "visa",
            "id": "uwo2sszxi"
        },
        {
            "name": "kjsjkdfghsad",
            "cardNumber": "8281345414043152",
            "expiryDate": "08/27",
            "cvv": "851",
            "isFrozen": false,
            "cardType": "visa",
            "id": "wlufl668g"
        },
        {
            "name": "kjnkjhkj",
            "cardNumber": "9794262536625046",
            "expiryDate": "12/26",
            "cvv": "570",
            "isFrozen": false,
            "cardType": "mastercard",
            "id": "emmtj4s46"
        }
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
  
  
);

export default useCardStore; 