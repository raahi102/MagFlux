import React from 'react';

import Hero from '../../components/hero/hero';
import styles from './aboutus.module.scss';

const AboutUsScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>About Us</div>
      <div>
        <Hero showBtn={false} />
      </div>
      <div className={styles.intro}>
      Magflux Electric Solutions provides a platform that allows skilled and experienced professionals to connect with customers looking for specific services. All the professionals, though experienced and skilled, undergo intensive training modules before being allowed to perform services 
      </div>
      <div className={styles.why}>
        <div className={styles.title}>Why Magflux Electric Solutions ?</div>
        <div className={styles.each}>
          <div className={styles.pointer}>
            <div
              className={styles.point}
              style={{ backgroundColor: '#EC6C66' }}>
              Skilled and Experinced Professionals
            </div>
            <div className={styles.description}>
              We make learning fun. Our classes are filled with fun impactful
              learning activities as we focus more on the practical aspect of
              learning.
            </div>
          </div>
          <div className={styles.pointer}>
            <div
              className={styles.point}
              style={{ backgroundColor: '#60C9B6' }}>
              Best Services
            </div>
            <div className={styles.description}>
              Our small-group learning environment facilitated by passionate
              Lattu Kids Teachers, who are themselves like friends more than
              teachers.
            </div>
          </div>
          <div className={styles.pointer}>
            <div
              className={styles.point}
              style={{ backgroundColor: '#8260FC' }}>
              Fast Servcies
            </div>
            <div className={styles.description}>
              We do monthly assessment tests after every 10th class and schedule
              revision class basis assessment results.
            </div>
          </div>
          <div className={styles.pointer}>
            <div
              className={styles.point}
              style={{ backgroundColor: '#4D91FC' }}>
              Relaible 
            </div>
            <div className={styles.description}>
              Quarterly subscription of Lattu Kids Educational App to practice
              unlimited grammar and maths questions along with fun learning
              videos.
            </div>
          </div>
          <div className={styles.pointer}>
            <div
              className={styles.point}
              style={{ backgroundColor: '#EC6C66' }}>
              Safety is our No1 Priority.
            </div>
            <div className={styles.description}>
              We focus on 21st century skills which enables the kids to learn
              and understand important concepts of computers and technology.
            </div>
          </div>
          <div className={styles.pointer}>
            <div
              className={styles.point}
              style={{ backgroundColor: '#8260FC' }}>
              Avoid electrical hazards to live
            </div>
            <div className={styles.description}>
              Our unique social learning approach empowers every child to
              collaborate and get inspired from each others work and ideas
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsScreen;
