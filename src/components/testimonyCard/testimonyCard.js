import React from 'react';

import styles from './testimonyCard.module.scss';

const TestimonyCard = ({ message, avatar, name, intro, bubbleColor }) => {
  return (
    <div className={styles.testimonyCard}>
      <div
        className={styles.chatBubble}
        style={{
          backgroundColor: bubbleColor,
          borderColor: bubbleColor,
        }}>
        {message}
      </div>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <img src={avatar} alt={`${name}-Lattu Kids`} />
        </div>
        <div className={styles.details}>
          <div className={styles.name}>{name}</div>
          <div className={styles.intro}>{intro}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
