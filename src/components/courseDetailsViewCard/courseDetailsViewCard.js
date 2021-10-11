import React from 'react';
import { FaCheck } from 'react-icons/fa';

import styles from './courseDetailsViewCard.module.scss';

const CourseDetailsViewCard = ({ headColor, subject, image, topics, more }) => {
  const getTopics = () => {
    return topics.map((t, i) => {
      return (
        <div className={styles.eachTopic} key={i}>
          <div className={styles.check}>
            <FaCheck />
          </div>
          <div className={styles.text}>
            <span className={styles.name}>{t.name}:</span>
            <span className={styles.description}>{t.description}</span>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.head} style={{ backgroundColor: headColor }}>
        <img src={image} alt="LattuKids" />
      </div>
      <div className={styles.subject}>{subject}</div>
      <div className={styles.topics}>{getTopics()}</div>
      <div className={styles.more}>{more}</div>
    </div>
  );
};

export default CourseDetailsViewCard;
