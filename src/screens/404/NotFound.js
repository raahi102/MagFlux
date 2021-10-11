import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';

const NotFoundScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        Are you lost? there is no path ahead. Let me help you.
      </div>
      <div className={(styles.message, styles.link)}>
        <Link to="/">Follow me, I will take you Home.</Link>
      </div>
    </div>
  );
};

export default NotFoundScreen;
