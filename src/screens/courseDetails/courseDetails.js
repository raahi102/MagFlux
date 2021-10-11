import React from 'react';

import CourseDetailsView from '../../components/courseDetailsView/courseDetailsView';
import styles from './courseDetails.module.scss';
import courseDetailsData from './courseDetailsData';

const CourseDetailsScreen = () => {
  const getDetails = () => {
    return courseDetailsData.map((cd, i) => {
      return (
        <div key={i} className={styles.eachCourse}>
          <CourseDetailsView {...cd} />
        </div>
      );
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.left}>
          <div className={styles.heading}>Lattu Junior</div>
          <div className={styles.para}>
            Developing a basic understanding of the fields of Reading, Writing,
            Listening and Speaking
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.card}>
            <div className={styles.option}>
              <div className={styles.duration}>
                <input type="radio" name="duration" /> 1 Month
              </div>
              <div className={styles.veticalBar}></div>
              <div className={styles.sessions}>10 Sessions</div>
              <div className={styles.price}>Rs. 2000</div>
            </div>
            <div className={styles.option}>
              <div className={styles.duration}>
                <input type="radio" name="duration" /> 3 Months
              </div>
              <div className={styles.veticalBar}></div>
              <div className={styles.sessions}>30 Sessions</div>
              <div className={styles.price}>Rs. 5500</div>
            </div>
            <div className={styles.option}>
              <div className={styles.duration}>
                <input type="radio" name="duration" /> 6 Months
              </div>
              <div className={styles.veticalBar}></div>
              <div className={styles.sessions}>60 Sessions</div>
              <div className={styles.price}>Rs. 10000</div>
            </div>
            <div className={styles.action}>
              <button>Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.warmup}>
        <div className={styles.head}>
          Developing a basic understanding of the fields of Reading, Writing,
          Listening and Speaking
        </div>
        <div className={styles.support}>
          Each unit will be based on a theme. A specified sphere of activity or
          knowledge will be shared with the child. It can range from hard skills
          like Science and History, to soft skills, such as Logic and Reasoning.
          Apart from that, there is a special program which allows our tutors to
          cover 4 units based on the child’s interest in cartoons, sports etc.
        </div>
      </div>
      <div className={styles.detailsWrapper}>{getDetails()}</div>
    </div>
  );
};

export default CourseDetailsScreen;
