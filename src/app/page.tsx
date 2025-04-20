'use client';

import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import CardList from './components/Card/CardList';
import AddCardModal from './components/Card/AddCardModal';
import CardDetails from './components/Card/CardDetails';
import styles from './page.module.scss';
import AddSvg from '../../public/assets/add.svg';
import Image from 'next/image';
import CardActions from './components/Card/CardActions';
import useCardStore from '@/utils/store';
import { Transaction } from '@/types';
const mockTransactions: Transaction[] = [
  {
    id: '1',
    merchant: 'Hamleys',
    date: '20 May 2020',
    amount: 150,
    type: 'charge',
    icon: 'shopping'
  },
  {
    id: '2',
    merchant: 'Hamleys',
    date: '20 May 2020',
    amount: 150,
    type: 'refund',
    icon: 'shopping'
  },
  {
    id: '3',
    merchant: 'Hamleys',
    date: '20 May 2020',
    amount: 150,
    type: 'charge',
    icon: 'shopping'
  },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'my' | 'all'>('my');
  const [activeIdx, setActiveIdx] = useState(0);
  const { toggleFreeze, cards } = useCardStore();


  return (
    <div className={styles.page}>
      <Sidebar />
      <main className={styles.page__main}>
        <div className={styles.page__header}>
          <div>
            <h2 className={styles.page__balanceTitle}>Available Balance</h2>
            <div className={styles.page__balanceAmount}>
              <span className={styles.page__balanceCurrency}>S$</span>
              <span className={styles.page__balanceValue}>3,000</span>
            </div>
          </div>
          <div
            onClick={() => setIsModalOpen(true)}
            className={styles.page__newCard}
          >
            <Image height={16} width={16} src={AddSvg} alt="add" />
            New Card
          </div>
        </div>

        <div className={styles.page__tabs}>
          <div className={styles.page__tabList}>
            <nav className={styles.page__tabNav}>
              <div
                onClick={() => setActiveTab('my')}
                className={`${styles.page__tab} ${activeTab === 'my' ? styles['page__tab--active'] : styles['page__tab--inactive']}`}
              >
                My debit cards
              </div>
              <div
                onClick={() => setActiveTab('all')}
                className={`${styles.page__tab} ${activeTab === 'all' ? styles['page__tab--active'] : styles['page__tab--inactive']}`}
              >
                All company cards
              </div>
            </nav>
          </div>
        </div>

        <div className={styles.page__grid}>
          <div className={styles.page__cardList}>
            <CardList setActiveIdx={setActiveIdx} />
            <CardActions
              onFreezeToggle={() => toggleFreeze(cards[activeIdx].id)} isFrozen={cards[activeIdx].isFrozen}
            />
          </div>
          <div className={styles.page__cardDetails}>
            <CardDetails transactions={mockTransactions as Transaction[]} />
          </div>
        </div>
      </main>
      <AddCardModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
