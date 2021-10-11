import React from 'react';

import CourseDetailsViewCard from '../courseDetailsViewCard/courseDetailsViewCard';
import styles from './courseDetailsView.module.scss';

const CourseDetailsView = ({ grade, cards }) => {
  const showCards = () => {
    return cards.map((c, i) => {
      return (
        <div key={i} className={styles.eachCard}>
          <CourseDetailsViewCard {...c} />
        </div>
      );
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.name}>{grade}</div>
      <div className={styles.cardsWrapper}>{showCards()}</div>
    </div>
  );
};

export default CourseDetailsView;
