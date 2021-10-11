import React, { Fragment } from 'react';
import InfiniteCarousel from 'react-leaf-carousel';

import CourseCard from '../courseCard/courseCard';
import styles from './courses.module.scss';

const Courses = ({ title, background }) => {
  const courses = [
    {
      title: 'Quarterly(3 Months)',
      grade: 'Basic',
      headerColor: '#ec6c66',
      sessions: 6,
      age: 5,
      price: '299',
      topics: [
        'Lighting Control',
        'Landscape lighting',
        'Wiring Upgrade',
        'Circuit Breaker',
        'Electrical Safety',
        'Recessed Light(Ceiling light)',
      ],
    },
    {
      title: 'Half Yearly(6 months)',
      grade: 'Saver',
      headerColor: '#8260fc',
      sessions: 12,
      age: 6,
      price: '499',
      topics: [
        'Lighting Control',
        'Landscape lighting',
        'Wiring Upgrade',
        'Circuit Breaker',
        'Electrical Safety',
        'Recessed Light(Ceiling light)',
        'Fan(Ceiling or Stand fan)',
        'Motors',
        
      ],
    },
    {
      title: 'Yearly(12 Months)',
      grade: 'Super Saver',
      sessions: 24,
      age: 7,
      price: '899',
      headerColor: '#60c9b6',
      topics: [
        'Lighting Control',
        'Landscape lighting',
        'Wiring Upgrade',
        'Circuit Breaker',
        'Electrical Safety',
        'Recessed Light(Ceiling light)',
        'Fan(Ceiling or Stand fan)',
        'Motors',
        'Generators',
        'Emergency Call',
      ],
    },
  ];

  const getSlides = () => {
    return courses.map((t, i) => {
     // console.log('dd',t,i)
      return (
        <Fragment key={i}>
          <CourseCard {...t} />
        </Fragment>
      );
    });
  };
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: !background && 'white' }}>
      {title && (
        <div className={styles.title}>What would you like to learn today?</div>
      )}
      <div className={styles.courseWrapper}>
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
          arrows={false}>
          {getSlides()}
        </InfiniteCarousel>
      </div>
    </div>
  );
};

export default Courses;
