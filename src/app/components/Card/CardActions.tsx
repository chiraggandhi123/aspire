import React from 'react';
import styles from './CardActions.module.scss';
import FreezeSvg from '../../../../public/assets/Freeze card.svg'
import SetSpendLimitSvg from '../../../../public/assets/Set spend limit.svg'
import AddToGPaySvg from '../../../../public/assets/GPay.svg'
import ReplaceCardSvg from '../../../../public/assets/Replace card.svg'
import CancelCardSvg from '../../../../public/assets/Deactivate card.svg'
import Image from 'next/image';
interface CardActionsProps {
  onFreezeToggle: () => void;
  isFrozen: boolean;
}

const CardActions: React.FC<CardActionsProps> = ({ onFreezeToggle, isFrozen }) => {
  return (
    <div className={styles.cardActions}>
      <div
        onClick={onFreezeToggle}
        className={styles.cardActions__div}
      >
        <div className={styles.cardActions__icon}>
          <Image className={styles.cardActions__iconSvg} src={FreezeSvg} height={32} width={32} alt="freeze" />
        </div>
        <span className={styles.cardActions__label}>
          {isFrozen ? 'Unfreeze card' : 'Freeze card'}
        </span>
      </div>

      <div className={styles.cardActions__div}>
        <div className={styles.cardActions__icon}>
         <Image className={styles.cardActions__iconSvg} src={SetSpendLimitSvg} height={32} width={32} alt="set spend limit" />
        </div>
        <span className={styles.cardActions__label}>Set spend limit</span>
      </div>

      <div className={styles.cardActions__div}>
        <div className={styles.cardActions__icon_gpay}>
        <Image className={styles.cardActions__iconSvg} src={AddToGPaySvg} height={32} width={32} alt="add to gpay" />
        </div>
        <span className={styles.cardActions__label}>Add to GPay</span>
      </div>

      <div className={styles.cardActions__div}>
        <div className={styles.cardActions__icon}>
          <Image className={styles.cardActions__iconSvg} src={ReplaceCardSvg} height={32} width={32} alt="replace card" />
        </div>
        <span className={styles.cardActions__label}>Replace card</span>
      </div>

      <div className={styles.cardActions__div}>
        <div className={styles.cardActions__icon}>
         <Image className={styles.cardActions__iconSvg} src={CancelCardSvg} height={32} width={32} alt="cancel card" />
        </div>
        <span className={styles.cardActions__label}>Cancel card</span>
      </div>
    </div>
  );
};

export default CardActions; 