import React from 'react';
import { IconContext } from 'react-icons';
import { FaCheck } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

import styles from './demo.module.scss';

const Demo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.video}>
        <div className={styles.host}>
          <ReactPlayer
            url="https://lattukids01.s3.ap-south-1.amazonaws.com/assets/website/lattu_kids_online_class_mp4"
            playing={true}
            controls={true}
            muted={true}
            width={500}
            // height={150}
          />
        </div>
      </div>
      <div className={styles.title}>
        Get started with India's best home appliance Services today!
      </div>
      <div className={styles.featureList}>
        <div className={styles.eachList}>
          <div className={styles.tick}>
            <IconContext.Provider
              value={{
                style: { width: '20px', height: '20px', cursor: 'pointer' },
              }}>
              <FaCheck />
            </IconContext.Provider>
          </div>
          <div className={styles.text}>Only 6 students in every batch</div>
        </div>
        <div className={styles.eachList}>
          <div className={styles.tick}>
            <IconContext.Provider
              value={{
                style: {
                  width: '18px',
                  height: '20px',
                  cursor: 'pointer',
                },
              }}>
              <FaCheck />
            </IconContext.Provider>
          </div>
          <div className={styles.text}>Hand-pocked expert teachers</div>
        </div>
      </div>
      <div className={styles.action}>
        <div className={styles.btn}>
          <Link to="/bookdemo">Book an Appointment</Link>
        </div>
      </div>
    </div>
  );
};

export default Demo;
