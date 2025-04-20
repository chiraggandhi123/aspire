'use client';

import React, { useState } from 'react';
import Header from './components/Header/Header';
import CardList from './components/Card/CardList';
import AddCardModal from './components/Card/AddCardModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">My Cards</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add New Card
          </button>
        </div>
        <CardList />
      </div>
      <AddCardModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
