import React from 'react';

import activityBased from '../../assets/images/activityBasedLearning@2x.jpg';
// import chatBubble from '../../assets/images/chat@2x.png';
import commuication from '../../assets/images/communicationSkills@2x.jpg';
import studentLimit from '../../assets/images/just6StudentsInAClass@2x.png';
import confidence from '../../assets/images/personalityDevelopment@2x.jpg';
import styles from './offer.module.scss';

const Offer = () => {

 
  return (
    <div className={styles.container}>
      <div className={styles.title}>What We Offer</div>

      <section className={styles.offers}>
        <article className={styles.eachOffer}>
          <img src={studentLimit} alt="lattukids" />
          <div className={styles.feature}>Appliance Repair</div>
        </article>
        <article className={styles.eachOffer}>
          <img src={activityBased} alt="lattukids" />
          <div className={styles.feature}>RO Service & Repair</div>
        </article>
        <article className={styles.eachOffer}>
          <img src={confidence} alt="lattukids" />
          <div className={styles.feature}>Skilled Electricians</div>
        </article>
        <article className={styles.eachOffer}>
          <img src={commuication} alt="lattukids" />
          <div className={styles.feature}>Skilled plumber</div>
        </article>
      </section>
      {/* <div className={styles.chatBubble}>
        <img src={chatBubble} alt="Lattu kids" />
      </div> */}
    </div>
  );
};

export default Offer;
