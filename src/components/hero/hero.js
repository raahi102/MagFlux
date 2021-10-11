import React from 'react';
import { Link } from 'react-router-dom';

import HeroImg from '../../assets/images/hero2x.jpg';
import HeroImgSm from '../../assets/images/heroSmall2x.jpg';
import styles from './hero.module.scss';

const Hero = ({
  headLine1,
  headLine2,
  tag,
  imageLg,
  imageSm,
  showBtn = true,
  style,
}) => {
  return (
    <section className={styles.container} style={style ? style : {}}>
      <div className={styles.imgWrapper}>
        <img
          srcSet={`${imageSm || HeroImgSm} 640w, ${imageLg || HeroImg} 2880w`}
          sizes={`(max-width: 500px) 640px (max-width: 1500px)  2880px`}
          src={imageSm || imageLg || HeroImgSm}
          alt="Lattu Kids"
        />
      </div>
      <div className={styles.legends}>
        <div className={styles.title}>
          <div className={styles.head}>{headLine1}</div>
          <div className={styles.head}>{headLine2}</div>
          <div className={styles.tag}>{tag}</div>
        </div>
        {showBtn && (
          <div className={styles.action}>
            <Link to="/bookdemo">Book For Services</Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
