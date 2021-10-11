import React from 'react';
import { FaCalendarAlt, FaCopy } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import styles from './courseCard.module.scss';

const CourseCard = ({
  title,
  grade,
  sessions,
  age,
  headerColor,
  topics,
  price,
}) => {
  return (
    <div className={styles.courseCard}>
      <div className={styles.header} style={{ backgroundColor: headerColor }}>
        <div className={styles.title}>{title}</div>
        <div className={styles.grade}>{grade}</div>
        <div className={styles.sessions}>
          <div className={styles.each}>
            <div className={styles.icon}>
              <FaCopy />
            </div>
            <div className={styles.number}>{`${sessions} Visit`}</div>
          </div>
          <div className={styles.each}>
            <div className={styles.icon}>
              <FaCalendarAlt />
            </div>
            <div className={styles.number}>{`Age ${age}`}</div>
          </div>
        </div>
      </div>
      <div className={styles.label}>Services</div>
      <div className={styles.topics}>{topics.join(', ')}</div>
      <div className={styles.price}>
        <Link to="/coursedetails">{`Rs. ${price}`}</Link>
      </div>

      <div className={styles.buttonWrapper}>
        <Link to="/notavailable">Subscribe</Link>
      </div>
     
    </div>
  );
};

export default CourseCard;
