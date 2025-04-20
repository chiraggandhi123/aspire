export interface Card {
  id: string;
  name: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  isFrozen: boolean;
  cardType: 'visa' | 'mastercard';
}

export interface CardState {
  cards: Card[];
  addCard: (card: Omit<Card, 'id'>) => void;
  toggleFreeze: (cardId: string) => void;
  removeCard: (cardId: string) => void;
} 