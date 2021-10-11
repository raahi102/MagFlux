import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';

import styles from './gallery.module.scss';

const Gallery = () => {
  const images = [
    'https://picsum.photos/1000/600/',
    'https://picsum.photos/1000/600/',
    'https://picsum.photos/1000/600/',
    'https://picsum.photos/1000/600/',
    'https://picsum.photos/1000/600/',
    'https://picsum.photos/1000/600/',
    'https://picsum.photos/1000/600/',
  ];

  const displayImages = () => {
    return images.map((image, index) => {
      const id = `image-${index}`;
      return (
        <div key={id} className={styles.eachImage}>
          <img
            src={image}
            style={{ height: 'auto', width: '300px' }}
            id={id}
            alt="LattuKids"
          />
        </div>
      );
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Our Photo Gallery</div>
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
        dots={false}
        showSides={false}
        sidesOpacity={0.5}
        // sideSize={0.1}
        // slidesToScroll={4}
        // slidesToShow={4}
        autoCycle={true}
        arrows={true}
        className={styles.imagesContainer}>
        {displayImages()}
      </InfiniteCarousel>
    </div>
  );
};

export default Gallery;
