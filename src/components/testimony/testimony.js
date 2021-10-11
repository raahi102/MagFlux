import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';

import TestimonyCard from '../testimonyCard/testimonyCard';
import styles from './testimony.module.scss';

const Testimony = () => {
  const testimonies = [
    {
      message:
        'Our programs facus on each child’s development in socialemotional growth, gross and fine motor skills, language and literacy, mathematics.',
      avatar: 'https://picsum.photos/id/1027/400',
      name: 'Kate Brown',
      intro: 'Mom of 2 Girls',
    },
    {
      message:
        'Our programs facus on each child’s development in socialemotional growth, gross and fine motor skills, language and literacy, mathematics.',
      avatar: 'https://picsum.photos/id/1027/400',
      name: 'Kate Brown',
      intro: 'Mom of 2 Girls',
    },
    {
      message:
        'Our programs facus on each child’s development in socialemotional growth, gross and fine motor skills, language and literacy, mathematics.',
      avatar: 'https://picsum.photos/id/1027/400',
      name: 'Kate Brown',
      intro: 'Mom of 2 Girls',
    },
    {
      message:
        'Our programs facus on each child’s development in socialemotional growth, gross and fine motor skills, language and literacy, mathematics.',
      avatar: 'https://picsum.photos/id/1027/400',
      name: 'Kate Brown',
      intro: 'Mom of 2 Girls',
    },
    {
      message:
        'Our programs facus on each child’s development in socialemotional growth, gross and fine motor skills, language and literacy, mathematics.',
      avatar: 'https://picsum.photos/id/1027/400',
      name: 'Kate Brown',
      intro: 'Mom of 2 Girls',
    },
    {
      message:
        'Our programs facus on each child’s development in socialemotional growth, gross and fine motor skills, language and literacy, mathematics.',
      avatar: 'https://picsum.photos/id/1027/400',

      name: 'Kate Brown',
      intro: 'Mom of 2 Girls',
    },
  ];

  const getSlides = () => {
    return testimonies.map((t, i) => {
      let bubbleColor = '#88d4f5';
      if (i % 2 === 0) {
        bubbleColor = '#ffc85b';
      }
      if (i % 3 === 0) {
        bubbleColor = '#fa9db7';
      }
      return (
        <div key={i} className={styles.eachSlide}>
          <TestimonyCard {...t} bubbleColor={bubbleColor} />
        </div>
      );
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Why parents love us</div>
      <div className={styles.caro}>
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 830,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 4090,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
          ]}
          dots={true}
          showSides={false}
          autoCycle={true}
          arrows={false}>
          {getSlides()}
        </InfiniteCarousel>
      </div>
    </div>
  );
};

export default Testimony;
