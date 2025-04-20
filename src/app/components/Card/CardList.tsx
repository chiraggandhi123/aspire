import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';
import CardActions from './CardActions';
import useCardStore from '../../../utils/store';
import styles from './CardList.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

interface CardListProps {
  setActiveIdx: (idx: number) => void;
}

const CardList: React.FC<CardListProps> = ({ setActiveIdx }) => {
  const { cards, toggleFreeze } = useCardStore();

  const handleSlideChange = (swiper: Swiper) => {
    setActiveIdx(swiper?.activeIndex);
  };        

  return (
    <div className={styles.cardList}>
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: false,
          renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
          },
        }}
        onSlideChange={handleSlideChange}
        modules={[Pagination]}
        className="mySwiper"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <Card card={card} onFreezeToggle={() => toggleFreeze(card.id)} />
          </SwiperSlide>  
        ))}
      </Swiper>
      
    </div>
    
  );
};

export default CardList; 