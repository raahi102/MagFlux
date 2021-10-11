import React from 'react';

import Courses from '../../components/courses/courses';
import Hero from '../../components/hero/hero';
import styles from './programs.module.scss';
import Offer from '../../components/offer/offer';

const ProgramScreen = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <Hero
          headLine1="Our Services"
          tag="Electricians,Appliance Repair & Wiring"
        />
      </section>
      <section className={styles.offer}>
        <Offer />
      </section>
      <section className={styles.section}>
        <Courses />
      </section>
      <section className={styles.steps}>
        <div className={styles.title}>How it works?</div>
        <div className={styles.eachStep}>
          <div className={styles.stepCount}>Step 1:</div>
          <div className={styles.detail}>
            Book for Services. All you need to click on the "Book for Services" button and fill all the details.
            
          </div>
        </div>
        <div className={styles.eachStep}>
          <div className={styles.stepCount}>Step 2:</div>
          <div className={styles.detail}>
            Our team will reach out to you to help you complete the assigned work.
          </div>
        </div>
        <div className={styles.eachStep}>
          <div className={styles.stepCount}>Step 3:</div>
          <div className={styles.detail}>
            Our expert will understand the requirement , analyze the cost and item required to complete the work within due time.
          </div>
        </div>
        <div className={styles.eachStep}>
          <div className={styles.stepCount}>Step 4:</div>
          <div className={styles.detail}>
            After Completing the work ,If you like the work, you can buy our service
            package for repairing or monitor within subscription period .
          </div>
        </div>
        <div className={styles.eachStep}>
          <div className={styles.stepCount}>Step 5:</div>
          <div className={styles.detail}>
            Within subscription period ,We will schedule our team to visit your home in every 15 days.
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramScreen;
