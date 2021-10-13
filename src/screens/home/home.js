import React from 'react';

import HeroImg from '../../assets/images/hero2x.jpg';
import HeroSmallImg from '../../assets/images/heroSmall2x.png';
import Courses from '../../components/courses/courses';
import Demo from '../../components/demo/demo';
import Gallery from '../../components/gallery/gallery';
import Hero from '../../components/hero/hero';
import NewsCoverage from '../../components/newsCoverage/newsCoverage';
import Offer from '../../components/offer/offer';
import Testimony from '../../components/testimony/testimony';
import styles from './home.module.scss';

const HomeScreen = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <Hero
          headLine1="India’s Best"
          headLine2="Live Interactive Classes"
          tag="Electricians,Appliance Repair & Wiring"
          imageLg={HeroImg}

          imageSm={HeroSmallImg}
        />
      </section>
      <section className={styles.offer}>
        <Offer />
      </section>
      <section className={styles.course}>
        <Courses title background />
      </section>
      <section className={styles.testimony}>
        <Testimony />
      </section>
      <section className={styles.newsCoverage}>
        <NewsCoverage />
      </section>
      <section className={styles.gallery}>
        <Gallery />
      </section>
      <section className={styles.demo}>
        <Demo />
      </section>
    </div>
  );
};

export default HomeScreen;
