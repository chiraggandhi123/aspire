import React, { useState } from 'react';
import styles from './CardDetails.module.scss';

interface Transaction {
  id: string;
  merchant: string;
  date: string;
  amount: number;
  type: 'charge' | 'refund';
  icon: 'shopping' | 'flight' | 'megaphone' | 'coffee';
}

interface CardDetailsProps {
  transactions: Transaction[];
}

const CardDetails: React.FC<CardDetailsProps> = ({ transactions }) => {
  const [isCardDetailsExpanded, setIsCardDetailsExpanded] = useState(false);
  const [isTransactionsExpanded, setIsTransactionsExpanded] = useState(false);

  const getTransactionIcon = (type: Transaction['icon']) => {
    switch (type) {
      case 'shopping':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13.3334 4.66667H2.66671C2.29852 4.66667 2.00004 4.96514 2.00004 5.33333V13.3333C2.00004 13.7015 2.29852 14 2.66671 14H13.3334C13.7016 14 14 13.7015 14 13.3333V5.33333C14 4.96514 13.7016 4.66667 13.3334 4.66667Z" stroke="#325BAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.33337 4.66667V3.33333C5.33337 2.97971 5.47385 2.64057 5.72391 2.39052C5.97396 2.14048 6.31309 2 6.66671 2H9.33337C9.687 2 10.0261 2.14048 10.2762 2.39052C10.5262 2.64057 10.6667 2.97971 10.6667 3.33333V4.66667" stroke="#325BAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'flight':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M14 10L9.33333 5.33333L10.6667 1.33333L9.33333 2L6.66667 4L4 4.66667L1.33333 6L4 7.33333L6.66667 8.66667L4.66667 10.6667L6 13.3333L7.33333 10.6667L12 6L14 10Z" stroke="#325BAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'megaphone':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M14.6667 2L1.33333 6.66667V7.33333L6.66667 9.33333L8.66667 14.6667H9.33333L14 1.33333L14.6667 2Z" stroke="#325BAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'coffee':
      default:
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 5.33333H12.6667C13.3739 5.33333 14.0522 5.61428 14.5523 6.11438C15.0524 6.61447 15.3333 7.29276 15.3333 8C15.3333 8.70724 15.0524 9.38552 14.5523 9.88562C14.0522 10.3857 13.3739 10.6667 12.6667 10.6667H12" stroke="#325BAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 5.33333H12V12C12 12.7072 11.719 13.3855 11.219 13.8856C10.7189 14.3857 10.0406 14.6667 9.33333 14.6667H4.66667C3.95942 14.6667 3.28115 14.3857 2.78105 13.8856C2.28095 13.3855 2 12.7072 2 12V5.33333Z" stroke="#325BAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.66667 1.33333V2.66667" stroke="#325BAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.33333 1.33333V2.66667" stroke="#325BAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 1.33333V2.66667" stroke="#325BAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
    }
  };

  return (
    <div className={styles.cardDetails}>
      <div className={styles.cardDetails__section}>
        <button 
          className={styles.cardDetails__button}
          onClick={() => setIsCardDetailsExpanded(!isCardDetailsExpanded)}
        >
          <div className={styles.cardDetails__buttonContent}>
            <div className={styles.cardDetails__iconWrapper}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14 3.98666V12.0133C14 13.1067 13.1067 14 12.0133 14H3.98666C2.89333 14 2 13.1067 2 12.0133V3.98666C2 2.89333 2.89333 2 3.98666 2H12.0133C13.1067 2 14 2.89333 14 3.98666Z" stroke="#325BAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.66667 6.66667H11.3333" stroke="#325BAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.66667 9.33333H11.3333" stroke="#325BAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className={styles.cardDetails__buttonText}>Card details</span>
          </div>
          <svg 
            className={`${styles.cardDetails__chevron} ${isCardDetailsExpanded ? styles['cardDetails__chevron--expanded'] : ''}`} 
            width="16" height="16" viewBox="0 0 16 16" fill="none"
          >
            <path d="M4 6L8 10L12 6" stroke="#325BAF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {isCardDetailsExpanded && (
          <div className={styles.cardDetails__expandedContent}>
            {/* Add card details content here */}
          </div>
        )}
      </div>

      <div className={styles.cardDetails__section}>
        <button 
          className={styles.cardDetails__button}
          onClick={() => setIsTransactionsExpanded(!isTransactionsExpanded)}
        >
          <div className={styles.cardDetails__buttonContent}>
            <div className={styles.cardDetails__iconWrapper}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14 8.66667V12.0133C14 13.1067 13.1067 14 12.0133 14H3.98667C2.89333 14 2 13.1067 2 12.0133V3.98667C2 2.89333 2.89333 2 3.98667 2H9.33333" stroke="#325BAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.33333 8L7.33333 10L14 3.33334" stroke="#325BAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className={styles.cardDetails__buttonText}>Recent transactions</span>
          </div>
          <svg 
            className={`${styles.cardDetails__chevron} ${isTransactionsExpanded ? styles['cardDetails__chevron--expanded'] : ''}`}
            width="16" height="16" viewBox="0 0 16 16" fill="none"
          >
            <path d="M4 6L8 10L12 6" stroke="#325BAF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {isTransactionsExpanded && (
          <div className={styles.cardDetails__transactions}>
            {transactions.map((transaction) => (
              <div key={transaction.id} className={styles.cardDetails__transaction}>
                <div className={styles.cardDetails__transactionContent}>
                  <div className={styles.cardDetails__transactionIcon}>
                    {getTransactionIcon(transaction.icon)}
                  </div>
                  <div className={styles.cardDetails__transactionInfo}>
                    <p className={styles.cardDetails__transactionMerchant}>{transaction.merchant}</p>
                    <p className={styles.cardDetails__transactionDate}>{transaction.date}</p>
                    <span className={styles.cardDetails__transactionType}>
                      {transaction.type === 'refund' ? 'Refund on debit card' : 'Charged to debit card'}
                    </span>
                  </div>
                </div>
                <span className={`${styles.cardDetails__amount} ${transaction.type === 'refund' ? styles['cardDetails__amount--refund'] : ''}`}>
                  {transaction.type === 'refund' ? '+' : '-'} S$ {transaction.amount.toFixed(2)}
                </span>
              </div>
            ))}
            
            <button className={styles.cardDetails__viewAll}>
              View all card transactions
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardDetails; 