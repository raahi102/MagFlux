import React from 'react';

import HeroImg from '../../assets/images/approach@2x.png';
import HeroImgSmall from '../../assets/images/approachSmall@2x.png';
import ArrowImg from '../../assets/images/arrow.png';
import BulbImg from '../../assets/images/bulb.png';
import ClockImg from '../../assets/images/clock.png';
import GearImg from '../../assets/images/gear.png';
import PencilImg from '../../assets/images/pencil.png';
import PieImg from '../../assets/images/pie.png';
import RopeImg from '../../assets/images/rope.png';
import Hero from '../../components/hero/hero';
import styles from './approach.module.scss';

const Approach = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <Hero
          headLine1="Our Approach"
          showBtn={false}
          imageLg={HeroImg}
          imageSm={HeroImgSmall}
          style={{ textAlign: 'center' }}
        />
      </div>
      <div className={styles.story}>
        <div className={styles.title}>
          Lattu kids live learning unique things about us
        </div>
        <div className={styles.board}>
          <div className={styles.ropeImg}>
            <img src={RopeImg} alt="LattuKids" />
          </div>
          <div className={styles.components}>
            {/* <div className={styles.empty1}>EMPTY1</div>
            <div className={styles.empty2}>EMPTY2</div>
            <div className={styles.empty3}>EMPTY3</div> */}
            {/* <div className={styles.gear}> */}
            <div className={styles.gearImg}>
              <img src={GearImg} alt="LattuKids" />
            </div>
            <div className={styles.gearTopic}>
              Topics aligned to CBSE, ICSE and IB curriculum covering English,
              Maths, Science and General Awareness{' '}
            </div>
            {/* </div> */}
            {/* <div className={styles.bulb}> */}
            <div className={styles.bulbImg}>
              <img src={BulbImg} alt="LattuKids" />
            </div>
            <div className={styles.bulbTopic}>
              Conceptual Clarity: We go to the core of learning and ensure your
              child builds a strong conceptual clarity and a very strong
              learning foundation.
            </div>
            {/* </div> */}
            {/* <div className={styles.arrow}> */}
            <div className={styles.arrowImg}>
              <img src={ArrowImg} alt="LattuKids" />
            </div>
            <div className={styles.arrowTopic}>
              Small batch size of 6 per session - gives personal attention to
              your child
            </div>
            {/* </div> */}
            {/* <div className={styles.pie}> */}
            <div className={styles.pieImg}>
              <img src={PieImg} alt="LattuKids" />
            </div>
            <div className={styles.pieTopic}>
              We go beyond curriculum and cover topics relevant to kids' life
              skills and help them prepare for 21st century Digital learning
              experiences.
            </div>
            {/* </div> */}
            {/* <div className={styles.pencil}> */}
            <div className={styles.pencilImg}>
              <img src={PencilImg} alt="LattuKids" />
            </div>
            <div className={styles.pencilTopic}>
              We remove the boring from the learning experience and add an extra
              dose of fun. We believe in Fun led learning experiences.
            </div>
            {/* </div> */}
            {/* <div className={styles.clock}> */}
            <div className={styles.clockImg}>
              <img src={ClockImg} alt="LattuKids" />
            </div>
            <div className={styles.clockTopic}>
              Our methods include- Observing, Doing, Debating and Relating to
              our own life situations.
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className={styles.conclude}>
        Learning in schools always felt incomplete right ? You always feel that
        your children have missed out on that little edge ? You have come to the
        right place. At Lattu Kids every child is special for us and we give
        them that little push and make them go the extra mile so that we unleash
        the hidden potential of every child. We have combined the best of what
        kids learn in prescribed curriculum with our unique methods of helping
        them learn these in smarter ways. This means that children will improve
        their performance in schools as well as have a clear understanding of
        all concepts that they will come across. With a class strength of just
        1:6 , we ensure that every child gets the right attention from our world
        class instructors and teachers.
      </div>
    </div>
  );
};

export default Approach;
